<template>
  <div class="wrap">
    <div class="title">
      <a href="/">{{ title }}</a>
      <img :src="img" alt />
    </div>
    <Spaceline width="99" />
    <Boxtxt
      v-for="work in works"
      :key="work.id"
      :id="work.id"
      :link="work.title.rendered"
      :date="work.date"
      :img="
        work._embedded['wp:featuredmedia'][0]['media_details']['sizes']['full'][
          'source_url'
        ]
      "
    />
  </div>
</template>

<script>
import Spaceline from "@/components/Spaceline";
import Boxtxt from "./Boxtxt";
export default {
  name: "Work",
  props: ["title", "img"],
  components: {
    Spaceline,
    Boxtxt,
  },
  data() {
    return {
      works: [],
    };
  },
  created() {
    fetch(
      "https://panel.arashazimdoust.com/wp-json/wp/v2/posts?per_page=4&categories=15&_embed"
    )
      .then((res) => res.json())
      .then((rs) => {
        this.works = rs; 
      });
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  height: auto;
  width: 50%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 10px;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  @media only screen and (max-width: 1400px) {
    width: 45%;
  }
  @media only screen and (max-width: 1000px) {
    width: 100%;
    margin: 10px 0 10px 0;
  }
}
.title {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  align-items: center;
  a {
    -webkit-box-pack: baseline;
    -ms-flex-pack: baseline;
    justify-content: baseline;
    -webkit-box-align: baseline;
    -ms-flex-align: baseline;
    align-items: baseline;
    color: var(--color-text);
    text-decoration: none;
    background-color: transparent;
    &:hover {
      color: var(--color-brand);
    }
  }
  img {
    margin-left: 10px;
    width: 12px;
  }
}
.change {
  height: 100%;
}
</style>
