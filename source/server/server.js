import path from 'path';
import Hapi from 'hapi';
import h2o2 from "h2o2";
import Inert from 'inert';
import horizon from '@horizon/server';
import devProps from '../../config/webpack/devProps';
import config from '../../config/page';
import chalk from 'chalk';

/**
 * Start Hapi server
 */

const plugins = [
    {register: Inert}, // enables serving static files (file and directory handlers)
    {register: h2o2},
];


const server = new Hapi.Server();
const port = process.env.PORT || config.port;
server.connection({ port: port });


server.register(plugins, (err) => {

    if (err) {
        console.error(err);
        return;
    }

    server.route({
        method: 'GET',
        path: '/static/{path*}',
        handler: {
            directory: {
                path:  './.build',
                index: false,
                listing: false,
                showHidden: true
            }
        }
    });

    /**
     * Endpoint that proxies all GitHub API requests to https://api.github.com.
     * This fetches the api information and can then be retrieve with
     * fetch_isomorphic in the action creator.

    server.route({
    	method: "GET",
    	path: "/api/github/{path*}",
    	handler: {
    		proxy: {
    			passThrough: true,
    			mapUri (request, callback) {
    				callback(null, url.format({
    					protocol: "https",
    					host:     "api.github.com",
    					pathname: request.params.path,
    					query:    request.query
    				}));
    			},
    			onResponse (err, res, request, reply, settings, ttl) {
    				reply(res);
    			}
    		}
    	}
    }); */



const host = process.env.NODE_ENV === 'production' ? '' : `http://127.0.0.1:${devProps.webpackPort}`;
const bundle = `${host}/static/client.bundle.js`;
const styles = process.env.NODE_ENV === 'production' ? '' : `<link rel="stylesheet" type="text/css" href="${host}/static/styles.css" />`;

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
              reply(`  <html>
                  <head>
                    <title>${config.title}</title>
                  ${styles}
                  </head>
                  <body>
                    <div class="container"></div>
                    <script src="${bundle}"></script>
                  </body>
                </html>`)
        }
    });


    const httpServer = server.connections.map((c) => c.listener);
    const horizonServer = horizon(httpServer, {
      auto_create_collection: true,
      auto_create_index: true,
      project_name: 'tuition',
      rdb_host: "172.17.0.2",
      rdb_port: "28015",
      permissions: false, // waiting for additions to permission system atm
      auth: {
        allow_anonymous: true,
        allow_unauthenticated: true,
        token_secret: config.token_secret
      }
    });


    server.start(() => {
      console.info("==> ✅  Server is listening");
      console.info("==> 🌎  Go to " + server.info.uri.toLowerCase());
    });
});
