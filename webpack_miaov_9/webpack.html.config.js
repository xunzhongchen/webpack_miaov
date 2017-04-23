var htmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
    entry:{
        build:'./app/index.js',
        abc:'./app/abc.js'
    },
    output:{
        path:'./build/',
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
            title:'欢迎',
            chunks:['build']
        })

    ]

}
