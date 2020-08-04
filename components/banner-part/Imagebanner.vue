<template>
  <div class="wrap">
    <div class="image-parent">
      <a href="/">
        <img :src="img" />
      </a>
    </div>
    <div class="spots-parent">
      <div class="spots"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Imagebanner",
  props: ["img"],
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 60.5%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  @media only screen and (max-width: 1650px) {
    width: 63%;
  }
  @media only screen and (max-width: 1000px) {
    width: 90%;
  }
}
.spots-parent {
  width: 25%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  @media only screen and (max-width: 1650px) {
    width: 30%;
  }
  @media only screen and (max-width: 1000px) {
    display: none;
  }
}
.image-parent {
  width: 75%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
}
img {
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  height: 60vh;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
  &:hover {
    -webkit-transform: scale(1.01);
    -ms-transform: scale(1.01);
    transform: scale(1.01);
  }
  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    height: auto;
  }
}
a {
  color: transparent;
}
.spots {
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%;
  height: 60vh;
  background-image: 
  -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 0)),
      to(rgba(0, 0, 0, 0))
    ),
    url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iLTMwMiAzOTAgMTQgMTQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgLTMwMiAzOTAgMTQgMTQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KCS5zdDF7ZmlsbDojMkEyOTI5O30KPC9zdHlsZT4KPHJlY3QgeD0iLTMwMiIgeT0iMzkwIiBjbGFzcz0ic3QwIiB3aWR0aD0iMTQiIGhlaWdodD0iMTQiLz4KPHJlY3QgeD0iLTI5NiIgeT0iMzk2IiBjbGFzcz0ic3QxIiB3aWR0aD0iMiIgaGVpZ2h0PSIyIi8+Cjwvc3ZnPg==);
  background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 0)),
      to(rgba(0, 0, 0, 0))
    ),
    url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iLTMwMiAzOTAgMTQgMTQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgLTMwMiAzOTAgMTQgMTQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KCS5zdDF7ZmlsbDojMkEyOTI5O30KPC9zdHlsZT4KPHJlY3QgeD0iLTMwMiIgeT0iMzkwIiBjbGFzcz0ic3QwIiB3aWR0aD0iMTQiIGhlaWdodD0iMTQiLz4KPHJlY3QgeD0iLTI5NiIgeT0iMzk2IiBjbGFzcz0ic3QxIiB3aWR0aD0iMiIgaGVpZ2h0PSIyIi8+Cjwvc3ZnPg==");
  background: -o-linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iLTMwMiAzOTAgMTQgMTQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgLTMwMiAzOTAgMTQgMTQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KCS5zdDF7ZmlsbDojMkEyOTI5O30KPC9zdHlsZT4KPHJlY3QgeD0iLTMwMiIgeT0iMzkwIiBjbGFzcz0ic3QwIiB3aWR0aD0iMTQiIGhlaWdodD0iMTQiLz4KPHJlY3QgeD0iLTI5NiIgeT0iMzk2IiBjbGFzcz0ic3QxIiB3aWR0aD0iMiIgaGVpZ2h0PSIyIi8+Cjwvc3ZnPg==");
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iLTMwMiAzOTAgMTQgMTQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgLTMwMiAzOTAgMTQgMTQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KCS5zdDF7ZmlsbDojMkEyOTI5O30KPC9zdHlsZT4KPHJlY3QgeD0iLTMwMiIgeT0iMzkwIiBjbGFzcz0ic3QwIiB3aWR0aD0iMTQiIGhlaWdodD0iMTQiLz4KPHJlY3QgeD0iLTI5NiIgeT0iMzk2IiBjbGFzcz0ic3QxIiB3aWR0aD0iMiIgaGVpZ2h0PSIyIi8+Cjwvc3ZnPg==");
  background-size: 12px;
  background-color: var(--bg-white);
  padding-bottom: 0;
  border-bottom: 0;
  display: block;
  background-repeat: space;
  @media only screen and (max-width: 1000px) {
    display: none;
  }
}

</style>