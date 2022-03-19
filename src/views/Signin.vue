<template>
    <div>
        <b-form @submit="onSignin" @reset="onReset">

            <b-form-group id="input-group-1" label="ID" label-for="input-1" description="We'll never share your account with anyone else.">
                <b-form-input id="input-id" v-model="account.id" type="text" placeholder="ID" required>
                </b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                <b-form-input id="input-2" v-model="account.password" type="password" placeholder="PASSWORD" required>
                </b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>

        </b-form>

        <div>
            결과 테스트 창
        </div>
        
        <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ result }}</pre>
        </b-card>
        
    </div>
</template>
<script>
    export default {
        name:'Signin',
        data() {
            return {
                account: {
                    id: '',
                    password: '',
                    jwt: '',
                },
                show: true,
                result: '',
            };
        },

        watch: {

        },

        methods: {
            onSignin(event) {
                event.preventDefault()
                alert(JSON.stringify(this.account))
                this.getToken()
            },
    
            onReset(event) {
                event.preventDefault()
                this.account.id = ''
                this.account.password = ''
                this.account.jwt = ''
                this.show = false
                this.$nextTick(() => {
                    this.show = true
                })
            },

            getToken() {
                if (name != undefined) {
                    this.$axios
                    .get("https://quiz-aka.herokuapp.com/auth/signin", {
                        headers: {'Content-Type': 'application/json'},
                        body: {"id": this.account.id, "password": this.account.password},
                    })
                    .then((res) => {
                        console.log(res);
                        this.result = res;
                    })
                    .catch((error) => {
                        this.result = error;
                    })
                    .finally(() => {
                        console.log("끝");
                    });
                }
                else {
                    console.log("User name Undefined");
                }
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