var webpack = require('webpack')

module.exports = {
    entry: {
    index: ['./src/main.js'],
    vendor: [
      'react',
      'react-dom',
      'react-router',
      'react-redux',
      'redux',
      'redux-thunk',
      'echarts'
    ]
  },
  output: {
    path: __dirname,
    filename: 'public/js/[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,  //不包括这个文件夹
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
      }
    ]
  },
  plugins:[
  //   new webpack.ProvidePlugin({    //在react组件中使用jquery
  //     $:"jquery",
  //     jQuery:'jquery'
  //   }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      // contentBase: "views",  //变换根文件夹
      port: 8123
  }
}