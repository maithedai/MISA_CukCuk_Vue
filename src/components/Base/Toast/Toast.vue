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
          <div class="text-lable">{{message}}</div>
          <div @click="hide" :class="['icon-clear-' + type ,'icon-after']"></div>
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

    /**
     * Hàm hiện toast message
     * MTDAI 23.06.2021
     */
    show(type, message) {
      this.type = type;
      this.message = message;
      this.isVisible = true;
    },

    /**
     * Hàm ẩn toast message
     * MTDAI 23.06.2021
     */
    hide() {
      this.isVisible = false;
    }
  },
};
</script>
<style>

#product-list {
  /* padding: 10px; */
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

div.dx-overlay-content .dx-toast-content .dx-toast-success .dx-resizable {
  display: none !important;
}

.dx-toast-content {
  /* min-width: 200px;
  max-width: 400px; */
  width: auto !important;
  height: 48px !important;
  background-color: #ffffff;
  margin-right: 8px !important;
  border-radius: 4px;
  color: #212121;
  box-shadow: 0 3px 6px rgba(0,0,0,.16);
}
.dx-toast-icon{
  display: none;
  background-image: none !important;
}
.dx-toast-message{
  display: none;
}
.toast{
  /* position: relative; */
  display: flex;
  height: 100%;
  width: auto;
  align-items: center;
}
.icon-before{
  margin-right: 8px;
}
.icon-after{
  /* position: absolute; */
  margin-left: 32px !important;
}
</style>
