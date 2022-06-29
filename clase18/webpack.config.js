const path = require('path');

console.log('estoy por configurar web pack');

module.exports = {
    entry: './webpacksrc/index.js',
    mode: 'development',
    module: {
        rules: [
          {
             test: /\.(js)$/,
             exclude: /node_modules/,
             use: ['babel-loader']
          },
          {
            test:/\.css$/,
            use:['style-loader','css-loader']
          }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'webpackdst'),
        filename: 'bundle.js'
    }
}

console.log(module.exports);