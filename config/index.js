import Vue from 'Vue'
import Favlist from '../app/components/Favlist.vue'
import Second from '../app/components/Second.vue'
Vue.config.debug = true;//开启错误提示


window.onload = function () {
	//定义子组件，子组件必须在父组件之前定义。  
Vue.component('child', Second); 
//定义父组件
  new Vue({
      el: '#app',
      components: {
        'my-component': Favlist,
      },
      methods:''
  });
}