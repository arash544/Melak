<template>
  <div class="main">
    <div class="wrapper">
      <Authorcard
        v-for="author in authors"
        :key="author.id"
        :id="author.id"
        :img="author.avatar_urls['48']"
        :link="author.name"
        :txt="author.description"
      />
    </div>
  </div>
</template>

<script>
import Authorcard from "./Authorcard";
export default {
  name: "Authore",
  components: {
    Authorcard,
  },
  data() {
    return {
      authors: [],
    };
  },
  created() {
    fetch(
      "http://localhost:8888/portfolio/wp-json/wp/v2/users"
    )
      .then((res) => res.json())
      .then((rs) => {
        console.log(rs)
        this.authors = rs;
      });
  },
};
</script>

<style lang="scss" scoped>
.main {
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
}
.wrapper {
  width: 60.5%;
  height: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-pack: center;

  -ms-flex-pack: center;

  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

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
  @media only screen and (max-width: 768px) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
}
</style>
