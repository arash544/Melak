<template>
     <figure class="main">
 <iframe width="700" height="394" :src="url" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <figcaption>{{caption}}</figcaption>
  </figure>
   
</template>

<script>
export default {
name:'Videoframe',
props:['url','caption']
}
</script>

<style lang="scss" scoped>
figcaption {
  margin-top: 15px;
}
.main {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;

  width: 40%;
  @media only screen and (max-width: 1650px) {
    width: 43%;
  }
  @media only screen and (max-width: 1000px) {
    width: 90%;
    margin-top: 0px;
    margin-bottom: 0px;
  }
}
</style>