<template>
  <section class="main-wrapper">
    <Spaceline />
    <Banner />
    <Maincard />
    
    <Categories />
    <Lines title="TAGS" img="angle-right.svg" />
    <Tag />
    <Lines title="AUTHORS" img="angle-right.svg" />
    <Authore />
  </section>
</template>

<script>
import Spaceline from "@/components/Spaceline";
import Banner from "@/components/banner-part/Banner";
import Maincard from "@/components/card-part/Maincard";
import Categories from "@/components/category-part/Categories";
import Tag from "@/components/tags-part/Tag";
import Authore from "@/components/author-part/Authore";
import Lines from "@/components/Lines";
export default {
  components: {
    Spaceline,
    Banner,
    Maincard,
    Categories,
    Tag,
    Lines,
    Authore,
  },
};
</script>

<style lang="scss" scoped>
.main-wrapper {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
</style>