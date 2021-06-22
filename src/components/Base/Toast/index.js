/**
 * plugin popup
 */
import Toast from './Toast.vue';
Toast.install = (Vue, options = {}) => {
    let MyComponent = Vue.extend({
        render: h=> {
            return h(Toast,{
                props:{
                    options: options
                },
                ref: "Toast"
            })
        }
    })
    var component = new MyComponent().$mount()
    document.body.appendChild(component.$el)
    Vue.prototype.$toast = component.$refs.Toast
}
export default Toast;