#! /usr/bin/env node
'use strict';
require('shelljs/global');

const path = require('path');
const dirs = require('../config/dirs');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const clientConfig = require(path.join(dirs.webpack, 'webpack.config.client.dev.js'));


function compileClient() {
  const clientCompiler = webpack(clientConfig);

  const clientDevServer = new WebpackDevServer(
    clientCompiler,
    clientConfig.devServer
  );

  clientDevServer.listen(
    clientConfig.devServer.port,
    clientConfig.devServer.host
  );
}

compileClient();
