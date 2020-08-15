<template>
  <div class="wrapper">
    <div class="box">
      <div class="txt">
        <nuxt-link :to="`/cards/${id}`" v-html="link">{{link}}</nuxt-link>
        <h5>{{getDate}}</h5>
      </div>
      <div class="img">
        <img :src="img" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Boxtxt",
  props: ["link", "date", "img","id"],
    computed: {
    getDate(){
      return new Date(this.date).toLocaleDateString('en-US')
    }
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 10px;
}
.box {
  border: 1px solid var(--color-border);
  padding: 10px;
  width: 95%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  // -ms-flex-wrap: wrap;
  // flex-wrap: wrap;
    @media only screen and (max-width: 768px) {
    width: 95%;
  }
}
.txt {
  width: 70%;
  a {
    color: var(--color-text);
    text-decoration: none;
    background-color: transparent;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
  }
  &:hover {
    a {
      color: var(--color-brand);
    }
  }

  h5 {
    font-size: 14px;
    font-weight: 300;
    margin-top: 10px;
  }
}
.img {
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  width: 30%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  img {
    width: 88px;
    height: 72px;
    -o-object-fit: cover;
    object-fit: cover;
  }
}

</style>