<template>
  <div class="wrapper">
    <Details 
      showimg="true"
      showicons="true"
      :img="articles[0]._embedded.author[0].avatar_urls['96']"
      :name="articles[0]._embedded.author[0].name"
      :txt="articles[0]._embedded.author[0].description"
      location="CAIRO"
      post="6 POSTS"
      :articles="articles"
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