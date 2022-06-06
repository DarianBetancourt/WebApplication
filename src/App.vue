<template>
  <router-view/>
</template>
<script>
  import { mapActions } from 'vuex'
  export default {
    methods: {
      ...mapActions(['readToken'])
    },
    created(){
      /* set token in local storage */
      this.readToken()
    }
  }
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Poppins:ital,wght@0,100;0,500;1,200;1,300&display=swap");
#app {
  height: 100vh;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #495057;
}
a{
    text-decoration: none;
    cursor: pointer;
    color: #495057 !important;
  }
</style>
