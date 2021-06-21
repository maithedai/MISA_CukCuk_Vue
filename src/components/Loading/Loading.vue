<template>
    <div class="loading">
        <h2>How To Create A Loader</h2>
        <div class="loader"></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

.loading {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0p;
    background-color: #ccc;
}

.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
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