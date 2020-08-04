<template>
  <li>
    <nuxt-link to="/">{{item.link}}</nuxt-link>
  </li>
</template>

<script>
export default {
  name: "Navbaritem",
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
// *{
//   border: 1px solid blue;
// }

a {
  margin-left: 30px;
  color: var(--color-text);
  font-size: 20px;
  font-weight: 700;
  &:hover {
    text-decoration: none;
    border-bottom: 2px solid var(--color-brand);
  }
    @media only screen and (max-width: 1000px) {
    margin-left: 0px;
  }
  @media only screen and (max-width: 768px) {
    margin: 4px;
    font-weight: 400;
  }
}
</style>