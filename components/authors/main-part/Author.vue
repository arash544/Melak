<template>
  <div class="wrapper">
    <Details 
      showimg="true"
      showicons="true"
      img="http://melaka.aspirethemes.com/content/images/size/w1500/2019/09/brooke-cagle-EnE-o3P-WOY-unsplash.jpg"
      name="Olivia Thomas"
      txt="I love creating clean and minimal websites."
      location="CAIRO"
      post="6 POSTS"
    />
  </div>
</template>

<script>
import Details from "./Details";

export default {
  name: "Author",
  props:['articles'],
  components: {
    Details,
    
  }, 
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}
</style>