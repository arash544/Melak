<template>
  <section class="main-wrapper">
  <Spaceline />
  <Banner source="/contact.jpg" title="Contact"/>
  <Textframe txt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, a nisi! Optio iusto quas voluptatibus esse est temporibus assumenda amet doloremque repudiandae vitae officiis deleniti mollitia perspiciatis, blanditiis omnis ipsum."/>
  <Contact/>
  </section>
</template>

<script>
import Spaceline from "@/components/Spaceline";
import Banner from "@/components/banner-part/Banner";
import Contact from "@/components/page-contact/Contact";
import Textframe from "@/components/page-about/text-part/Textframe";
export default {
components: {
    Banner,
    Textframe,
    Contact,
    Spaceline
}
}
</script>

<style lang="scss" scoped>

.main-wrapper {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

</style>