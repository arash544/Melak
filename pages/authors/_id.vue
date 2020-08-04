<template>
  <section class="main-wrapper">
    <Author />
  </section>
</template>

<script>
import Author from "@/components/authors/main-part/Author";
export default {
  components: {
    Author,
  },
};
</script>

<style lang="scss" scoped>
.main-wrapper {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
</style>