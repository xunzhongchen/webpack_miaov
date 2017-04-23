var htmlWebpackPlugin=require('html-webpack-plugin');
var path=require('path');

module.exports={
    entry:{
        build:'./react/index.js'
    },
    output:{
        path:'./react_build/',
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
                include:path.resolve(__dirname,"react"),
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
            title:'欢迎11',
            chunks:['build']
        })

    ]

}
