const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const GLOBAL_CSS_REGEXP = /\.global\.scss/;

module.exports = {
  target: 'node',

  resolve: {
    extensions: ['.jsx', '.js', '.ts', '.tsx', '.json'],
    // alias: {
    //   '@images': path.resolve(__dirname, './src/assets/images'),
    // },
  },

  mode: NODE_ENV ? NODE_ENV : 'development',

  entry: path.resolve(__dirname, '../src/server/server.js'),

  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: 'server.js',
    publicPath: '/static/',
  },

  externals: [nodeExternals()],

  module: {
    rules: [
      {
        test: /.[tj]sx?$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },

      {
        test: /.scss$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]',
                exportOnlyLocals: true,
              },
            },
          },
          'sass-loader',
        ],
        exclude: GLOBAL_CSS_REGEXP
      },
      {
        test: GLOBAL_CSS_REGEXP,
        use: ['css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff2?)$/i,
        type: 'asset/resource',
      },
    ],
  },

  plugins: [new CleanWebpackPlugin()],

  optimization: {
    minimize: false,
  },
};
