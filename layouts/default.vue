<template>
  <div>
    <Navbar @menuOpen="toggleMenu" />
    <main ref="main">
     <Nuxt /> 
    </main>
    
    <Footer/>
  </div>
</template>
<script>
import Navbar from '@/components/navbar-part/Navbar'
import Footer from '@/components/footer-part/Footer'
export default {
  props:['menuOpen'],
  components:{
    Navbar,
    Footer
  },
  data(){
    return{
      open:false
    }
  },
  methods: {
    toggleMenu(){
      if(!this.open){
         this.open=true
         this.$refs['main'].classList.add('push-main')
      }else{
        this.open = false
         this.$refs['main'].classList.remove('push-main')
      }
       
        
    }
  },
}
</script>

<style>
/* *{
  transition:all 2s ease-in-out;
} */
body{
  width:100%;
  overflow-x:hidden;
}
main{
  min-height: 100vh;
  transition:all 2s ease-in-out;
}
.push-main{
  transform:translate(-80%)
}
:root {
  --color-mode: "light";
  --color-brand: #d3242c;
  --color-white: #ffffff;
  --color-dark: #313638;
  --color-text: #000c2d;
  --color-gray: #585858;
  --color-error: #bf3157;
  --color-success: #097756;
  --color-border: #ececec;
  --color-border-dark: #222222;
  --bg-color: #f5f5f5;
  --bg-gray: #ececec;
  --bg-white: var(--color-white);
  --bg-card: var(--bg-white);
  --bg-code-block: var(--bg-gray);
  --bg-code-inline: var(--bg-gray);
  --color-code-inline: var(--color-text);
  --icon-light: url("data:image/svg+xml;base64,CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMTIwMCAxMjAwIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MDAgNjAwKSBzY2FsZSgwLjY5IDAuNjkpIHJvdGF0ZSgxODApIHRyYW5zbGF0ZSgtNjAwIC02MDApIiBzdHlsZT0iZmlsbDojMUExQTFBIj48c3ZnIGZpbGw9IiMxQTFBMUEiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHZpZXdCb3g9IjAgMCAxMi43IDEyLjciIHZlcnNpb249IjEuMSIgeD0iMHB4IiB5PSIwcHgiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTI4NC4yOTk5OCkiPjxwYXRoIHN0eWxlPSIiIGQ9Im0gNi4xOTI1ODI3LDI4NC44MzEyOCBhIDUuODE0NzM2MSw1LjgxNDczNjEgMCAwIDAgLTUuNjU3Mzc5NjksNS44MjQ3MSA1LjgxNDgyNDUsNS44MTQ4MjQ1IDAgMSAwIDExLjYyOTY0ODk5LDAgNS44MTQ3MzYxLDUuODE0NzM2MSAwIDAgMCAtNS45NzIyNjkzLC01LjgyNDcxIHogbSAwLjE1NzQ2MjcsMC41Mzg3IHYgMTAuNTcyMDEgYSA1LjI4NjIxMyw1LjI4NjIxMyAwIDAgMSAwLC0xMC41NzIwMSB6IiBmaWxsPSIjMUExQTFBIiBzdHJva2U9Im5vbmUiPjwvcGF0aD48L2c+PC9zdmc+PC9nPjwvc3ZnPg==");
  --icon-dark: url("data:image/svg+xml;base64,CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMTIwMCAxMjAwIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MDAgNjAwKSBzY2FsZSgwLjY5IDAuNjkpIHJvdGF0ZSgxODApIHRyYW5zbGF0ZSgtNjAwIC02MDApIiBzdHlsZT0iZmlsbDojRkZGRkZGIj48c3ZnIGZpbGw9IiNGRkZGRkYiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHZpZXdCb3g9IjAgMCAxMi43IDEyLjciIHZlcnNpb249IjEuMSIgeD0iMHB4IiB5PSIwcHgiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTI4NC4yOTk5OCkiPjxwYXRoIHN0eWxlPSIiIGQ9Im0gNi4xOTI1ODI3LDI4NC44MzEyOCBhIDUuODE0NzM2MSw1LjgxNDczNjEgMCAwIDAgLTUuNjU3Mzc5NjksNS44MjQ3MSA1LjgxNDgyNDUsNS44MTQ4MjQ1IDAgMSAwIDExLjYyOTY0ODk5LDAgNS44MTQ3MzYxLDUuODE0NzM2MSAwIDAgMCAtNS45NzIyNjkzLC01LjgyNDcxIHogbSAwLjE1NzQ2MjcsMC41Mzg3IHYgMTAuNTcyMDEgYSA1LjI4NjIxMyw1LjI4NjIxMyAwIDAgMSAwLC0xMC41NzIwMSB6IiBmaWxsPSIjRkZGRkZGIiBzdHJva2U9Im5vbmUiPjwvcGF0aD48L2c+PC9zdmc+PC9nPjwvc3ZnPg==");
  --color-mode-icon: var(--icon-light);
}

