<template>
  <figure class="main">
    <img :src="img" alt />
    <figcaption>{{caption}}</figcaption>
  </figure>
</template>

<script>
export default {
  name: "Imageframe",
  props: ["img", "caption"],
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 50vh;
  -o-object-fit: cover;
  object-fit: cover;
}
figcaption {
  margin-top: 15px;
}
.main {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;

  width: 40%;
  @media only screen and (max-width: 1650px) {
    width: 43%;
  }
  @media only screen and (max-width: 1000px) {
    width: 90%;
    margin-top: 0px;
    margin-bottom: 0px;
  }
}

</style>