<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-6">
                <img class="img-welcomwe w-100" src="@/assets/img/Secure_login_amico.png" alt="login"/>
            </div>
            <div class="col-sm-6">
                <h2 class="welcome mb-4">Bem-vindo!</h2>
                <p class="mb-5">Faça login para acessar nossa plataforma</p>
                <div class="form-container">
                    <form v-on:submit.prevent="login(user)">
                        <div class="text-start form-group">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="Digite seu email" required v-model="user.email">
                        </div>
                        <div class="mb-3 mt-4 text-start form-group">
                            <label for="password" class="form-label">Senha</label>
                            <input type="password" class="form-control" id="password" placeholder="Digite sua senha" required v-model="user.password">
                        </div>
                        <button type="submit" class="btn w-100 text-white">Fazer Login</button>
                    </form>
                </div>
                
            </div>
        </div>
    </div>

    <div v-if="false" class="container">
        <div class="login-img">
            <img src="@/assets/img/Secure_login_amico.png" alt="login"/>
        </div>
        
        <div class="login">
            <h3>Bem-vindo!</h3>
            <p>Faça login para acessar nossa plataforma</p>
            <form v-on:submit.prevent="login(user)" class="form-login">
                <label for="" class="label-login">Email</label>
                <input 
                    type="email" 
                    class="input-login" 
                    placeholder="Digite seu email" 
                    required
                    v-model="user.email" >

                <label for="" class="label-login">Senha</label>
                <input 
                    type="password" 
                    class="input-login" 
                    placeholder="Digite sua senha" 
                    required 
                    v-model="user.password">
                    <!-- Alert -->
                <label class="alert" v-if="user.error.status==true">{{user.error.msg}}</label>
                <button class="btn-login" type="submit">Fazer login</button>

            </form>    
        </div>
         
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import router from '../router'

    export default {
        data() {
            return{
                user: {
                    email: '',
                    password: '',
                    error: {
                        status : false,
                        msg: ''
                    }
                },
            }
        },
        methods:{
            ...mapActions(['login'])
        },
        beforeCreate(){
            /* if token exist go to /contacts*/
            if (localStorage.getItem('token')){
                console.log('is logged')
                router.push('/contacts')
            }
        }
    }
</script>


<style scoped>
 .container-fluid{
     height: 100%;
 }
 .row{
     height: 100%;
     align-items: center;
     margin: auto;
 }
 .img-welcomwe{
     max-width: 550px;
 }
 .welcome{
     color: #244677;
     font-family: 'Poppins';
     font-style: normal;
     font-weight: 700;
     font-size: 36px;
     line-height: 110%;
 }
 /* Form */
 .form-container{
     max-width: 500px;
     margin: auto;
 }
 .form-label{
     font-weight: 700;
     color: #12295B;
     margin-bottom: 4px;
 }
 input{
    background: #F1F3F5;
    border-radius: 8px;
    border-width: 0px;
    padding: 16px;
 }
 button{
    background: #12295B;
    border-radius: 8px;
    padding: 16px;
    margin-top: 80px;
 }
</style>
