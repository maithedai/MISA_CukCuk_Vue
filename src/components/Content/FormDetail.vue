<template>
  <div id="formEmployeeDetail" class="formDetail">
    <div class="formWrapp"></div>
    <div class="formContent">
      <div class="co-body">
        <div
          class="formContent-close"
          @click="openFormConfirmClose"
          Command="Cancel"
        ></div>
        <div class="formContent-text">THÔNG TIN NHÂN VIÊN</div>
        <div class="formContent-body">
          <div class="avt">
            <div class="avt-detail"></div>
            <div class="text-avt">(Vui lòng chọn ảnh có định dạng .jpg, jpeg, .png, .gif.)</div>
          </div>
          <div class="form-detail" ref="form">
            <div class="a-noti">
              <span>A. THÔNG TIN CHUNG:</span>
              <div class="line-noti"></div>
              <div class="noti-item">
                <div class="noti-item-item">
                  <label for>
                    Mã nhân viên (
                    <span style="color: red;">*</span>)
                  </label>
                  <br />
                  <input 
                    class="form-detail-input"
                    v-tooltip="{
                      content: 'Bạn không được bỏ trống thông tin này',
                      trigger: 'manual',
                      show: isShowTooltip,
                      autoHide: true
                    }" 
                    v-model="employeeX.EmployeeCode"
                    type="text"
                    FieldName="EmployeeCode"
                    Require="empty"
                  />
                </div>
                <div class="noti-item-item">
                  <label for>
                    Họ và tên (
                    <span style="color: red;">*</span>)
                  </label>
                  <br />
                  <input class="form-detail-input" type="text" v-model="employeeX.FullName" FieldName="FullName" Require="empty" 
                    v-tooltip="{
                      content: 'Bạn không được bỏ trống thông tin này',
                      trigger: 'manual',
                      show: isShowTooltip,
                    }" 
                  />
                </div>
              </div>
              <div class="noti-item">
                <div class="noti-item-item">
                  <label for>
                    Ngày sinh (
                    <span style="color: red;">*</span>)
                  </label>
                  <br />
                  <!-- <input
                    v-model="employeeX.DateOfBirth"
                    type="date"
                    FieldName="DateOfBirth"
                    data-type="Date"
                    Require="empty"
                  /> -->
                  <div class="dx-field-value">
                    <DxDateBox
                      type="date"
                      v-model="employeeX.DateOfBirth"
                      FieldName="DateOfBirth"
                      data-type="Date"
                      displayFormat="dd/MM/yyyy"
                      v-tooltip="{
                        content: 'Bạn không được bỏ trống thông tin này',
                        trigger: 'manual',
                        show: isShowTooltip,
                      }" 
                    />
                  </div>
                </div>
                <div class="noti-item-item">
                  <label for>Giới tính</label>
                  <br />
                  <div class="pn-gender">
                    <!-- <DropDown v-model="employeeX.Gender"
                      type="text"
                      FieldName="Gender"
                      data-type="Enum"
                      EnumName="Gender" 
                      style="height: 38px; width: 100%; margin: 6px 0px 0px;" :customData="genderDropdown" 
                    />                    -->
                    <ComboBox
                      v-bind:customDataDropDown="gender_dropdown"
                      v-bind:currentDataInput="employeeX.GenderName"
                      FieldName="Gender"
                      style="width: 100%; margin-top: 6px">
                    </ComboBox>
                  </div>
                </div>
              </div>
              <div class="noti-item">
                <div class="noti-item-item">
                  <label for>
                    Số CMTND/ Căn cước (
                    <span style="color: red;">*</span>)
                  </label>
                  <br />
                  <input 
                    class="form-detail-input"
                    v-model="employeeX.IdentityNumber" type="text" FieldName="IdentityNumber" Require="empty"
                    v-tooltip="{
                      content: 'Bạn không được bỏ trống thông tin này',
                      trigger: 'manual',
                      show: isShowTooltip,
                    }" 
                  />
                </div>
                <div class="noti-item-item">
                  <label for>Ngày cấp</label>
                  <br />
                  <div class="dx-field-value">
                    <DxDateBox
                      class="form-detail-input"
                      type="date"
                      v-model="employeeX.IdentityDate"
                      FieldName="IdentityDate"
                      data-type="Date"
                      displayFormat="dd/MM/yyyy"
                    />
                  </div>
                </div>
              </div>
              <div class="noti-item">
                <div class="noti-item-item">
                  <label for>Nơi cấp</label>
                  <br />
                  <input class="form-detail-input" v-model="employeeX.IdentityPlace" type="text" FieldName="IdentityPlace"/>
                </div>
              </div>
              <div class="noti-item">
                <div class="noti-item-item">
                  <label for>
                    Email (
                    <span style="color: red;">*</span>)
                  </label>
                  <br />
                  <input class="form-detail-input" v-model="employeeX.Email" type="text" FieldName="Email" Require="empty"
                    v-tooltip="{
                      content: 'Bạn không được bỏ trống thông tin này',
                      trigger: 'manual',
                      show: isShowTooltip,
                    }" 
                  />
                </div>
                <div class="noti-item-item">
                  <label for>
                    Số điện thoại (
                    <span style="color: red;">*</span>)
                  </label>
                  <br />
                  <input
                    class="form-detail-input"
                    v-model="employeeX.PhoneNumber"
                    type="text"
                    FieldName="PhoneNumber"
                    data-type="Number"
                    Require="empty"
                    v-tooltip="{
                      content: 'Bạn không được bỏ trống thông tin này',
                      trigger: 'manual',
                      show: isShowTooltip,
                    }" 
                  />
                </div>
              </div>
            </div>
            <div class="b-noti">
              <span>B. THÔNG TIN CÔNG VIỆC:</span>
              <div class="line-noti"></div>
              <div class="noti-item">
                <div class="noti-item-item">
                  <label for>Vị trí</label>
                  <br />
                  <div class="pn-job">
                    <!-- <DropDown v-model="employeeX.Position"
                      type="text"
                      FieldName="Posiotion"
                      data-type="Enum"
                      style="height: 38px; width: 100%; margin: 6px 0px 0px;" :customData="jobDropdown" 
                    />    -->
                    <ComboBox
                      v-bind:customDataDropDown="job_dropdown"
                      FieldName="Job"
                      style="width: 100%; margin-top: 6px">
                    </ComboBox>
                  </div>
                </div>
                <div class="noti-item-item">
                  <label for>Phòng ban</label>
                  <br />
                  <div class="pn-department-form">
                    <ComboBox
                      v-bind:customDataDropDown="department_dropdown"
                      FieldName="Department"
                      style="width: 100%; margin-top: 6px">
                    </ComboBox>
                  </div>
                </div>
              </div>
              <div class="noti-item">
                <div class="noti-item-item">
                  <label for>Mã số thuế cá nhân</label>
                  <br />
                  <input class="form-detail-input" v-model="employeeX.TaxCode" type="text" FieldName="TaxCode" data-type="Number" />
                </div>
                <div class="noti-item-item">
                  <label for>
                    Lương cơ bản (
                    <span style="color: red;">*</span>)
                  </label>
                  <br />
                  <input
                    class="form-detail-input"
                    v-model="employeeX.Salary"
                    type="number"
                    FieldName="Salary"
                    data-type="Number"
                    Require="empty"
                    v-tooltip="{
                      content: 'Bạn không được bỏ trống thông tin này',
                      trigger: 'manual',
                      show: isShowTooltip,
                    }" 
                  />
                </div>
              </div>
              <div class="noti-item">
                <div class="noti-item-item">
                  <label for>Ngày gia nhập công ty</label>
                  <br />
                  <!-- <input type="date" FieldName="JoinDate" data-type="Date" /> -->
                  <!-- <DateBox 
                    :model="employeeX.JoinDate"
                    FieldName="JoinDate"
                    data-type="Date"
                    Require="empty"
                  /> -->
                  <div class="dx-field-value">
                    <DxDateBox
                      type="date"
                      v-model="employeeX.JoinDate"
                      FieldName="JoinDate"
                      data-type="Date"
                      displayFormat="dd/MM/yyyy"
                      />
                  </div>
                </div>
                <div class="noti-item-item">
                  <label for>Tình trạng công việc</label>
                  <br />
                  <div class="pn-workstatus">
                    <ComboBox
                      v-bind:customDataDropDown="workstatus_dropdown"
                      FieldName="WorkStatus"
                      style="width: 100%; margin-top: 6px">
                    </ComboBox>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="formContent-footer">
        <div class="formBottom">
          <div
            class="button-cancel button"
            @click="openFormConfirmClose"
            Command="Cancel"
          >
            <div class="button-text">Hủy</div>
          </div>
          <div class="button-save button" @click="save" Command="Save">
            <div class="button-icon-save">
              <i class="far fa-save"></i>
            </div>
            <div class="button-text">Lưu</div>
          </div>
        </div>
      </div>
    </div>
    <ConfirmCloseForm v-if="isShowCofirmClose" @closeFormDetail="closeFormDetail" @closeFormConFirmClose="closeFormConFirmClose"/>
  </div>
