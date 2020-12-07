/* eslint-disable no-console */
export default {
    name: 'Login',
    data: function() {
        return {
            username:"",
            password:""
        }
    },
    computed: {

    },
    methods: {
        onLogin() {
            this.$axios.post("http://localhost:8081/login", {"username":this.username, "password":this.password})
            .then((response)=>{
                console.log(response.data)
            }).catch((error)=>{
                console.log(error)
            })
        },
        onReset() {
            this.username = ""
            this.password = ""
        }
    },
    mounted: function() {

    },
    components: {

    }
}