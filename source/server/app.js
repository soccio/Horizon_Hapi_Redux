import path from 'path';
import Hapi from 'hapi';
import inert from 'inert';
import horizon from '@horizon/server';
import devProps from '../../config/webpack/devProps';
import config from '../../config/page';
import chalk from 'chalk';



const server = new Hapi.Server({
    connections: {
        routes: {
            files: {
                relativeTo: path.join(process.cwd(), '.build')
            }
        }
    }
});


const port = process.env.PORT || config.port;
server.connection({port:port});


const host = process.env.NODE_ENV === 'production' ? '' : `http://127.0.0.1:${devProps.webpackPort}`;
const bundle = `${host}/static/client.bundle.js`;
const styles = `${host}/static/styles.css`;


server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply(`<!doctype html>
        <html>
          <head>
            <title>${config.title}</title>
            <link rel="stylesheet" type="text/css" href="${styles}" />
          </head>
          <body>
            <div class="container"></div>
            <script src="${bundle}"></script>
          </body>
        </html>`);
    }
});


server.register('inert'), (err) => {
    if (err) {
        throw err;
    }
};

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


const run = () => {

  server.start(() => {
    console.log(`Listening localhost:`  + port);

  });
}


export default { run };
