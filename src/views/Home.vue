<template>
    <div>
        <div>
            <p></p>
            <H1>
                {{ isAuthenticated ? "로그인 됨" : "로그인 안 됨" }}
            </H1>
            <p></p>
            <button type="button" class="btn btn-info" v-on:click="goSignin()">Sign in</button>
            <p></p>
            <button type="button" class="btn btn-info" v-on:click="goSignup()">Sign up</button>
        </div>
    </div>
</template>
<script>
    import { mapGetters } from "vuex"

    export default {
        name:'Home',
        data() {
            return {
                List: [],
            };
        },



        methods: {
            goSignin() {
                this.$router.push({name: "Signin"}).catch(()=>{})
            },
            goSignup() {
                this.$router.push({name: "Signup"}).catch(()=>{})
            }
            
        },
        
        computed: {
            ...mapGetters(["isAuthenticated"]),
        },

        watch: {

        },

        beforeCreate() {
            
        },
        created() {
            
        },
        beforeMount() {
            
        },
        mounted() {
            
        },
        beforeUpdate() {
            
        },
        updated() {
    
        },
        beforeDestroy() {
            
        },
        destroyed() {
            
        },
    };
</script>