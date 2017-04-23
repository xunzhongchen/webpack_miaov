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

            /*{
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader'
            },*/

            /*{
                test:/.css$/, //正则，匹配到的文件后缀名
                loader:'style!css!',
                loaders:["style","css"],            //string|array处理匹配到的文件  从右往左
                exclude:"/node_modules/",          //string|array排除的文件夹
                include:['']                    //string|array包含的文件夹
            }*/
        ]
    }
}
