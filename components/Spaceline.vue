<template>
  <div class="wrapper">
    <hr :style="linesize" />
  </div>
</template>

<script>
export default {
  name: "Spaceline",
  props: {
    width: {
      type: String,
    },
  },
  computed: {
    linesize() {
      return {
        width: `${this.width}%`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: -10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
}
hr {
  width: 60.5%;
  border: 1/2px solid;
  border-color: var(--color-text);
  @media only screen and (max-width: 1650px) {
    width: 63%;
  }
  @media only screen and (max-width: 1450px) {
    width: 68%;
  }
  @media only screen and (max-width: 1000px) {
    width: 90%;
  }
}
</style>