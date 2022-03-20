<template>
    <div>
        <div>
            <p></p>
            <button type="button" class="btn btn-info" v-on:click="goSignin()">Sign in</button>
            <p></p>
            <button type="button" class="btn btn-info" v-on:click="goSignup()">Sign up</button>
        </div>
    </div>
</template>
<script>
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
            },
            
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