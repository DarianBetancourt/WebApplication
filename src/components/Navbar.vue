<template>
    <nav class="navbar navbar-expand-lg shadow-sm py-0">
        <div class="container-fluid">
            <a  v-if="false" class="navbar-brand" :href="brand.href">
            <!-- if need insert brand remove v-if -->
                <img src="" alt="brand">
                {{brand.name}}
            </a>
            <a href="#" class="navbar-brand ms-5" @click="back()"> 
                <img class="my-4" src="@/assets/img/arrow-left.svg" alt="voltar">
                <span class="ms-3">Voltar</span> 
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul v-if="links.length > 0" class="navbar-nav">
                    <li v-for="(link,index) in links" :key="index" class="nav-item">
                        <a class="nav-link active" aria-current="page" :href="link.href"> 
                            {{link.name}}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        data() {
            return {
                /* define brand or name application here */
                brand: {
                    name: 'AppName',
                    href: '#',
                },
                links: [ /* define links for navbar */
                    /* Example */
                    /*{
                        name: 'Home',
                        href: '#'
                    },
                    {
                        name: 'Outro',
                        href: '#'
                    }*/
                ]
            }
        },
        methods: {
            ...mapActions(['logout']),
            back(){
                this.$router.back()
                if(this.$route.name == 'Contacts'){
                    this.logout()
                }
            }
        },
    }
</script>

<style scoped>
    a > img {
        width: 40px;
    }
</style>