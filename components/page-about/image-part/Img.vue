<template>
  <div class="wrappers">
    <Imageframe
      caption="About Melaka"
      img="http://melaka.aspirethemes.com/content/images/2019/08/room-ExjFiNHtxKI-unsplash.jpg"
    />
  </div>
</template>

<script>
import Imageframe from "./Imageframe";
export default {
  name: "Img",
  components: {
    Imageframe,
  },
};
</script>

<style lang="scss" scoped>
.wrappers {
  margin-top: 50px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

</style>