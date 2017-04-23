var htmlWebpackPlugin=require('html-webpack-plugin');


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