</template>

<script>
import DropDown from "../Base/DropDown.vue"
import BaseValidate from "../Base/BaseValidate.vue"
import moment from 'moment'
// import DateBox from '../Base/DateBox.vue'
import DxDateBox from 'devextreme-vue/date-box';
import ConfirmCloseForm from '../Dialog/ConfirmCloseForm.vue'
import ComboBox from '../Base/ComboBox.vue'
import Resource from '../../js/Common/Resource.js'
import Enumeration from '../../js/Common/Enumeration.js'

export default {
    components: {
      DropDown,
      DxDateBox,
      ConfirmCloseForm,
      ComboBox
    },
    extends: BaseValidate,
    data() {
      return {
        // options: {
        //   content: 'Bạn không được bỏ trống thông tin này',
        //   trigger: 'manual',
        //   show: isShowTooltip,
        // },
        isShowCofirmClose: false,      
        isShowTooltip: false,
        model: {},
        isBlur: false,
        employeeX: {},
        gender_dropdown_title:'Giới tính',
        gender_dropdown:[
          {
            data_text:'Nữ',
          },
          {
            data_text:'Nam',
          },
          {
            data_text:'Khác',
          }
        ],
        job_dropdown:[
          {
            data_text:'Nhân viên',
          },
          {
            data_text:'Trưởng phòng',
          },
          {
            data_text:'Kế toán',
          }
        ],
        department_dropdown:[
          {
            data_text:'Phòng nhân sự',
          },
          {
            data_text:'Phòng hành chính',
          },
          {
            data_text:'Phòng nghiến cứu',
          }
        ],  
        workstatus_dropdown:[
          {
            data_text:'Đang công tác',
          },
          {
            data_text:'Đã nghỉ việc',
          },
          {
            data_text:'Đang thử việc',
          }
        ],  
      }
    },

    props:
    {
      employee: {
        type: Object,
        default: ()=> {}
      }
    },

    created() {
      // this.newEmployeeCode();
    },

    watch:{
      employee:{
        immediate: true,
        handler(val){
          if(val.EmployeeId){
            this.employeeX = {...val};
            this.employeeX.DateOfBirth = moment(this.employeeX.DateOfBirth).format('YYYY-MM-DD');

            //Hàm lấy giá trị giới tính công việc bind lên form
            let inputGender = document.querySelectorAll('[FieldName="Gender"]');
            inputGender[0].getElementsByTagName("input")[1].value = this.getGenderToString(val.Gender);

            //Hàm lấy giá trị tình trạng công việc bind lên form

            // let inputWorkStatus = document.querySelectorAll('[FieldName="WorkStatus"]');
            // inputWorkStatus[0].getElementsByTagName("input")[1].value = val.WorkStatus;
          }
        }
      },
    },

    /**
     * Hàm dùng để gọi sự kiện focus ô input đầu tiên mỗi khi mở form
     * MTDAI 17.06.2021
     */
    mounted() {
      this.focusInputfirst();

    },

    methods: {
        /**
         * Hàm khi click button hủy form detai mở popup confirm hủy
         * MTDAI 21.06.2021
         */
        openFormConfirmClose() {
          this.isShowCofirmClose = true
        },

        /**
         * Hàm khi accept đóng form confirm
         * MTDAI 21.06.2021 
         */
        closeFormDetail() {
          this.isShowCofirmClose = false
          this.$emit('closeFormDetail')
        },

        /**
         * Hàm đóng form confirm tắt formdetail
         * MTDAI 21.06.2021 
         */
        closeFormConFirmClose() {
          this.isShowCofirmClose = false
        },

        /**
         * Hàm focus vào ô input đầu tiên
         * MTDAI 16.06.2021
         */
        focusInputfirst() {
          let me = document.querySelector("[FieldName='EmployeeCode']");
          me.focus();
        },

        /**
         * Hàm gán giá trị cho EmployeeCode
         * MTDAI 18.08.2021
         */
        setValueEmployeeCode() {

        },

        /**
         * Hàm check validate khi blur
         * MTDAI 18.06.2021
         */
        setValueisBlur() {
          this.isBlur = true
        },

        /**
         * Hàm tự động tạo mới EmployeeCode 
         * MTDAI 18.06.2021
         */
        async newEmployeeCode() {
          var employeeCode = ""
          await this.axios.get('http://cukcuk.manhnv.net/v1/Employees/NewEmployeeCode').then((response) => {
            employeeCode = response.data
          }).catch((error) => {
            console.log(error)
            this.$toast.show("warning","Có lỗi xảy ra! Vui lòng liên hệ MISA");
          });

          let me = document.querySelector("[FieldName='EmployeeCode']");
          this.employeeX.EmployeeCode = employeeCode
          me.value = employeeCode
        },

        /**
         * Gọi hàm validate bên Base.vue
         * MTDAI 18.06.2021
         */
        callValidateBlur() {
          this.validateBlur()
        },

        /**
         * Hàm xử lý validate khi blur
         */
        checkValidateBlur() {
          this.setValueisBlur()
          this.callValidateBlur()
        },

        /**
         * Hàm ra fieldname
         * MTDAI 24.06.2021
         */
        getElementByFieldName(fieldname){
            return document.querySelectorAll('[FieldName="'+fieldname+'"]')[0];
        },

        /**
         * Hàm trả data về dạng dữ liêu thô
         * MTDAI 24.06.2021
         */
        getSelectedGender(selectedVal){
          switch(selectedVal){
            case Resource.Gender.Male:
                this.employeeX.Gender = Enumeration.Gender.Male;
                break;
            case Resource.Gender.Female:
                this.employeeX.Gender = Enumeration.Gender.Female;
                break;
            case Resource.Gender.Other:
                this.employeeX.Gender = Enumeration.Gender.Other;
                break;
          }
          this.employeeX.GenderName = selectedVal
        },

        /**
         * Hàm trả dữ liệu dạng thô sang đã fomat (string)
         * MTDAI 25.06.2021
         */
        getGenderToString(val) {
          let gender
          switch(val){
            
            case 0:
                gender = "Nữ";
                break;
            case 1:
                gender = "Nam";
                break;
            case 2:
                gender = "Khác";
                break;
          }
          return gender
        },
        
        /**
         * Hàm cất dữ liệu lên serve
         * MTDAI 14.06.2021
         */
        save(){
          
          //Hàm check Validate khi save
          if (this.validate()) {
            
            /**
             * Gán giá trị từ combobox lên dữ liệu trên serve
             * MTDAI 25.06.2021
             */
            let e = this.getElementByFieldName('Gender');
            this.employeeX.Gender = e.getElementsByTagName('input')[1].value

            //Hàm đóng form khi save xong
            this.$emit("closeFormDetail");

            //Hiển thị thông báo thành công
            console.log(this.employeeX)
            this.$emit("saveEmployee",this.employeeX.EmployeeId ? this.employeeX.EmployeeId : null, this.employeeX);
          }
          else {
             /**
             * Hàm show tooltip khi người dùng không điền đủ thông tin vài trường required
             * MTDAI 21.06.2021
             */
            this.isShowTooltip = true
          }
        },

        /**
         * 
         */
        bindDate(val) {
          this.employeeX.DateOfBirth = val
          // this.employeeX.IdentityDate = val
          // this.employeeX.JoinDate = val
        },

        bindDatea(val) {
          this.employeeX.IdentityDate = val
        },

        /**
         * Hàm bind dữ liệu giới tính lên form
         * MTDAI 24.06.2021
         */
        // setSelectValue(gender){
        //   debugger
        //   let inputGender = document.querySelectorAll('[FieldName="Gender"]');
        //   inputGender[0].getElementsByTagName("input")[1].value = gender;
        // },
    }
};
</script>

