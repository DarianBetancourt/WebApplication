<template>
    <div class="container bg-white shadow pt-5">
        <FormContact :contact="contact"/>
    </div>
</template>
<script>
import FormContact from '../components/FormContact.vue';

export default {
    data(){
        return {
            contact : {
                name: '',
                email: '',
                mobile: '',
                action:"register",
            },
        }
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