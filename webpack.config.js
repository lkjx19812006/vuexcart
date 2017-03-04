//入口文件名替换插件
//f -i ./webpack.config.js@webpack 使用老孔的fast-init
var htmlWebpackPlugin = require('html-webpack-plugin');
//引入Node核心模块
var path = require('path');
//找到当前目录 设置路径
var distPath = path.join(__dirname, '/dist')
module.exports = {
    entry: "./app/main.js",//人口文件地址
    output: {
        path: distPath,//设置路径 根路径和绝对路径会影响打包和热加载
        filename: "build.js"//设置输出文件名
    },
    module: {
        loaders: [
        {//打包ES6语法
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader?presets[]=es2015'
        }, {//打包vue
            test: /\.vue$/,
            exclude: /node_modules/,
            loader: 'vue-loader'
        }, {//打包css
            test: /\.css$/,
            loader: "style-loader!css-loader!autoprefixer-loader"
        }, {//打包less
            test: /\.less$/,
            loader: "style-loader!css-loader!less-loader"
        }, {//打包sass
            test: /\.sass$/,
            loader: "style-loader!css-loader!sass-loader"
        }, {//打包图片格式
            test: /\.(jpg|png|ttf)$/,
            loader: "url-loader?limit=400"//设置打包的图片大小
        }]
    },
    // 配置反向代理
     devServer: {  
        //其实很简单的，只要配置这个参数就可以了  
        proxy: {  
             '/cook': {
              target: 'http://apis.juhe.cn',
              pathRewrite: {'^/cook' : '/cook'},
              changeOrigin: true
            }
        }  
    }, 
    plugins: [new htmlWebpackPlugin({
        title: 'index',
        filename: 'index.html',//插件转换后的文件名
        template: 'index.html'//插件转换前的文件名
    })]

}
