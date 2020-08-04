<template>
  <div class="main">
    <div class="title">
      <a href="/">{{title}}</a>
      <img class="img" :src="img" alt />
    </div>
    <div class="wrappers">
      <Spaceline width="100" />
    </div>
  </div>
</template>

<script>
import Spaceline from "./Spaceline";
export default {
  name: "Lines",
  props: ["title", "img"],
  components: {
    Spaceline,
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
}
.wrappers {
  width: 65%;
  height: auto;
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
  @media only screen and (max-width: 1000px) {
    width: 90%;
  }
}

.title {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 65%;
  align-items: center;
  @media only screen and (max-width: 1000px) {
    width: 90%;
  }
  @media only screen and (max-width: 768px) {
    width: 90%;
  }
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