<style>
.invalid {
  border: 1px solid red;
}
.show {
  display: block;
}
.formDetail {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* display: none; */
}

.formDetail .formWrapp {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0);
  opacity: 0.5;
}

.form-detail-input {
  margin-top: 6px;
  width: 100%;
  height: 40px;
}

div.formDetail select {
  height: 34px;
  width: 103%;
}

.formContent {
  position: absolute;
  background-color: #fff;
  border-radius: 5px;
  top: 32px;
  left: 0;
  right: 0;
  bottom: 32px;
  width: 700px;
  /* height: 900px; */
  min-width: 600px;
  /* min-height: 800px; */
  margin: auto;
}
.formContent .formContent-footer {
  position: absolute;
  width: 100%;
  height: 70px;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: rgb(236, 236, 236);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.co-body {
  position: absolute;
  top: 16px;
  left: 16px;
  right: 16px;
  bottom: 40px;
}

.co-body .formContent-close {
  width: 100%;
  height: 20px;
  background-image: url("../../assets/Icon/x.svg");
  background-repeat: no-repeat;
  background-position: right;
}

.co-body .formContent-text {
  width: 100%;
  height: 20px;
  font-size: 20px;
}

.co-body .formContent-body {
  position: absolute;
  top: 70px;
  left: 16px;
  right: 16px;
  bottom: 30px;
}

.avt {
  width: 200px;
  height: 300px;
}

.avt-detail {
  width: 100%;
  height: 200px;
  background-image: url("../../assets/Icon/default-avatar.jpg");
  background-size: 200px 200px;
  background-repeat: no-repeat;
  border-radius: 50%;
  border: 1px solid #ccc;
}

.text-avt {
  text-align: center;
}

.form-detail {
  position: absolute;
  top: 0;
  left: 220px;
  bottom: 0;
  right: 0;
  padding-right: 8px;
  overflow: auto;
}

::-webkit-scrollbar{
    width: 5px;
}

::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 10px;
}

