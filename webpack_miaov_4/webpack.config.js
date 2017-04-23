module.exports={
    entry:'./app/index.js',
    output:{
        path:'./build/',
        filename:'build.js'
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
    resolve:{
        extensions:['','.js','.css','.jsx']//自动补全后缀
    },
    devServer:{
        host:'0.0.0.0'
    }
}
