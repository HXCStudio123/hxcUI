const path = require('path');
module.exports = {
    //修改 pages 入口
    pages : {
        index : {
            entry:'examples/main.js',//入口
            template:'public/index.html',//模板
            filename:'index.html'// 输出文件
        }
    },
    // 扩展webpack 配置
    chainWebpack : config => {
        // @ 默认指向src目录，这里要改成examples
        // 另外也可以新增一个 ~ 指向packages
        // 把一个路径或路径片段的序列解析为一个绝对路径。 相当于执行cd操作
        config.resolve.alias
            .set('@',path.resolve('examples'))
            .set('~',path.resolve('packages'));

        //  把packages 和 examples 加入编译，因为新增的文件默认不被webpack处理
        config.module
            .rule('js')
            .include.add(/packages/).end()
            .include.add(/example/).end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                //  修改选项
                return options;
            })
    }

};