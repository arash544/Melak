<template>
  <div class="wrap">
    <div class="left-img">
      <img
        :src="img1"
        alt
      />
    </div>
    <div class="right-img">
      <img
        :src="img2"
        alt
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Img",
  props:['img1','img2']
};
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media only screen and (max-width: 768px) {
    width: 90%;
  }
}

img {
  width: 500px;
  height: 700px;
  object-fit: cover;
  margin: 15px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 20vh;
    margin: 0px;
    margin-top: 20px;
  }
}
</style>