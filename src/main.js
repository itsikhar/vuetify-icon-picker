// import Vue from 'vue'
// import App from './App.vue'
// import vuetify from './plugins/vuetify'

// Vue.config.productionTip = false

// new Vue({
//   vuetify,
//   render: h => h(App)
// }).$mount('#app')


import IconPicker from './components/index';

IconPicker.install = (Vue) => {
  Vue.component('icon-picker', IconPicker);
};

if (typeof window !== 'undefined') {
  window.IconPicker = IconPicker;
}

export default IconPicker;