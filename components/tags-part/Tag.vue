<template>
  <div class="main">
    <div class="wrapper">
     <Tagscardbox
        img=""
        txt="Education"
        id="10"
      /> 
       <Tagscardbox
        img=""
        txt="Nature"
        id="11"
      /> 
       <Tagscardbox
        img=""
        txt="Inspiration"
        id="12"
      /> 
       <Tagscardbox
        img=""
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
// data(){
//   return{
//       tags:[]
//     }
//   },
    // created() {
    // fetch('http://localhost:8888/portfolio/wp-json/wp/v2/tags')
    //   .then(res=>res.json())
    //   .then(rs=>{
    //     console.log(rs)
    //      this.tags=rs
    //     //  console.log(rs)
    //   })
      
  // },
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