@media only screen and (max-width: 1570px) {
  .avt-detail {
    width: 150px;
    height: 150px;
    background-image: url("../../assets/Icon/default-avatar.jpg");
    background-size: 150px 150px;
    background-repeat: no-repeat;
    border-radius: 50%;
    border: 1px solid #ccc;
  }
  .form-detail {
    position: absolute;
    top: 0;
    left: 170px;
    bottom: 0;
    right: 0;
  }
  .avt {
    width: 150px;
    height: 200px;
  }
}

.line-noti {
  width: 80px;
  height: 5px;
  background-color: #019160;
  margin-top: 8px;
  margin-bottom: 8px;
}

.noti-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}
.noti-item .noti-item-item {
  width: 48%;
  height: 40px;
  border-radius: 4px;
}

.formBottom {
  height: 40px;
  width: 200px;
  display: flex;
  justify-content: space-evenly;
}

.button-icon-save {
  width: auto;
  margin-left: 16px;
  margin-right: 8px;
}

.button-save:hover {
  background-color: #2fbe8e;
}

.button-cancel {
  background-color: #ececec !important;
  padding: 10px 10px 10px 24px;
  color: #000 !important;
}

.button-cancel:hover {
  background-color: rgb(205, 205, 205) !important;
}

.pn-gender {
  width: 100%;
  display: flex;
}
  .input-field {
    display: flex;
  }

