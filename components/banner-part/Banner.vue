<template>
  <div class="wrapper">
    <Imagebanner
      img="http://melaka.aspirethemes.com/content/images/size/w1500/2019/09/room-7TOLFyu1Dp4-unsplash.jpg"
    />
    <Cardcontent txt="Organizing Your Content with Ghost" name="OLIVIA THOMAS" date="29.NOV.2018" />
  </div>
</template>

<script>
import Imagebanner from "./Imagebanner";
import Cardcontent from "./Cardcontent";
export default {
  name: "Banner",
  components: {
    Imagebanner,
    Cardcontent,
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 20px;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
}
</style>