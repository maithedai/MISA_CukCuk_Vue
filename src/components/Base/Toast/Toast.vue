<template>
  <div id="product-list">
    <DxToast
      :visible="isVisible"
      :type="type"
      :displayTime="3000"
      position="bottom right"
      @hidden="isVisible = false"
    >
    <template>
        <div class="toast">
          <div :class="['icon-' + type ,'icon-before']"></div>
          <div>{{message}}</div>
          <div :class="['icon-clear-' + type ,'icon-after']"></div>
        </div>
    </template>
    </DxToast>
  </div>
</template>
<script>
import { DxToast } from 'devextreme-vue/toast';

export default {
  components: {
    DxToast,
  },

  data() {
    return {
      isVisible: false,
      message: '',
      type: 'info',
    };
  },
  methods: {
    show(type, message) {
      this.type = type;
      this.message = message;
      this.isVisible = true;
    },
  },
};
</script>
<style>
#product-list {
  padding: 10px;
}

#product-list ul {
  text-align: center;
  list-style-type: none;
  margin: 20px 0;
}

#product-list ul li {
  display: inline-block;
  width: 160px;
  margin: 10px;
}

#product-list ul li img {
  width: 100px;
}

.dx-toast-content {
  min-width: 200px;
  max-width: 400px;
  background-color: #ffffff;
  color: #212121;
  box-shadow: 0 4px 2px rgba(0,0,0,.175);
}
.dx-toast-icon{
  display: none;
  background-image: none !important;
}
.dx-toast-message{
  display: none;
}
.toast{
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
}
.icon-before{
  margin-right: 16px;
}
.icon-after{
  position: absolute;
  right: 8px;
}
</style>
