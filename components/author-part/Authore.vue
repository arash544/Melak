<template>
  <div class="main">
    <div class="wrapper">
      <Authorcard
        v-for="author in authors"
        :key="author.id"
        :id="author.id"
        :img="author.simple_local_avatar.full"
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
        this.authors = rs;
      });
  },
};
</script>

<style lang="scss" scoped>
.main {
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
}
.wrapper {
  width:65.50%;
  display: flex;
  justify-content: center;
  align-items: stretch;
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
