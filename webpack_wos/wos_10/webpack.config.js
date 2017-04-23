

module.exports={
    //唯一入口文件
    entry:__dirname+'/src/js/index.js',
    //输出文件
    output:{
        path:__dirname+'/assets/js',
        filename:"index.js",
        publicPath:"/temp/"
    },
    devServer:{
        contentBase:'./',
        host:"192.168.31.20",//本地 ip
        port:'3333'
    },
    module:{
        loaders:[
            {
                test:/\.css$/,
                loader:"style-loader!css-loader"
            },
            {
                test:/\.less/,
                loader:"style!css!less"
            }
        ]
    },

    plugins:[]

}