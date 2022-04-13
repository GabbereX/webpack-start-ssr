const path = require('path');
const webpack = require('webpack');
const express = require('express');
const [webpackClientConfig, webpackServerConfig] = require('../webpack.config');
const nodemon = require('nodemon');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const hmrServer = express();
const clientCompiler = webpack(webpackClientConfig);

hmrServer.use(
  webpackDevMiddleware(clientCompiler, {
    publicPath: webpackClientConfig.output.publicPath,
    serverSideRender: true,
    // noInfo: true,
    // watchOptions: {
    //   ignore: '../dist/',
    // },
    writeToDisk: true,
    stats: 'errors-only',
  })
);

hmrServer.use(
  webpackHotMiddleware(clientCompiler, {
    path: '/static/__webpack_hmr',
  })
);

hmrServer.listen(3001, () => {
  console.log('HMR server successfuly started');
});

const compiler = webpack(webpackServerConfig);

// compiler.run(err => {
//   if (err) {
//     console.log('Compilation failed: ', err);
//   }

// });

compiler.watch({}, err => {
  if (err) {
    console.log('Compilation failed: ', err);
  }
  console.log('Compilation was successfully');
});

nodemon({
  script: path.resolve(__dirname, '../dist/server/server.js'),
  watch: [
    path.resolve(__dirname, '../dist/server'),
    path.resolve(__dirname, '../dist/client'),
  ],
});
