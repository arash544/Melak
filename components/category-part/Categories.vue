<template>
  <div class="main">
    <div class="wrapper">
      <Work title="WORK" img="angle-right.svg" />
      <Lifestyle title="LIFESTYLE" img="angle-right.svg" />
    </div>
  </div>
</template>

<script>
import Work from "./Work";
import Lifestyle from "./Lifestyle";
export default {
  name: "Categories",
  components: {
    Work,
    Lifestyle,
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
.wrapper {
  width: 60.5%;
  height: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  @media only screen and (min-width: 1650px) {
    width: 63%;
  }
  @media only screen and (max-width: 1650px) {
    width: 65%;
  }
  @media only screen and (max-width: 1370px) {
    width: 69%;
  }
  @media only screen and (max-width: 1000px) {
    width: 90%;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  @media only screen and (max-width: 768px) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
}

</style>