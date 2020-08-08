<template>
  <section class="main-wrapper">
    <!-- <Details name="Olivia Thomas" txt="I love creating clean and minimal websites." /> -->
  </section>
</template>

<script>
import Details from "@/components/authors/main-part/Details";
export default {
  components: {
    Details,
  }, 

    asyncData(context) {
   return fetch(`http://localhost:8888/portfolio/wp-json/wp/v2/posts?author=${context.route.params.id}&_embed`)
      .then(res=>res.json())
      .then(rs=>{
        console.log(rs);
        return{
          articles:rs
        }
         
      })
      
  },
};
</script>

<style lang="scss" scoped>
.main-wrapper {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
</style>