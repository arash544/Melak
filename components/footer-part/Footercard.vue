<template>
  <div class="card-footer">
    <div class="title">
      <nuxt-link to="/">{{title}}</nuxt-link>
    </div>
    <nuxt-link class="list" to="/">{{link1}}</nuxt-link>
    <nuxt-link class="list" to="/">{{link2}}</nuxt-link>
    <nuxt-link class="list" to="/">{{link3}}</nuxt-link>
    <nuxt-link class="list" to="/">{{link4}}</nuxt-link>
    <nuxt-link class="list" to="/">{{link5}}</nuxt-link>
    <nuxt-link class="list" to="/">{{link6}}</nuxt-link>
  </div>
</template>

<script>
export default {
  name: "Footercard",
  props: ["title", "link1", "link2", "link3", "link4", "link5", "link6"],
};
</script>

<style lang="scss" scoped>
.card-footer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 15vw;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  background-color: transparent;
  border: 0;
  @media only screen and (max-width: 768px) {
    margin-top: 30px;
  }
  .list {
    display: block;
    padding: 0;
    font-weight: 400;
    margin-bottom: 4px;
    padding-bottom: 4px;
    -webkit-transition: color 0.26s ease-in-out;
    -o-transition: color 0.26s ease-in-out;
    transition: color 0.26s ease-in-out;
    text-decoration: none;
  }
  a {
    &:hover {
      color: var(--color-brand);
    }
  }

  a {
    color: var(--color-text);
  }
  @media only screen and (max-width: 768px) {
    width: 90%;
  }
}
.title {
  margin-bottom: 16px;
  a {
    font-size: 12px;
    line-height: 16px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
}

</style>