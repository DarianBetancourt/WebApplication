<template>
    <div class="mb-5">
        <span class="title-container">{{title}}</span>
        <p class="mt-3">{{information}}</p>
    </div>
    <Alert :msg="msg" v-if="alert"/>
    <div class="form-container mx-3">
        <form v-on:submit.prevent="submitForm()">
            <div class="text-start form-group mb-4">
                <label for="name" class="form-label">Nome Completo</label>
                <input type="text" class="form-control" id="name" placeholder="Digite o nome do contato" required v-model="contact.name" pattern="^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$">
            </div>
            <div class="row">
                <div class="col-sm-6 text-start form-group">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Digite o email" required v-model="contact.email">
                </div>
                <div class="col-sm-6 text-start form-group">
                    <label for="mobile" class="form-label">Celular</label>
                    <input type="number" class="form-control" id="mobile" placeholder="Digite o celular" required v-model="contact.mobile">
                </div>
            </div>
            <button type="submit" class="btn w-100 text-white">{{textButton}}</button>
        </form>
    </div>
</template>
<script>
import Alert from '../components/Alert.vue';
import Api from '../services/contacsResources'

export default {
    data() {
        return {
            textButton:"",
            title:"",
            information:"",
            action:"edit",
            alert:false,
            msg:{text:"",type:""}
        };
    },
    components:{
        Alert
    },
    props:{
        contact:{
            type : Object,
            default:{
                id: '',
                name: '',
                email: '',
                mobile: '',
                created_at: '',
                action: "edit"
            }
        } 
    },
    mounted(){
        if (this.contact.action == "edit"){
            this.title = "Atualizar contato"
            this.information = "Faça as alterções necessárias e ao terminar salve seu contato"
            this.textButton = "Salvar alterações"
        }else{
            this.title = "Cadastre um novo contato"
            this.information = "Preencha as informações para cadastrar um novo contato"
            this.textButton = "Cadastrar contato"
        }
        this.action = this.contact.action
    },
    methods:{
        submitForm(){
            if (this.action == "edit"){
                console.log("updating...")
                Api.updateContact(this.contact).then(response =>{ 
                    if(response.status == 200){
                        console.log("contato atualizado")
                        this.msg.text = "Contato atualizado com sucesso!"
                        this.msg.type = "success"
                        this.alert = true
                    }
                }).catch(error => {
                    console.log(error)
                    this.msg.text = "Erro atualizando o contato!"
                    this.msg.type = "danger"
                    this.alert = true
                });
            }
            else if(this.action == "register"){
                Api.newContact(this.contact).then(response =>{ 
                    if(response.status == 200){
                        console.log("contato cadastrado")
                        this.msg.text = "Contato cadastrado com sucesso!"
                        this.msg.type = "success"
                        this.alert = true
                        this.clean()
                    }
                }).catch(error => {
                    console.log(error)
                    this.msg.text = "Erro cadastrando o contato!"
                    this.msg.type = "danger"
                    this.alert = true
                });
            }

        },
        clean(){
            this.contact.name= ''
            this.contact.email= ''
            this.contact.mobile= ''
        }
    }

}
</script>
<style scoped>
    .title-container{
        color: #244677;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 110%;
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
    margin-bottom: 40px;
 }
</style>