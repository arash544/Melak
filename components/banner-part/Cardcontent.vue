<template>

  <div class="wrap" >
    <h2 class="title">
      <a href="/" v-html="txt"></a>
    </h2>
    <div class="body">
      <h5>
        <a href="/">{{name}}</a>
      </h5>
      <h5 class="date">{{date}}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cardcontent",
  props: ["txt", "name", "date"],
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 17%;
  position: absolute;
  right: 21%;
  top: 40%;
  background: var(--bg-card);
  word-break: break-word;
  -webkit-box-shadow: 8px 8px 0 var(--bg-gray);
  box-shadow: 8px 8px 0 var(--bg-gray);
  padding: 25px 30px;
  @media only screen and (max-width: 1000px) {
    width:90%;
    right: 5%;
    top: 100%;
  }
  &:hover {
    .title {
      a {
        color: var(--color-brand);
      }
    }
  }
}
.title {
  width: 100%;
  font-size: 22px;
  line-height: 32px;
  font-weight: 700;
  a {
    color: var(--color-text);
    text-decoration: none;
    background-color: transparent;
  }
}
.body {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: flex-start;
  -ms-flex-align: flex-start;
  align-items: flex-start;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  @media only screen and (max-width: 1000px) {
    width: 100%;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }
  a {
    color: var(--color-text);
    text-decoration: none;
    background-color: transparent;
  }
  h5 {
    font-size: 14px;
    font-weight: 300;
  }
}
.date{
    @media only screen and (max-width: 768px) {
    margin-left: 10px;
  }
}
</style>