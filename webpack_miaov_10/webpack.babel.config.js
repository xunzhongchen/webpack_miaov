var htmlWebpackPlugin=require('html-webpack-plugin');
var path=require('path');

module.exports={
    entry:{
        build:'./es6/index.js'
    },
    output:{
        path:'./es6_build/',
        filename:'[name].js'
    },
    module:{
        loaders:[
            {
                test: /\.css$/,
                exclude: ['/node_modules/'],
                loaders:["style","css"]
            },
            {
                test:/\.js$/,
                exclude: ['/node_modules/'],
                loaders:['babel'],
                include:path.resolve(__dirname,"es6"),
            }
        ]
    },
    devServer:{
        hot:true,
        inline:true,
        host:'0.0.0.0'
    },
    resolve:{
        extensions:['','.js','.css','.jsx']//自动补全后缀
    },
    plugins:[
        new htmlWebpackPlugin({
            title:'欢迎9',
            chunks:['build']
        })

    ]

}
