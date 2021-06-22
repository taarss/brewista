<template>
    <div class="mx-5">
    <router-link v-if="!isLoggedIn" to="/auth" class="flex">
      <svg xmlns="http://www.w3.org/2000/svg" class="loginIcon h-8 w-" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    </router-link>
    <Header class="mt-10"></Header>
    <p class=" mb-6 text-left font-semibold text-gray-500">Previous Brews</p>
    <base-card :brewId="brew.id" v-for="brew in brews" :data="brew" :key="brew.id"></base-card>
    </div>
    <Nav :isOnMainPage="true"></Nav>
</template>
<script>
import baseCard from '../base-card.vue';
import Header from '../header.vue';
import Nav from '../nav.vue';
export default {
  components: { baseCard, Header, Nav },
  data(){
    return{
        brews: null
    };
  },
  computed: {
    isLoggedIn(){
      return this.$store.getters.userIsAuthenticated
    }
  },
  created(){
      fetch('https://vue-http-demo-f20d8-default-rtdb.europe-west1.firebasedatabase.app/brews.json').then(function(response) {
        if(response.ok){
          return response.json();
        }
        
      }).then((data) => {
        console.log(data);
        this.brews = data;
      });
  },
    
}
</script>
<style scoped>
  .loginIcon{

  }
</style>