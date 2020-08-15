<template>
  <section class="main-wrapper">
    <Spaceline />
    <Banner :title="posttitle" :source="img" />
    <div class="content" v-html="content"></div>
  </section>
</template>

<script>
import Banner from "@/components/banner-part/Banner";
import Spaceline from "@/components/Spaceline";
export default {
  components: {
    Banner,
    Spaceline,
  },
  asyncData(context) {
    return fetch(`https://panel.arashazimdoust.com/wp-json/wp/v2/posts/${context.route.params.id}?_embed`)
      .then((res) => res.json())
      .then((rs) => {
        return {
          posttitle: rs.title.rendered,
          content: rs.content.rendered,
          img:
            rs._embedded["wp:featuredmedia"][0]["media_details"]["sizes"][
              "full"
            ]["source_url"],
        };
      });
  },
};
</script>
<style lang="scss">
.content {
  width: 100%;
  padding: 120px 0px;
  text-align: center;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1000px) {
    padding: 150px 0px;
  }
  @media only screen and (max-width: 400px) {
    padding: 200px 0px;
  }
  p {
    font-size: 1.1em;
    line-height: 1.7;
    width: 55%;
    text-align: left;
    padding: 20px 5px;
    @media only screen and (max-width: 1000px) {
      width: 90%;
    }
  }
  figure,
  video {
    display: block;
    margin: 10px auto;
    width: 100%;
    text-align: center;
    padding-top: 30px;
    figcaption {
      margin-top: 15px;
    }
  }
  .wp-block-image {
    padding-top: 30px;
    width: 100%;
    img {
      @media only screen and (max-width: 1000px) {
        width: 90%;
      }
    }
  }
  .wp-block-embed {
    width: 100%;
    iframe {
      @media only screen and (max-width: 600px) {
        width: 90%;
      }
    }
  }

  .blocks-gallery-grid {
    display: flex;
    padding-left: 0;
    padding-right: 0;
    justify-content: center;
    width: 100%;
    align-items: center;
    margin-top: 10px;
    @media only screen and (max-width: 600px) {
      flex-wrap: wrap;
    }
    img {
      width: 380px;
      height: 580px;
      object-fit: cover;
      @media only screen and (max-width: 1220px) {
        width: 280px;
        height: 480px;
      }
      @media only screen and (max-width: 900px) {
        width: 220px;
        height: 300px;
      }
      @media only screen and (max-width: 720px) {
        width: 170px;
        height: 230px;
      }
      @media only screen and (max-width: 570px) {
        width: 120px;
        height: 200px;
      }
    }
    li {
      margin: 10px;
      list-style-type: none;
    }
  }
}
</style>

<style lang="scss" scoped>
.main-wrapper {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
</style>
