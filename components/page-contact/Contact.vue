<template>
  <div class="wrapper">
    <div class="main">
      <form action>
        <input placeholder="Full Name" type="text" />
        <input placeholder="Email Address" type="text" />
        <textarea placeholder="Your Message"></textarea>
        <button ref="bt" class="btn-contact">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 50px;
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

.main {
  width: 40%;
  @media only screen and (max-width: 1650px) {
    width: 43%;
  }
  @media only screen and (max-width: 1000px) {
    width: 90%;
    margin-top: 0px;
    margin-bottom: 0px;
  }
}
form {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  input,
  textarea {
    width: 100%;
    display: block;
    padding: 16px;
    margin-bottom: 16px;
    border: 1px solid #dfe3e9;
    border-radius: 0;
    outline: 0;
    color: var(--color-text);
    background-color: var(--color-white);
    font-size: 16px;
    line-height: 24px;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    text-rendering: auto;
    color: -internal-light-dark-color(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;

    &:active,
    &:focus {
      border: 1px solid var(--color-brand);
    }
  }
  textarea {
    height: 20vh;
  }
  button {
    color: var(--color-white);
    background-color: var(--color-dark);
    font-size: 12px;

    font-family: Poppins, Helvetica, Arial, sans-serif;
    letter-spacing: 0.5px;
    text-align: center;

    outline: 0;
    border: none;
    cursor: pointer;
    border-radius: 50px;
    -webkit-transition: all 0.26s ease-in-out;
    -o-transition: all 0.26s ease-in-out;
    transition: all 0.26s ease-in-out;
    font-weight: 500;
    padding: 15px 20px;
    width: 15%;
    @media only screen and (max-width: 500px) {
      width: 100%;
    }
    &:hover,
    &:active {
      background-color: var(--color-brand);
    }
  }
}

</style>