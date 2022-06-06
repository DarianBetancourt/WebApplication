<template>
    <!-- header -->
    <header class="header">
        <Navbar/>
    </header>
    <!-- end header -->
    <div class="container-fluid pt-4">
        <router-view></router-view>
    </div>
</template>

<script>
// @ is an alias to /src
import ListContacts from '@/components/ListContacts'
import Navbar from '../components/Navbar.vue'

export default {
  name: 'Contacts',
  components: {
    Navbar,
    ListContacts
  }
}
</script>
<style scoped>
    .container-fluid{
        background-color: #F7F8FC;
        height: 100%;
    }
</style>