.h-line-form {
  border-left: 1px #bbbbbb solid;
  position: absolute;
  top: 7px;
  right: 23px;
  bottom: 1px;
  width: 1px;
  height: 33px;
}

.pn-gender.arrow-form {
  position: absolute;
  top: 6px;
  right: -13px;
  bottom: 0px;
  width: 38px;
  height: 33px;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.arrow-form:hover {
  background-color: #e9ebee;
}

.drop-down {
  position: absolute;
  top: 45px;
  width: 100%;
  box-shadow: 0px 2px 16px -9px #000000;
  display: none;
  z-index: 2;
  background-color: #fff;
}

input {
  padding-left: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

input:focus {
  outline: none;
  border-color: #019160;
}

.formContent .formContent-footer {
  position: absolute;
  width: 100%;
  height: 70px;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: rgb(236, 236, 236);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.button {
  background-color: #019160;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  font-size: 13px;
  color: #fff;
  display: flex;
  line-height: 36px;
  align-items: center;
}

.button .button-text {
  margin-right: 16px;
}

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

.dx-calendar-navigator .dx-calendar-caption-button.dx-button .dx-button-content {
    padding: 2px 15px 4px;
    color: #019160 !important;
}

.dx-calendar-navigator-next-month.dx-button .dx-icon, .dx-calendar-navigator-next-view.dx-button .dx-icon {
    color: #019160;
}

.dx-calendar-navigator-previous-month.dx-button .dx-icon, .dx-calendar-navigator-previous-view.dx-button .dx-icon {
    color: #019160;
}

.dx-texteditor.dx-state-active.dx-editor-filled, .dx-texteditor.dx-state-active.dx-editor-outlined, .dx-texteditor.dx-state-active.dx-editor-underlined, .dx-texteditor.dx-state-focused.dx-editor-filled, .dx-texteditor.dx-state-focused.dx-editor-outlined, .dx-texteditor.dx-state-focused.dx-editor-underlined {
  border-color: #019160;
}

.dx-calendar-cell.dx-calendar-selected-date.dx-calendar-contoured-date, .dx-calendar-cell.dx-calendar-selected-date.dx-calendar-today.dx-calendar-contoured-date {
  -webkit-box-shadow: inset 0 0 0 1px #bebebe, inset 0 0 0 1000px #019160;
  box-shadow: inset 0 0 0 1px #bebebe, inset 0 0 0 1000px #019160;
}
</style>
