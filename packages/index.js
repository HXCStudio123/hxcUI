import hxcTest from './test'
// 所有组件列表
const components = [
    hxcTest
];
// 定义 install 方法，接收 Vue 做参数
const install = function (Vue) {
    // 判断是否安装，安装过就不继续向下执行
    if( install.installed ) return;
    install.installed = true;
    // 遍历注册所有组件
    components.map(component => Vue.component(component.name, component))
    // 同此写法   components.map(component=>Vue.use(component))
};

// 检测到 Vue 才执行
if ( typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    //  所有组件，必须具有 install 才能使用 Vue.use
    ...components
}