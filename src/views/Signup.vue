<template>
    <div>
        <p></p>
        <b-form-input v-model="text" placeholder="ID"></b-form-input>
        <p></p>
        <b-form-input v-model="password" placeholder="PASSWORD"></b-form-input>
        <p></p>
        <button type="button" class="btn btn-info" v-on:click="signup()">Sign up</button>
        <p></p>
        <div>
            회원가입 테스트 결과
        </div>
    </div>
</template>
<script>
    export default {
        name:'Signup',
        data() {
            return {
                account: [
                    'id',
                    'password',
                ],
            };
        },

        watch: {

        },

        methods: {
            signup() {
                
            },
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