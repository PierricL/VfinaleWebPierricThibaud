/* eslint-disable no-console */
export default {
    name: 'Login',
    data: function() {
        return {
            username: "",
            pwd: ""
        }
    },
    computed: {

    },
    methods: {
        login(evt) {
            evt.preventDefault()
            console.log(this.username)
            this.$axios.post("http://localhost:8081/login", {"username":this.username, "password":this.pwd})
                .then((response)=>{
                    console.log(response)
            }).catch((error)=>{
                console.log(error)
            })
        }
    },
    mounted: function() {

    },
    components: {

    }
}