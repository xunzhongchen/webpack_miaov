var htmlWebpackPlugin=require('html-webpack-plugin');
var path=require('path');

module.exports={
    entry:{
        build:'./app/index.jsx'
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
                test:/\.jsx?$/,
                exclude: ['/node_modules/'],
                loaders:['react-hot','babel?presets[]=es2015&presets[]=react'],
                include:path.resolve(__dirname,"app"),
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
            title:'todo',
            chunks:['build']
        })

    ]

}
