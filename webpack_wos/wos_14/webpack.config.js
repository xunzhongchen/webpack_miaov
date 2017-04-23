var  ExtractTextPlugin=require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    //唯一入口文件
    entry:__dirname+'/src/js/index.js',
    //输出文件
    output:{
        path:__dirname+'/assets',
        filename:"js/index.js"/*,
        publicPath:"/assets/"*/
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
        new HtmlWebpackPlugin()
    ]

}