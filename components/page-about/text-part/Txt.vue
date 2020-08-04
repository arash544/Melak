<template>
  <div class="wrappers">
    <Textframe
      txt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ex beatae esse, dolore vel inventore, maxime deleniti qui nisi, neque quo praesentium. Nisi odio sit quasi dolorum enim minima dolor, dolores adipisci explicabo nobis asperiores officia, minus omnis laboriosam, delectus iste exercitationem facere tempore molestiae in deleniti ullam quidem fuga? Temporibus nesciunt, odio perspiciatis doloribus nihil voluptas, reprehenderit nam neque soluta culpa nemo esse perferendis harum? Adipisci officia voluptas unde, earum optio at nobis est quae, voluptatem sapiente eos! Dolorum sit nobis culpa mollitia odit eos harum, deleniti dignissimos, saepe accusamus facilis! Ea corrupti quo officiis facere, natus quidem voluptatibus."
    />
  </div>
</template>

<script>
import Textframe from "./Textframe";
export default {
  name: "Txt",
  components: {
    Textframe,
  },
};
</script>

<style lang="scss" scoped>
.wrappers {
  // margin-top: -200px;
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

</style>