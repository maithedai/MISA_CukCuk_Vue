<template>
  <div class="dx-field-value">
    <DxDateBox
      type="date"
      v-model="cloneModel"
      displayFormat="dd/MM/yyyy"
    />
    <span> {{cloneModel}}</span>
  </div>
</template>
<script>
import DxDateBox from 'devextreme-vue/date-box';


export default {
  components: {
    DxDateBox
  },
  props: {
    model: {
      type: String,
    }
  }, 

  data() {
    return {
      cloneModel: "",
    };
  },
  created() {
    
  },
  watch: {
    cloneModel: function(val) {
      this.$emit("bindDate", val)
    },
    model: function(val) {
      this.cloneModel = JSON.parse(JSON.stringify(val));
    }
  }
};
</script>
<style scoped>
.dx-field-value.dx-widget, .dx-field-value:not(.dx-widget) > .dx-widget {
  width: 100%;
  height: 40px;
  min-width: 100px;
}

.dx-field-value-static, .dx-field-value:not(.dx-switch):not(.dx-checkbox):not(.dx-button) {
  width: 100%;
  height: 40px;
  margin-top: 6px;
}

.dx-field-value.dx-widget, .dx-field-value:not(.dx-widget) > .dx-widget:hover {
  border-color: #019160;
}

.dx-field-value.dx-widget, .dx-field-value:not(.dx-widget) > .dx-widget:active {
  border-color: #019160;
}

</style>