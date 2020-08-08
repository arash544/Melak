<template>
  <div class="main">
    <div class="wrapper">
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
    <Buttonmore @click="addmore" />
  </div>
</template>

<script>
import Card from "./Card";
import Buttonmore from "@/components/Buttonmore";
export default {
  name: "Maincard",
  data() {
    return {
      articles: [],
    };
  },
  components: {
    Card,
    Buttonmore,
  },
  created() {
    fetch(
      "http://localhost:8888/portfolio/wp-json/wp/v2/posts?per_page=9&categories=9&_embed"
    )
      .then((res) => res.json())
      .then((rs) => {
        this.articles = rs;
      });
  },
  methods: {
    addmore() {
      fetch(
        "http://localhost:8888/portfolio/wp-json/wp/v2/posts?per_page=12&categories=9&_embed"
      )
        .then((res) => res.json())
        .then((rs) => {
          this.articles = rs;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  margin-top: 50px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  height: auto;
  @media only screen and (max-width: 1000px) {
    margin-top: 200px;
  }
}
.wrapper {
  width: 60.5%;
  height: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  @media only screen and (min-width: 1650px) {
    width: 63%;
  }
  @media only screen and (max-width: 1650px) {
    width: 65%;
  }
  @media only screen and (max-width: 1370px) {
    width: 69%;
  }
  @media only screen and (max-width: 1000px) {
    width: 90%;
    margin-top: 0px;
    margin-bottom: 0px;
  }
}
</style>
