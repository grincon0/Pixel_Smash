const path = require('path');

module.exports = {
  entry: './app/public/client/views/index.html',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    fallback: {
      "fs": false,
      "net": false,
      "tls": false,
      "child_process": false,
      "dns": false,
      "crypto": false,
      "os": false,
      "path": false,
      "http2": false,
      "http": false,
      "https": false,
      "stream": false,
      "zlib": false,
      "querystring": false,
      "url": false,
/*       "zlib": require.resolve("browserify-zlib"),
      "querystring": require.resolve("querystring-es3"),
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "buffer": require.resolve("buffer"),
      "util": require.resolve("util"),
      "assert": require.resolve("assert") */
    }
  }
};