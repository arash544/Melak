<template>
  <div class="main">
    <div class="wrapper">
     <Tagscardbox
        img="/education.jpeg"
        txt="Education"
        id="10"
      /> 
       <Tagscardbox
        img="/lifestyle.jpeg"
        txt="Lifestyle"
        id="11"
      /> 
       <Tagscardbox
        img="/work.jpeg"
        txt="Work"
        id="12"
      /> 
       <Tagscardbox
        img="/travel.jpeg"
        txt="Travel"
        id="13"
      /> 
    </div>
  </div>
</template>

<script>
import Tagscardbox from "./Tagscardbox";

export default {
  name: "Tag",
  components: {
    Tagscardbox,
  },
};
</script>

<style lang="scss" scoped>
.main {
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