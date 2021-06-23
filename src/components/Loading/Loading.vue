<template>
  <div class="wapper">
    <div class="form-wapper"></div>
    <div class="loading">
        <div class="loader"></div>
    </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.wapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
}

.wapper .form-wapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0);
  opacity: 0.5;
}

.loading {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0p;
    /* background-color: #ccc; */
    margin: auto;
    display: block;
    justify-content: center;
}

.loader {
  border: 8px solid #f3f3f3;
  border-radius: 50%;
  border-top: 8px solid #019160;
  width: 50px;
  height: 50px;
  animation: spin 0.8s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>