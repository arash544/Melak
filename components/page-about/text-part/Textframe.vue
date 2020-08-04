<template>
  <div class="wrappers">
    <div class="main">
      <p>{{txt}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Textframe",
  props: ["txt"],
};
</script>

<style lang="scss" scoped>

.wrappers {
  margin-top: 120px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
p {
  color: var(--color-text);
  font-size: 22px;
  font-family: "Crimson Text", Georgia, serif;
  line-height: 33px;
  min-width: 100%;
}
.main {
  width: 40%;
  @media only screen and (max-width: 1650px) {
    width: 43%;
  }
  @media only screen and (max-width: 1000px) {
    width: 90%;
    margin-top: 0px;
    margin-bottom: 0px;
  }
}

</style>