/*
@media (prefers-color-scheme: dark) {
  :root {
    --color-mode: "dark";
  }

  :root:not([data-user-color-scheme]) {
    --color-mode: "dark";
    --color-brand: #51bbf6;
    --color-white: #ffffff;
    --color-dark: #010101;
    --color-text: #ffffff;
    --color-gray: #e5eff5;
    --color-error: #ed5f74;
    --color-success: #1ba672;
    --color-border: #383b40;
    --color-border-dark: #383b40;
    --bg-color: #1f2023;
    --bg-gray: #27292d;
    --bg-white: var(--color-white);
    --bg-card: #27292d;
    --bg-code-block: #f6f9fc;
    --bg-code-inline: var(--bg-gray);
    --color-code-inline: var(--color-text);
    --color-mode-icon: var(--icon-dark);
  }
}

[data-user-color-scheme="dark"] {
  --color-mode: "dark";
  --color-brand: #51bbf6;
  --color-white: #ffffff;
  --color-dark: #010101;
  --color-text: #ffffff;
  --color-gray: #e5eff5;
  --color-error: #ed5f74;
  --color-success: #1ba672;
  --color-border: #383b40;
  --color-border-dark: #383b40;
  --bg-color: #1f2023;
  --bg-gray: #27292d;
  --bg-white: var(--color-white);
  --bg-card: #27292d;
  --bg-code-block: #f6f9fc;
  --bg-code-inline: var(--bg-gray);
  --color-code-inline: var(--color-text);
  --color-mode-icon: var(--icon-dark);
}
*/

@font-face {
  font-family: "Crimson Text";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local("Crimson Text Regular"), local("CrimsonText-Regular"),
    url(https://fonts.gstatic.com/s/crimsontext/v9/wlp2gwHKFkZgtmSR3NB0oRJfbwhTIfFd3A.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

@font-face {
  font-family: "Crimson Text";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local("Crimson Text Bold"), local("CrimsonText-Bold"),
    url(https://fonts.gstatic.com/s/crimsontext/v9/wlppgwHKFkZgtmSR3NB0oRJX1C1GDNNQ9rJPfw.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

@font-face {
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local("Poppins Regular"), local("Poppins-Regular"),
    url(https://fonts.gstatic.com/s/poppins/v9/pxiEyp8kv8JHgFVrJJbecnFHGPezSQ.woff2)
      format("woff2");
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8,
    U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}

@font-face {
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local("Poppins Regular"), local("Poppins-Regular"),
    url(https://fonts.gstatic.com/s/poppins/v9/pxiEyp8kv8JHgFVrJJnecnFHGPezSQ.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

@font-face {
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local("Poppins Regular"), local("Poppins-Regular"),
    url(https://fonts.gstatic.com/s/poppins/v9/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

@font-face {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: local("Poppins Medium"), local("Poppins-Medium"),
    url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLGT9Z11lFd2JQEl8qw.woff2)
      format("woff2");
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8,
    U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}

@font-face {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: local("Poppins Medium"), local("Poppins-Medium"),
    url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLGT9Z1JlFd2JQEl8qw.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

@font-face {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: local("Poppins Medium"), local("Poppins-Medium"),
    url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLGT9Z1xlFd2JQEk.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

@font-face {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: local("Poppins SemiBold"), local("Poppins-SemiBold"),
    url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLEj6Z11lFd2JQEl8qw.woff2)
      format("woff2");
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8,
    U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}

@font-face {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: local("Poppins SemiBold"), local("Poppins-SemiBold"),
    url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLEj6Z1JlFd2JQEl8qw.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

@font-face {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: local("Poppins SemiBold"), local("Poppins-SemiBold"),
    url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLEj6Z1xlFd2JQEk.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

@font-face {
  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local("Poppins Bold"), local("Poppins-Bold"),
    url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLCz7Z11lFd2JQEl8qw.woff2)
      format("woff2");
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8,
    U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}

@font-face {
  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local("Poppins Bold"), local("Poppins-Bold"),
    url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLCz7Z1JlFd2JQEl8qw.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

@font-face {
  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local("Poppins Bold"), local("Poppins-Bold"),
    url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLCz7Z1xlFd2JQEk.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
body{
  direction: ltr;
    color: var(--color-text);
    font-size: 16px;
    font-family: Poppins,Helvetica,Arial,sans-serif;
    line-height: 1.5;
    background-color: var(--bg-color);
    -webkit-font-smoothing: antialiased;
}
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
