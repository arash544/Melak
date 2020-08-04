<template>
  <div class="wrapper">
    <Imagebanner
      img="https://images.unsplash.com/photo-1520588831435-1529e6d7cf5e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ&s=4c62e904a1ace4cc3fc4f26a02e14527"
    />
    <Cardcontent txt="Contact" />
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