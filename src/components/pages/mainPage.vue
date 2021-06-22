<template>
    <Banner class="hidden lg:flex lg:inline" :title="'Its a Great day for Coffee'"></Banner>
    <div class="mx-5 mt-10">
    <Header class="mt-10"></Header>
    <p class=" mb-6 text-left font-semibold text-gray-500">Previous Brews</p>
    <div class="sm:flex sm:flex-wrap sm:justify-between">
      <base-card class="mainCard" :brewId="brew.id" v-for="brew in brews" :data="brew" :key="brew.id"></base-card>
    </div>
    </div>
    <Nav :isOnMainPage="true"></Nav>
</template>
<script>
import baseCard from '../base-card.vue';
import Header from '../header.vue';
import Nav from '../nav.vue';
import Banner from '../banner.vue';
export default {
  components: { baseCard, Header, Nav, Banner},
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

  @media only screen and (min-width: 640px){
    .mainCard{
      width: 45%;
    }
}
@media only screen and (min-width: 1024px){
    .mainCard{
      width: 30%;
    }
}
</style>