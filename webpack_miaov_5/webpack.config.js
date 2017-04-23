module.exports={
    entry:'./app/index.js',
    output:{
        path:'./build/',  //这一条可以省略
        filename:'build.js',
        publicPath:'/build/'  //publicPath:'/build/'    error =>  publicPath:'./build/'      publicPath:'./build'
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
    }
}
