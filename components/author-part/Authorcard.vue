<template>
  <div class="wrap">
    <div class="box">
      <div class="img">
        <img :src="img" alt />
      </div>
      <div class="txt">
        <nuxt-link :to="`/authors/${id}`">{{ link }}</nuxt-link>
        <h5 v-html="txt">{{ txt }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Authorcard",
  props: ["link", "txt", "img","id"],
};
</script>

<style lang="scss" scoped>
.wrap {
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
  margin-left: 10px;
  @media only screen and (max-width: 768px) {
    margin-top: 30px;
    margin-bottom: 0px;
    margin-left: 0px;
  }
}
.box {
  border: 1px solid var(--color-border);
  padding: 10px;
  width: 90%;
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
  @media only screen and (max-width: 1300px) {
    width: 100%;
  }
}
.txt {
  padding-top: 20px;
  padding-left: 10px;
  width: 70%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: flex-start;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    padding-left: 10px;
    width: 60%;
  }
  a {
    color: var(--color-text);
    text-decoration: none;
    background-color: transparent;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
  }
  &:hover {
    a {
      color: var(--color-brand);
    }
  }

  h5 {
    color: var(--color-gray);
    font-size: 12px;
    line-height: 16px;
  }
}
.img {
  width: 30%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  @media only screen and (max-width: 768px) {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 40%;
  }
  img {
    border-radius: 50%;
    width: 64px;
    height: 64px;
    min-width: 64px;
    -o-object-fit: cover;
    object-fit: cover;
    @media only screen and (max-width: 768px) {
      width: 100px;
      height: 100px;
    }
  }
}
</style>
