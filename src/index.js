import VueProtectForm from "./vue-protect-form.vue";

function install(Vue, opts = {}) {
  Vue.component(opts.vueProtectFormName || 'VueProtectForm', VueProtectForm)
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use({ install: install })
}

export default {
  install,
  VueProtectForm
}
