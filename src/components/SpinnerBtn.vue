<template>
  <button
    class="searchbtn w-1/3 max-w-xs flex items-center justify-center bg-green p-1 rounded-lg text-white text-xl uppercase duration-300 active:bg-darkgreen mt-2"
  >
    <img
      class="spinner"
      src="../assets/img/spinner-svgrepo-com.svg"
      alt=""
    >
  </button>
</template>

<style scoped>
.spinner {
  animation: rotate 2s linear infinite;
  width: 30px;
  height: 30px;
  /* margin-left: 80px; */
  color: aliceblue;
}
  .path {
    stroke: rgb(0, 116, 232);
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
</style>