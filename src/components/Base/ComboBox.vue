<template>
  <DxSelectBox
    :searchEnabled="true"
    :placeholder="placeholder_expr"
    noDataText="Không có dữ liệu hợp lệ"
    :dataSource="clone_custom_dropdown"
    :showClearButton="true"
    :searchTimeout="0"
    :search-expr="search_expr"
    display-expr="data_text"
    class="dxCombobox" >
  </DxSelectBox>
</template>
<script>
import DxSelectBox from "devextreme-vue/select-box";
/* eslint-disable no-debugger */
export default {
    components: {
        DxSelectBox,
    },
    props: {
        customDataDropDown: [],
        currentDataInput:String,
        placeholder_expr:String,
    },
    data(){
        return{
            clone_custom_dropdown:[],
            clone_current_input:'',
            search_expr: 'data_text',
        }
    },
    /**
     * gán những dữ liệu tĩnh từ bên ngoài\
     * MTDAI 24.06.2021
     */
    created(){
        this.clone_custom_dropdown = JSON.parse(JSON.stringify(this.customDataDropDown));
        this.$emit('getSelectValue', this.clone_current_input);
    },
    watch:{
        currentDataInput:{
            deep:true,
            handler:function(val){
                this.clone_current_input = JSON.parse(JSON.stringify(val));
                //gán dữ liệu trong combobox vào employee dưới dạng thô
                this.$emit('setSelectValue', this.clone_current_input);
            }
        },
    },
    methods: {
        
    }
};
</script>
<style>
/* chỉnh nút mũi tên */
.dxCombobox .dx-button-content {
    border-left: 1px solid #bbb;
}
.dxCombobox .dx-button-content:hover {
    background-color: #E9EBEE !important;
    border-radius: 0 4px 0 0;
}

.dx-overlay-content.dx-popup-normal.dx-resizable {
    border-radius: 0px;
}

.dxCombobox .dx-dropdowneditor-icon {
    border: none ;
    width: 100%;
    font-size: 0;
    background: url('../../assets/Icon/chevron-down-solid.svg') no-repeat;
    background-size: 11px;
    background-position: center;
    border-radius: 0 4px 0 0;
    transition: .2s;
}

.dxCombobox .dx-button-normal.dx-button-mode-contained.dx-widget.dx-dropdowneditor-button {
    padding: 0 !important;
    width: 40px;
}
/* trạng thái hover của nút mũi tên*/
.dxCombobox.dx-dropdowneditor-button.dx-state-active .dx-button-content, .dxCombobox.dx-dropdowneditor.dx-dropdowneditor-active .dx-button-content {
    background-color: #E9EBEE;
}
.dxCombobox.dx-dropdowneditor.dx-state-active .dx-button-content, .dxCombobox.dx-dropdowneditor.dx-state-hover:not(.dx-custom-button-hovered) .dx-button-content {
    background-color: #E9EBEE;
}
.dxCombobox.dx-dropdowneditor.dx-state-active .dx-dropdowneditor-icon, .dxCombobox.dx-dropdowneditor.dx-state-hover:not(.dx-custom-button-hovered) .dx-dropdowneditor-icon {
    background-color: unset;
}
.dxCombobox.dx-dropdowneditor-button.dx-state-active .dx-dropdowneditor-icon, .dxCombobox.dx-dropdowneditor.dx-dropdowneditor-active .dx-dropdowneditor-icon {
    background-color: unset;
    transform: rotate(180deg);
}
/* input */
.dxCombobox input.dx-texteditor-input {
    height: 38px;
    /* width: 200px; */
    font-family: GoogleSans-Regular;
    font-size: 13px;
    position: relative;
}
/* unselect button */
span.dx-clear-button-area {
    width: 30px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.dxCombobox span.dx-icon.dx-icon-clear {
    background: url('../../assets/Icon/x.svg') no-repeat;
    background-size: 12px;
    background-position: center;
    background-color: #ccc;
    border-radius: 50%;
    padding: 0;
    width: 16px;
    height: 16px;
    position: relative;
    top: 0;
    margin-top: 0;
    opacity: 0.4;
}
.dxCombobox span.dx-icon.dx-icon-clear:hover {
    opacity: 0.7;
}

.dx-show-clear-button .dx-clear-button-area {
    position: absolute;
    width: 34px;
    min-width: 34px;
    right: 40px;
}

.dxCombobox .dx-icon-clear::before  {
    content: "";
}
/* dropdown list */
.dx-selectbox-popup-wrapper .dx-overlay-content.dx-popup-normal.dx-resizable {
    border: none;
    transition: 0s !important;
}
.dx-selectbox-popup-wrapper div#dx-0197ce52-6971-19a9-7268-0c8e9a7dad7b {
    padding: 0;
}
.dx-selectbox-popup-wrapper div#dx-59836626-75a5-d123-be24-66a9356cf2d1 {
    padding: 0;
}
.dx-selectbox-popup-wrapper .dx-scrollable-content {
    font-family: GoogleSans-Regular !important;
    font-size: 13px !important;
    max-height: 200px !important;
}
.dx-selectbox-popup-wrapper .dx-item.dx-list-item {
    height: 40px;
    transition: 0s !important;
}
.dx-selectbox-popup-wrapper .dx-item.dx-list-item:hover {
    background-color: #E9EBEE ;
}
.dx-selectbox-popup-wrapper .dx-item-content.dx-list-item-content {
    line-height: 40px;
    padding: 0 !important;
}
.dx-selectbox-popup-wrapper  .dx-list-item-selected {
    background-color: #019160 !important;
    color: #fff !important;
}
.dx-selectbox-popup-wrapper .dx-state-active {
    /* background-color: #9daca7 !important; */
    color: #000 !important;
    height: 40px !important;
    width: 100% !important;
}
.dx-selectbox-popup-wrapper .dx-state-focused {
    background-color: #E9EBEE !important;
    color: #000 !important;
    border: none !important;
}
.dx-selectbox-popup-wrapper .dx-item.dx-list-item {
    background: url('../../assets/Icon/check-solid.svg') no-repeat;
    background-size: 0px;
    background-position-y: center;
    background-position-x: 10px;
    padding-left: 36px;
    height: 40px !important;
}
.dx-selectbox-popup-wrapper .dx-item.dx-list-item.dx-list-item-selected {
    background-size: 12px !important;
}
.dx-placeholder{
    font-family: GoogleSans-Regular;
    font-size: 12px !important;
}
.dx-texteditor.dx-state-hover {
    border-color: #019160 !important; 
}
</style>