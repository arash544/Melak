<template>
  <nav>
    <button @click="showMenu" class="menu-icon" ref="btn">
      <svg
        height="25"
        width="25"
        data-v-d9c07b90
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 18"
        class="icon-burger-nav"
      >
        <g
          data-v-d9c07b90
          fill="none"
          fill-rule="evenodd"
          stroke="#353745"
          stroke-linecap="square"
          stroke-width="1.5"
          transform="translate(0)"
        >
          <path data-v-d9c07b90 d="M0 1L18 1M0 9L13 9M0 17L22 17" />
        </g>
      </svg>
    </button>
    <ul class="logo">
      <a href="/">
        <h2 ref="logo">Melaka</h2>
      </a>
    </ul>
    <ul class="list" ref="menu">
      <li>
        <a href="/" class="logo-collapse">
          <h2>Melaka</h2>
        </a>
      </li>

      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">About</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/contact">Contact</nuxt-link>
      </li>
      <li>
        <button @click="darkmode" class="mode"></button>
      </li>
      <li>
        <a class="list-link" href="/">
          <img src="search.svg" alt />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import Navbaritem from "./Navbaritem";
export default {
  name: "Navbar",
  components: {
    Navbaritem,
  },

  data() {
    return {
      theme: "light",
    };
  },
  mounted() {
    if (JSON.parse(localStorage.getItem("theme")===null)){
       localStorage.setItem("theme", JSON.stringify({ theme: "light" }));
    }
    let th = JSON.parse(localStorage.getItem("theme"));
    this.theme = th.theme;

    if (this.theme == "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  },
  methods: {
    showMenu() {
      this.$refs["menu"].classList.toggle("menu-block");
      this.$refs["btn"].classList.toggle("push-btn");
      this.$refs["logo"].classList.toggle("hidden");
      this.$emit("menuOpen");
    },
    darkmode() {
      if (this.theme == "light") {
        this.theme = "dark";
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", JSON.stringify({ theme: "dark" }));
      } else {
        this.theme = "light";
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", JSON.stringify({ theme: "light" }));
      }

      //document.body.classList.toggle("normal-mode");
      // console.log('th')
    },
  },
};
</script>

<style lang="scss">
body {

  &.dark-mode {
      .wrap{
    .content{
          h4,p{
      color: var(--color-white);
    }
    }
.icons{
  a,svg{
    color: var(--color-white);
    fill: var(--color-white);
  }
}
  }
    color: var(--color-white);
    background-color: var(--color-border-dark);
    a,
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    label {
      color: #fff;
    }
    .wrap {
      background-color: var(--color-border-dark);
      .title {
        a {
          color: var(--color-white);
        }

        img {
          filter: invert(1);
        }
      }
      .body {
        h5,
        a {
          color: var(--color-white);
        }
      }
    }
    .cards-footer {
      a {
        color: var(--color-white);
      }
    }
    .main {
      .title {
        a {
          color: var(--color-white);
        }
        img {
          filter: invert(1);
        }
      }
    }
    .wrap {
      a {
        h4 {
          color: var(--color-border-dark);
        }
      }
    }
    .footer {
      background-color: var(--color-border-dark);
      border-top: 1px solid var(--color-white);
    }
    .card-footer {
      .title {
        a {
          color: var(--color-white);
        }
      }
      .list {
        color: var(--color-white);
      }
    }
    .menu-icon {
      svg {
        filter: invert(1);
      }
    }

    .list {
      background-color: var(--color-border-dark);
      color: var(--color-white);
    }
    .list-link {
      img {
        filter: invert(1);
      }
    }
    .mode {
      filter: invert(1);
    }
    .card-body {
      a {
        color: #fff;
      }
    }
    .txt {
      a {
        color: #fff;
      }
      h5 {
        color: #f5f5f5;
      }
    }
    hr {
      border-color: #f5f5f5;
    }
  }

  // img{
  // filter:blur(10px);
  // filter:grayscale(50%);
  // filter:sepia(1);
  // &:hover{
  //   filter: unset;
  // }
  // }

  //   &.dark-mode{
  //   background-color:var(--color-text);
  //   color: var(--color-white);

  // }
}
</style>

<style lang="scss" scoped>
.icon-burger-nav {
  margin-left: 0px;
}
.logo-collapse {
  display: none;
  @media only screen and (max-width: 1000px) {
    display: block;
  }
}
.menu-icon {
  background-color: transparent;
  border-radius: 10px;
  font-size: 14px;
  outline: none;
  border: none;
  margin-top: -10px;
  cursor: pointer;
  display: none;
  outline: none;
  @media only screen and (max-width: 1000px) {
    display: block;
    z-index: 2001;
    position: relative;
    outline: none;
    order: 1;
    width: 30%;
    display: flex;
    justify-content: flex-end;
    right: 1px;
    transition: all 2s ease-in-out;
    &.push-btn {
      right: 80%;
    }
    &:active,
    &:hover,
    &:focus {
      outline: none;
    }
  }
}
a,
img,
button {
  &:hover {
    color: var(--color-brand);
  }
}

nav {
  width: 100%;
  right: 0;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
}
.logo {
  width: 40%;
  justify-content: center;
  align-items: center;
  display: flex;
  padding-left: 0;
  h2 {
    visibility: visible;
    opacity: 1;
    transition: all 3.5s ease;
    &.hidden {
      visibility: hidden;
      opacity: 0;
    }
  }

  @media only screen and (max-width: 1000px) {
    justify-content: flex-start;
    width: 60%;
  }
}
.list {
  width: 55%;
  justify-content: center;
  align-items: center;
  display: flex;
  @media only screen and (max-width: 1650px) {
    padding-right: 100px;
  }

  @media only screen and (max-width: 1000px) {
    z-index: 2000;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: baseline;
    top: 0px;
    bottom: 0;
    right: -100%;
    width: 80%;
    height: 100vh;
    line-height: 2.4;
    padding: 20px;
    transition: all 2s ease-in-out;
    background-color: var(--color-white);
    cursor: pointer;

    &.menu-block {
      right: 0;
    }
  }
}
li {
  list-style-type: none;
}
a {
  color: var(--color-text);
  text-decoration: none;
}
h2 {
  font-size: 38px;
  font-weight: 700;
}
.list-link {
  margin-left: 25px;
  font-weight: 500;
  @media only screen and (max-width: 1000px) {
    margin-left: 0px;
  }
}
.mode {
  border: 0;
  outline: none;
  width: 20px;
  height: 20px;
  background-color: transparent;
  background-image: var(--color-mode-icon);
  border: 0;
  &:hover {
    border: 0;
  }
}
img {
  width: 20px;
}
button {
  margin-left: 25px;
  @media only screen and (max-width: 1000px) {
    margin-left: 0px;
  }
}
a {
  margin-left: 25px;
  color: var(--color-text);
  font-size: 20px;
  font-weight: 700;
  &:hover {
    text-decoration: none;
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




