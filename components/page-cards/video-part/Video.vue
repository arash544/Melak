<template>
  <div class="wrappers">
     <Videoframe caption="Minimalism" url="https://www.youtube.com/embed/0Co1Iptd4p4"/>  
  </div>
</template>

<script>
import Videoframe from './Videoframe'
export default {
name:"Video",
components:{
    Videoframe
}
}
</script>

<style lang="scss" scoped>

.wrappers {
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

</style>