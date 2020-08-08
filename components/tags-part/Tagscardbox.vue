<template>
  <div class="wrap">
    <nuxt-link :to="`/tags/${id}`">
      <img :src="img" alt />
      <h4>{{txt}}</h4>
    </nuxt-link>
     <div class="item-overlay top"></div>
  </div>
</template>

<script>
export default {
  name: "Tagscardbox",
  props: ["img", "txt"],
};
</script>

<style lang="scss" scoped>

.item-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: lightgray;
  overflow: hidden !important;
  text-align: center;
  width: 100%;
  opacity: .4;
}
.wrap {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: space-evenly;
  -ms-flex-pack: space-evenly;
  justify-content: space-evenly;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  margin: 10px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  position: relative;
  h4 {
    position: absolute;
    bottom: 10px;
    font-size: 24px;
    font-weight: 800;
    left: 20%;
  }
  a {
    color: var(--color-text);
    text-decoration: none;
    background-color: transparent;
  }
}
img {
  width: 100%;
  height: 10vw;
  -o-object-fit: cover;
  object-fit: cover;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 40vw;
  }
}

</style>