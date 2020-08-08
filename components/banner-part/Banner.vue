<template>
  <div class="wrapper">
    <Imagebanner :img="source" />
    <Cardcontent :txt="title" :name="name" :date="date" />
  </div>
</template>

<script>
import Imagebanner from "./Imagebanner";
import Cardcontent from "./Cardcontent";
export default {
  name: "Banner",
  props: ["source", "title", "name", "date"],
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
