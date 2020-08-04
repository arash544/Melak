<template>
  <div class="main">
    <div class="wrapper">
      <a href="/">
        <button @click.prevent="$emit('click')">More Posts</button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Buttonmore",
};
</script>

<style lang="scss" scoped>
.main {
  margin-top: 20px;
  width: 100%;
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
}
.wrapper {
  padding: 30px 0 30px 0;
  width: 61%;
  background-color: var(--bg-gray);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  @media only screen and (max-width: 1650px) {
    width: 63.5%;
  }
  @media only screen and (max-width: 1000px) {
    width: 90%;
  }
  button {
    display: inline-block;
    padding: 16px 102px;
    color: var(--color-white);
    background-color: var(--color-dark);
    font-size: 12px;
    line-height: 16px;
    font-weight: 600;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    letter-spacing: 0.5px;
    text-align: center;
    text-transform: initial;
    white-space: nowrap;
    outline: 0;
    border: none;
    cursor: pointer;
    border-radius: 50px;
    -webkit-transition: all 0.26s ease-in-out;
    -o-transition: all 0.26s ease-in-out;
    transition: all 0.26s ease-in-out;
    &:hover {
      background-color: var(--color-brand);
    }
  }
}

</style>