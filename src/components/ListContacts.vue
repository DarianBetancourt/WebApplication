<template>
    <div class="list-contacts container bg-white shadow py-5">
        <div class="row mb-5 mx-3">
            <div class="col-6 text-start">
                <span class="table-title">Listagem de contatos</span>
            </div>
            <div class="col-6 text-end">
                <button class="btn btn-primary" @click="this.$router.push('/contacts/new')">Adicionar Novo Contato</button>
            </div>
        </div>
        <Alert :msg="msg" v-if="alert"/>
        <div class="table-responsive container pb-3">
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col" v-for="(col,index) of tableHead" :key=index >
                            {{col}}
                            <svg v-if="col != 'Ações'" width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 5L0 0H10L5 5Z" fill="#244677"/></svg>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="contact of contacts" :key="contact.id">
                        <th scope="row">{{contact.id}}</th>
                        <td>{{contact.name}}</td>
                        <td>{{contact.mobile}}</td>
                        <td>{{contact.email}}</td>
                        <td class="td-actions">
                            <a class="txt-action" @click="this.$router.push('/contacts/'+contact.id)">
                                <img src="@/assets/img/edit.svg" alt="editar">
                                Editar
                            </a>
                            <a class="txt-action" @click="deleteContact(contact.id)">
                                <img src="@/assets/img/trash.svg" alt="excluir">                               
                                Excluir
                            </a>    
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <stackContactsVue :contacts="contacts" class="stack"/>

    </div>  
</template>

<script>
    import Api from '../services/contacsResources'
    import Alert from '@/components/Alert.vue'
    import stackContactsVue from './stackContacts.vue'

    export default {
        data (){
          return{
            contacts:[],
            tableHead:['#','Nome','Celular','Email','Ações'],
            id:"",
            name:"",
            mobile:"",
            email:"",
            alert:false,
            msg:{text:"",type:""},
            stack:false,

          }
          
        },
        components: {
            Alert,
            stackContactsVue
        },
        methods :{
            deleteContact(id){
                if(confirm('Tem certeza que deseja excluir este contato?')){
                    Api.deleteContact(id).then(response =>{ 
                        if(response.status == 200){
                            console.log("contato removido")
                            this.msg.text = "Contato removido com sucesso!"
                            this.msg.type = "success"
                            this.alert = true
                            this.list()
                        }
                    }).catch(error => {
                        console.log(error)
                        this.msg.text = "Erro removendo o contato!"
                        this.msg.type = "danger"
                        this.alert = true
                    });
                }
            },
            list(){
                Api.listContacts().then(response =>{ 
                    this.contacts = response.data
                    if(this.contacts.length == 0){
                        this.contacts=[
                            {
                                id:"1",
                                name:"Darian Betancourt",
                                mobile:"92988324857",
                                email:"darianbetancourt8@gmail.com"
                            },
                            {
                                id:"2",
                                name:"Isbeli Ramirez",
                                mobile:"92988324854",
                                email:"isbeliramirez8@gmail.com"
                            },

                        ]
                    }
                }).catch(error => {
                    /* error getting contacts */
                    this.msg.text="erro ao obter contatos";
                    this.msg.type="danger"
                    this.alert=true;
                });
            }
        },
        mounted() {
            this.list()
            console.log(screen.width)
            if(screen.width <= 500){
                this.stack=true;
            }
        }, 
    }
</script>


<style scoped>
    .list-contacts{
        border-radius: 8px;
    }
    .table-title{
        color: #244677;
        font-family: 'Poppins';
        font-weight: 700;
        font-size: 24px;
    }
    .table{
        /* for bottom border color in table head  */
        color: #ADB5BD;
        text-align: start;
    }
    td, th {
        padding: 20px !important;
    }
    th{
        vertical-align: middle;
        font-weight: 700 !important;
        color: #244677 !important;
    }
    thead > tr > th:nth-child(5){
        width: 220px;
    }
    thead > tr > th:nth-child(1){
        width: 100px;
    }
    td{
        color: #495057 !important;
    }
    td.td-actions{
        gap: 10px;
    }
    td > a{
        text-decoration: none;
        cursor: pointer;
        color: #495057 !important;
    }
    .table-striped > tbody > tr:nth-of-type(odd) > * {
        --bs-table-accent-bg: #F1F3F5 !important;
    }
    .table > :not(caption) > * > *{
        border-bottom-width: 0px;
    }
    .stack{
            display: none;
        }
    button{
        background-color: #4263EB;
        padding: 16px 24px;
        border-radius: 8px;
        border: 0px;
    }
   
    @media (min-width:768px) and (max-width: 990px){
        td, th {
            font-size: 13px !important;
        }
    }
    @media (min-width:570px) and (max-width: 767px){
        td, th {
            font-size: 8px !important;
        }
    }
    @media (max-width: 570px){
        td, th {
            font-size: 7px !important;
        }
    }
    @media (max-width: 500px){
        .stack{
            display: flex;
        }
        .table-responsive{
            display: none;
        }
    }
</style>