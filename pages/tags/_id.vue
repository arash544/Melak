<template>
  <section class="main-wrapper">
    <Spaceline/>
    <div class="page-wrap">
      
      <h2>#{{ articles[0]._embedded["wp:term"][1][0]["name"] }}</h2>
      <div class="card-wrapper">
        <Card
          v-for="article in articles"
          :key="article.id"
          :id="article.id"
          :img="
            article._embedded['wp:featuredmedia'][0]['media_details']['sizes'][
              'full'
            ]['source_url']
          "
          :title="article.title.rendered"
          :name="article._embedded.author[0].name"
          :date="article.date"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Details from "@/components/authors/main-part/Details";
import Spaceline from '@/components/Spaceline'
export default {
  components: {
    Details,
    Spaceline
  },

  asyncData(context) {
    return fetch(
      `https://panel.arashazimdoust.com/wp-json/wp/v2/posts?tags=${context.route.params.id}&_embed`
    )
      .then((res) => res.json())
      .then((rs) => {
        return {
          articles: rs,
        };
      });
  },
};
</script>

<style lang="scss" scoped>
.main-wrapper {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.page-wrap {
  width: 70%;
  margin-top:100px;
  h2{
    text-align: center;
    margin-bottom:20px;
  }
}
.card-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
}
</style>
