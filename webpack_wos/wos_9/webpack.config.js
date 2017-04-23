

/*var webpack=require('webpack');*/


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


        /*,
        color:true*/
    }


    /*,
    plugin:[ new webpack.HotModuleReplacementPlugin()]*/

}