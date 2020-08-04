<template>
  <section class="main-wrapper">
    <Spaceline/>
  <Banner />
  <Textframe txt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ex beatae esse, dolore vel inventore, maxime deleniti qui nisi, neque quo praesentium. Nisi odio sit quasi dolorum enim minima dolor, dolores adipisci explicabo nobis asperiores officia, minus omnis laboriosam, delectus iste exercitationem facere tempore molestiae in deleniti ullam quidem fuga? Temporibus nesciunt, odio perspiciatis doloribus nihil voluptas, reprehenderit nam neque soluta culpa nemo esse perferendis harum? Adipisci officia voluptas unde, earum optio at nobis est quae, voluptatem sapiente eos! Dolorum sit nobis culpa mollitia odit eos harum, deleniti dignissimos, saepe accusamus facilis! Ea corrupti quo officiis facere, natus quidem voluptatibus."/>
  <Img/>
  <Textframe txt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, magnam! Assumenda iste repellat dicta perferendis in porro beatae deserunt placeat, doloribus reiciendis fugit nisi provident laudantium magni impedit accusantium obcaecati. Aliquam quos quo magnam distinctio aperiam, commodi recusandae temporibus, aut quibusdam dolorum repudiandae provident eligendi minima dignissimos impedit architecto at?"/>
  </section>
</template>

<script>
import Banner from "@/components/page-about/banner-part/Banner";
import Textframe from "@/components/page-about/text-part/Textframe";
import Img from "@/components/page-about/image-part/Img";
import Spaceline from "@/components/Spaceline";
export default {
components: {
    Banner,
    Img,
    Textframe,
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