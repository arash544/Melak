<template>
  <div class="footer">
    <Footercard :tags="tags"
    />
    <Footercard :navs="navs"
    />
    <div class="wrap">
      <Footercard title="TAGES" />
      <input type="text" placeholder="Enter your email" />
      <button>Subscribe</button>
    </div>
  </div>
</template>

<script>
import Footercard from "./Footercard";
export default {
  name: "Footer",
  components: {
    Footercard,
  },
  data() {
    return{
      tags:[],
      navs:[{name:'Home',link:'/'},{name:'About',link:'/about'},{name:'Contact',link:'/contact'}]
    }
  },
  created() {
    fetch(`https://panel.arashazimdoust.com/wp-json/wp/v2/tags`)
    .then(res=>res.json())
    .then(rs=>this.tags=rs)
  }
};
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 100px;
  background-color: var(--bg-gray);
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: space-evenly;
  -ms-flex-pack: space-evenly;
  justify-content: space-evenly;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 450px;
  @media only screen and (max-width: 768px) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    height: auto;
    padding: 10px 0 10px 0;
  }
}
.wrap {
  @media only screen and (max-width: 768px) {
    width: 90%;
  }
}
input {
  padding: 11px 52px;
  background-color: var(--bg-color);
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  border: 0;
  padding-left: 10px;
  color: var(--color-gray);
  @media only screen and (max-width: 400px) {
    width: 100%;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
  }
}
button {
  padding: 16px 32px;
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
  margin-left: -40px;
  border-radius: 50px;
  -webkit-transition: all 0.26s ease-in-out;
  -o-transition: all 0.26s ease-in-out;
  transition: all 0.26s ease-in-out;
  &:hover {
    background-color: var(--color-brand);
  }
  @media only screen and (max-width: 400px) {
    width: 100%;
    margin-left: 0px;
    margin-top: 10px;
  }
}

</style>