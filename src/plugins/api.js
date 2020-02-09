import Vue from 'vue'
import axios from 'axios'

class Api {
    constructor(vue) {
        this.vue = vue // Can grant access for cookies
        this.host = 'http://64.225.66.93'
        this.header = {
            'Content-Type': 'application/json'
        }
        // this.cookie = vue.cookie.get('cookie_name')
    }
    post(method, params = {}) {
        return (async (method, params) => {
            let url = this.host + method
            const response = await axios({
                method: 'POST',
                url: url,
                data: params,
                headers: this.header,
                maxRedirects: 1
            })
            return response || []
        })(method, params).catch(err => window.console.log(err))
    }
    get(method, params = {}) {
        return (async (method, params) => {
            let url = this.host + method
            window.console.log(url, params)
            const response = await axios({
                method: 'GET',
                url: url,
                params: params,
                headers: this.header,
                maxRedirects: 1
            })
            return response || []
        })(method, params).catch(err => window.console.log(err))
    }
}

Vue.prototype.$api = new Api(Vue)
