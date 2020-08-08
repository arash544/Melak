<template>
  <div class="wrapper">
      <Imgframe img1="http://melaka.aspirethemes.com/content/images/2018/12/hutomo-abrianto-576207-unsplash.jpg" img2="http://melaka.aspirethemes.com/content/images/2018/12/paul-hanaoka-369639-unsplash.jpg"/>
  </div>
</template>

<script>
import Imgframe from './Imgframe'
export default {
name:"Photo",
components:{
    Imgframe
},
}
</script>

<style lang="scss" scoped>
.wrapper{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    
}

</style>