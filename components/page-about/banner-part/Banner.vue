<template>
  <div class="wrapper">
    <Imagebanner
      img="http://melaka.aspirethemes.com/content/images/size/w1500/2019/09/brooke-cagle-EnE-o3P-WOY-unsplash.jpg"
    />
    <Cardcontent txt="About" />
  </div>
</template>

<script>
import Imagebanner from "@/components/banner-part/Imagebanner";
import Cardcontent from "@/components/banner-part/Cardcontent";
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