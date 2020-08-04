<template>
  <!-- <div class="wrap" v-if="show"> -->
  <div class="wrap" >
    <div class="image-parent" >
      <!-- <img  v-lazy="img" :src="img" /> -->
      <img :src="img" />
    </div>
    <div class="card-body">
      <h2>
        <nuxt-link :to="`/cards/${id}`" v-html="title"></nuxt-link>
      </h2>
    </div>
    <div class="cards-footer">
      <a href="/">{{name}}</a>
      <h5>{{getDate}}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["id","img", "title", "name", "date"],
  computed: {
    getDate(){
      return new Date(this.date).toLocaleDateString('en-US')
    }
  },
  // data() {
  //   return {
  //     show:false
  //   }
  // },
  // created() {
  //   setTimeout(()=>{
  //   this.show=true;
  //  },3000)
  // },

  
  // computed: {
    // img() {
    //   return 'http://melaka.aspirethemes.com/content/images/size/w1500/2019/09/woodwatch--Hr_uHRfImo-unsplash-1.jpg'
    // },
    // img() {
    //   return 'search.svg'
    // },
  // }
};
</script>

<style lang="scss" scoped>
.wrap {
  -webkit-box-shadow: 8px 8px 0 var(--bg-gray);
  box-shadow: 8px 8px 0 var(--bg-gray);
  height: auto;
  width: 31%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 10px;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  @media only screen and (max-width: 1400px) {
    width: 45%;
  }
  @media only screen and (max-width: 1000px) {
    width: 100%;
    margin: 10px 0 10px 0;
  }
}
.image-parent {
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
  img {
    -o-object-fit: cover;
    object-fit: cover;
    width: 100vw;
    height: 22vw;
    overflow: hidden;
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
    @media only screen and (max-width: 1000px) {
      height: 55vw;
    }
    &:hover {
      -webkit-transform: scale(1.01);
      -ms-transform: scale(1.01);
      transform: scale(1.01);
    }
  }
}
.card-body {
  margin-top: 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0;
  a {
    color: var(--color-text);
    text-decoration: none;
    background-color: transparent;
  }
  h2 {
    width: 70%;
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;

    @media only screen and (max-width: 1400px) {
      width: 100%;
      padding-left: 10px;
    }
    @media only screen and (max-width: 1000px) {
      width: 100%;
    }
  }
  &:hover {
    h2 {
      a {
        color: var(--color-brand);
      }
    }
  }
}
.cards-footer {
  margin-bottom: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: baseline;
  -ms-flex-pack: baseline;
  justify-content: baseline;
  width: 70%;
  padding: 0;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  @media only screen and (max-width: 1400px) {
    width: 100%;
  }
  @media only screen and (max-width: 1000px) {
    width: 100%;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
  }
  a {
    color: var(--color-text);
    text-decoration: none;
    font-size: 14px;
    @media only screen and (max-width: 1400px) {
      padding-left: 10px;
    }
  }
  h5 {
    font-size: 14px;
    font-weight: 300;
    margin-left: 10px;
    padding-top: 1.6px;
    align-items: center;
    display: flex;
    justify-content:center
  }
}

</style>