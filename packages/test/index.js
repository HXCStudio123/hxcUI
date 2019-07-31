/**
 *  为组件提供 install 方法，供组件对外按需引入
 *  之前使用其他UI框架时经常会看见 Vue.use() 一个组件，
 *  原因是，使用 Vue.use 时调用了 install 方法安装组件。
 *
 *  这是单个组件的 install 安装 ， 目的是把组件暴露出去
  */
import hxcTest from './src/test'

hxcTest.install = Vue => {
    Vue.component(hxcTest.name,hxcTest)
};
export default hxcTest