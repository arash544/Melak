<template>
  <section class="main-wrapper">
     <Spaceline/>
    <Author :articles="articles"/>
  </section>
</template>

<script>
    import Spaceline from "@/components/Spaceline";
import Author from "@/components/authors/main-part/Author";
export default {
  components: {
    Author,
     Spaceline,
  }, 

    asyncData(context) {
   return fetch(`http://localhost:8888/portfolio/wp-json/wp/v2/posts?author=${context.route.params.id}&_embed`)
      .then(res=>res.json())
      .then(rs=>{
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