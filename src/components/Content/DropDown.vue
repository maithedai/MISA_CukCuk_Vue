<template>
  <div class="dropdown" @blur="isShow = !isShow" :style="{ width: customWidth } " tabindex="0">
    <div
      class="dropdown__btn"
      :class="{ 'dropdown__btn-focus': isShow }"
      @click="isShow = !isShow"
    >
      <div class="dropdown__btn-left">
        <div class="dropdown__content">
          <span class="dropdown__text">{{ selectedValue }}</span>
        </div>
        <div
          class="dropdown__icon-unselect"
          v-if="selectedValue != customData.defaultValue"
          @click.stop="!isShow"
          @click="unselectItem"
        >
          <i class="fas fa-times fa-xs"></i>
        </div>
      </div>
      <div class="dropdown__icon-arrow" :class="{ 'rotate-180': isShow }">
        <i class="fas fa-chevron-down fa-xs"></i>
      </div>
    </div>
    <div class="dropdown__list" v-show="isShow">
      <div
        class="dropdown__list-item"
        :class="{ 'dropdown__item-selected': currentSelectedItem == index }"
        v-for="(item, index) in customData.items"
        :key="index"
        @mouseenter="hover"
        @mouseleave="unhover"
        @click="click(index)"
      >
        <div
          class="dropdown__item-icon"
          :class="{ 'opacity-1': currentSelectedItem == index }"
        >
          <i class="fas fa-check fa-xs"></i>
        </div>
        <span class="dropdown__item-name">{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    customData: {
      type: Object,
      required: true,
    },
    model: {
      type: Number,
      default: -1
    }
  },
  data() {
    return {
      isShow: false,
      customWidth: "",
      currentSelectedItem: null,
      cloneModel: '',
    };
  },
  created() {
    this.selectedValue = this.customData.defaultValue;

    this.customWidth =
      "calc(var(--column-width) * " + this.customData.width + " )";
  },
  watch: {
    cloneModel: function(val) {
      this.$emit('updateValueInput', this.customData.inputId, val);
    },
    model: function(val) {
      this.cloneModel = JSON.parse(JSON.stringify(val)); 

      if(this.customData.dataType == "Enum") {

        if(this.cloneModel != null) {
          this.click(this.cloneModel);
        }
      }
    }
  },
  methods: {
    /**
     * Hàm xử lý khi hover chuột vào một item
     * NVTOAN 12/06/2021
     */
    hover(e) {
      e.target.classList.add("dropdown__item-hover");
    },
    
    /**
     * Hàm xử lý khi bỏ hover chuột vào một item
     * NVTOAN 12/06/2021
     */
    unhover(e) {
      e.target.classList.remove("dropdown__item-hover");
    },

    /**
     * Hàm xử lý khi click chuột vào một item
     * NVTOAN 12/06/2021
     */
    click(index) {
      this.selectedValue = this.customData.items[index];
      this.cloneModel = index;
      this.currentSelectedItem = index;
      this.isShow = false;
    },

    /**
     * Hàm xử lý khi bỏ chọn item
     * NVTOAN 12/06/2021
     */
    unselectItem() {
      this.selectedValue = this.customData.defaultValue;
      this.currentSelectedItem = null;
      this.cloneModel = null;
    },
  },
};
</script>

<style scoped>
/* dropdown */
.dropdown {
    /* width: calc(var(--column-width) * 2.5); */
    position: relative;
    outline: none;
}

.dropdown:focus-visible .dropdown__btn {
    border: 1px solid #019160;
}

.rotate-180 {
    transform: rotate(180deg);
}

.dropdown__btn {
    width: 100%;
    background-color: #fff;
    border: 1px solid #bbb;
    border-radius: 4px;
    height: 40px;
    color: #000;
    font-size: 13px;
    font-family: 'GoogleSans-regular';
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    cursor: pointer;
}

.dropdown__btn-focus {
    border: 1px solid #019160;
}

.dropdown__btn-left {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: calc(100% - 20px);
    margin-left: 16px;
}

.dropdown__icon-unselect {
    background-color: rgba(0, 0, 0, 0.03);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: #bbb;
}

.dropdown__icon-unselect:hover {
    background-color: rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 0.6);
}

.dropdown__icon-arrow {
    font-size: 16px;
    padding: 0 12px;
    transition: 0.2s;
}


.dropdown__list {
    position: absolute;
    width: 100%;
    font-size: 13px;
    font-family: 'GoogleSans-regular';
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.04);
    border-radius: 4px;
    padding: 3px 0px;
    z-index: 100;
}

.dropdown__list-item {
    height: 40px;
    display: flex;
    align-items: center;
    background-color: #fff;
    cursor: pointer;
}

.dropdown__item-hover {
    background-color: #e9ebee;
}

.dropdown__item-selected {
    background-color: #019160;
    color: #fff;
}

.dropdown__item-icon {
    padding: 0px 10px;
    opacity: 0;
}
</style>