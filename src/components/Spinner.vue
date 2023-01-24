<template>
  <img
    class="spinner"
    src="../assets/img/spinner-svgrepo-com.svg"
    alt=""
  >
</template>

<script setup>


</script>

<style scoped>
.spinner {
  animation: rotate 2s linear infinite;
  z-index: 2;
  position: absolute;
  top: 70%;
  left: 50%;
  margin: -25px 0 0 -25px;
  width: 50px;
  height: 50px;
  color: #FFF;
  background-color: #FFF;
  border-radius: 50%;
}
  .path {
    stroke: rgb(238, 241, 244);
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
}


@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
@media screen and (max-width:470px){
  .spinner{
    top: 30%;
  }
}

</style>
