<template>
    <div class="box">
      <div class="img">
        <img :src="img" alt />
      </div>
      <div class="txt">
        <nuxt-link :to="`/authors/${id}`">{{ link }}</nuxt-link>
        <h5 v-html="txt">{{ txt }}</h5>
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

.box {
  border: 1px solid var(--color-border);
  margin-left: 5px;
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
  width: 25%;
  @media only screen and (max-width: 1300px) {
    width: 100%;
    margin-top: 10px;
  }
}
.txt {
  padding-top: 20px;
  padding-left: 30px;
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
  padding-left: 10px;
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
      padding: 5px 5px 5px 5px;
    }
  }
}
</style>
