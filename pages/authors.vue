<template>
  <section class="main-wrapper">
      <Spaceline/>
    <Author />
    <Maincard/>
  </section>
</template>

<script>
import Author from "@/components/authors/main-part/Author";
import Spaceline from "@/components/Spaceline";
import Maincard from '@/components/card-part/Maincard'
export default {
  components: {
    Author,
    Spaceline,
    Maincard
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