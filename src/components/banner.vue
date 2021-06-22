<template>
  <section class="content-center relative parallaxContainer">
    <h2 class="text-white text-6xl font-sans">{{ title }}</h2>
    <div class="parallax" :style="{'background-image':'url('+ image + ')'}"></div>
  </section>
</template>

<script>
export default {
    props: {
    title: {
      type: String,
      default: "Banner Text",
    },
    image: { 
        type: String,
        default: "https://images.creativemarket.com/0.1.0/ps/4785364/910/415/m2/fpnw/wm1/a9fp4gsectj3ohl3flvwiymhrghjf6s8g0niytzp4zs1sqpmsxznnw5dpe0pvwcw-.jpg?1532057114&s=8fec2fa5b13f238c5a952de266060145" 
    },
  },
    
}
</script>



<style>
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');

.parallax {
  position: absolute;
  z-index: 10;
  height: 500px;
  width: 100%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;
  filter: blur(1px);
}
.parallax h2{
  z-index: 20;
}
.parallaxContainer{
  position: relative;
  height: 500px;
}
.parallaxContainer h2{
  z-index: 20;
  align-self: center;
  font-family: 'Indie Flower', cursive;
  margin-left: 100px;
}
</style>