<template>
    <div class="container bg-white shadow pt-5">
        <FormContact :contact="contact"/>
    </div>
</template>
<script>
import FormContact from '../components/FormContact.vue';
import Api from '../services/contacsResources'

export default {
    data(){
        return {
            contact : {
                id: '',
                name: '',
                email: '',
                mobile: '',
                created_at: '',
                action:"edit",
            },
        }
    },
    beforeCreate(){
        Api.getContact(this.$route.params.id).then(response =>{ 
            this.contact = response.data
        });
    },
    components:{
        FormContact
    }    
}
</script>
<style scoped>
    .container{
        max-width: 800px;
        border-radius: 8px;
    }
</style>
