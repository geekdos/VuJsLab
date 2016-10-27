new Vue({
    el: '#app',
    data: {
        message: 'Hello World',
        link: 'http://geekdos.github.com',
        success: true
    },
    methods:{
        close: function () {
            this.success = false
        }
    }
})