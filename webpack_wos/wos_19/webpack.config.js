var ExtractTextPlugin=require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack=require('webpack')


module.exports={
    //唯一入口文件
    entry:{
        app:__dirname+'/src/js/index.js',
        v:['jquery']
    },
    //输出文件
    output:{
        path:__dirname+'/assets',
        filename:"js/[name].js"
    },
    devServer:{
        contentBase:'./',
        host:"192.168.31.20",//本地 ip
        port:'3333'
    },
    module:{
        loaders:[
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test:/\.png$|\.jpg$|\.jpeg/,
                use:'url-loader?limit=5000&name=image/img-[hash:8].[name].[ext]&publicPath=../'
            }
        ]
    },

    plugins:[
        new ExtractTextPlugin({
            filename:  (getPath) => {
                return getPath('css/[name].css').replace('css/js', 'css');
            },
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            title: 'wos_15',
            filename: '../index.html',


            template:__dirname+'/src/tpl/index.html',
            inject:'body',//'body'  'head' script更新的位置
            info:'hello word '

        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })

        ,
        new webpack.optimize.CommonsChunkPlugin({
            name: 'v',
            filename: 'lib/jquery.min.js'
        })

    ]

    /*,
    watch:true*/
}