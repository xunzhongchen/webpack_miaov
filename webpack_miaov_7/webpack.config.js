var htmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
    entry:{
        build:'./app/index.js',
        abc:'./app/abc.js'
    },
    output:{
        path:'./build/',  //这一条可以省略
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
            title:'欢迎index',
            chunks:['build']
        }),
        new htmlWebpackPlugin({
            title:'欢迎1',
            filename:'class1.html',
            chunks:['build','abc']
        }),
        new htmlWebpackPlugin({
            title:'欢迎2',
            filename:'class2.html',
            chunks:['abc']
        }),
        new htmlWebpackPlugin({
            title:'欢迎3',
            filename:'class3.html'
        })

    ]

}
