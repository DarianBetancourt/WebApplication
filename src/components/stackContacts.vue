<template>
    <div class="list-group">
        <a v-for="contact of contacts" :key="contact.id" href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{{contact.name}}</h5>
            <small class="text-muted">{{contact.mobile}}</small>
            </div>
            <p class="mb-1">{{contact.email}}</p>
            <small class="text-muted">
                <a class="txt-action" @click="this.$router.push('/contacts/'+contact.id)">
                    <img src="@/assets/img/edit.svg" alt="editar">
                    Editar
                </a>
                <a class="txt-action" @click="deleteContact(contact.id)">
                    <img src="@/assets/img/trash.svg" alt="excluir">                               
                    Excluir
                </a>  
            </small>
        </a>
    </div>    
</template>
<script>

export default({
    props:{contacts:Object},
    updated() {
        if(this.contacts.length > 0){
            console.log(this.contacts)
        }else{
            console.log("sem contatos para mostrar")
        }
    },
})
</script>
