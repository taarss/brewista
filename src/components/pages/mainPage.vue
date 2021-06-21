<template>
    <div class="mx-5">
    <Header></Header>
    <p class=" mb-6 text-left font-semibold text-gray-500">Previous Brews</p>
    <base-card v-for="brew in brews" :data="brew" :key="brew.id"></base-card>
    </div>
    <Nav></Nav>
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