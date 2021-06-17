<template>
  <div id="formEmployeeDetail" class="formDetail">
    <div class="formWrapp"></div>
    <div class="formContent">
      <div class="co-body">
        <div
          class="formContent-close"
          @click="closeFormDetail"
          Command="Cancel"
        ></div>
        <div class="formContent-text">THÔNG TIN NHÂN VIÊN</div>
        <div class="formContent-body">
          <div class="avt-detail"></div>
          <div class="form-detail">
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
                    v-model="employeeX.EmployeeCode"
                    type="text"
                    FieldName="EmployeeCode"
                    Require="true"
                    :v-tooltip="{content: 'Bạn cần điền thông tin', classes: ['custom-tooltip'], show: true}"
                  />
                </div>
                <div class="noti-item-item">
                  <label for>
                    Họ và tên (
                    <span style="color: red;">*</span>)
                  </label>
                  <br />
                  <input type="text" v-model="employeeX.FullName" FieldName="FullName" Require="true" />
                </div>
              </div>
              <div class="noti-item">
                <div class="noti-item-item">
                  <label for>
                    Ngày sinh (
                    <span style="color: red;">*</span>)
                  </label>
                  <br />
                  <input
                    v-model="employeeX.DateOfBirth"
                    type="date"
                    FieldName="DateOfBirth"
                    data-type="Date"
                    Require="true"
                  />
                </div>
                <div class="noti-item-item">
                  <label for>Giới tính</label>
                  <br />
                  <div class="pn-gender">
                    <DropDown v-model="employeeX.Gender"
                        type="text"
                        FieldName="Gender"
                        data-type="Enum"
                        EnumName="Gender" 
                        style="height: 38px; width: 100%; margin: 6px 0px 0px;" :customData="genderDropdown" 
                    />                   
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
                  <input v-model="employeeX.IdentityNumber" type="text" FieldName="IdentityNumber" />
                </div>
                <div class="noti-item-item">
                  <label for>Ngày cấp</label>
                  <br />
                  <input v-model="employeeX.IdentityDate" type="date" FieldName="IdentityDate" data-type="Date" />
                </div>
              </div>
              <div class="noti-item">
                <div class="noti-item-item">
                  <label for>Nơi cấp</label>
                  <br />
                  <input v-model="employeeX.IdentityPlace" type="text" FieldName="IdentityPlace"/>
                </div>
              </div>
              <div class="noti-item">
                <div class="noti-item-item">
                  <label for>
                    Email (
                    <span style="color: red;">*</span>)
                  </label>
                  <br />
                  <input v-model="employeeX.Email" type="text" FieldName="Email" />
                </div>
                <div class="noti-item-item">
                  <label for>
                    Số điện thoại (
                    <span style="color: red;">*</span>)
                  </label>
                  <br />
                  <input
                    v-model="employeeX.PhoneNumber"
                    type="text"
                    FieldName="PhoneNumber"
                    data-type="Number"
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
                    <DropDown v-model="employeeX.Position"
                      type="text"
                      FieldName="Posiotion"
                      data-type="Enum"
                      style="height: 38px; width: 100%; margin: 6px 0px 0px;" :customData="jobDropdown" 
                    />   
                  </div>
                </div>
                <div class="noti-item-item">
                  <label for>Phòng ban</label>
                  <br />
                  <div class="pn-department-form">
                    <DropDown v-model="employeeX.Department"
                      type="text"
                      FieldName="Department"
                      style="height: 38px; width: 100%; margin: 6px 0px 0px;" :customData="departmentDropdown" 
                    />
                  </div>
                </div>
              </div>
              <div class="noti-item">
                <div class="noti-item-item">
                  <label for>Mã số thuế cá nhân</label>
                  <br />
                  <input v-model="employeeX.TaxCode" type="text" FieldName="TaxCode" data-type="Number" />
                </div>
                <div class="noti-item-item">
                  <label for>
                    Lương cơ bản (
                    <span style="color: red;">*</span>)
                  </label>
                  <br />
                  <input
                    v-model="employeeX.Salary"
                    type="number"
                    FieldName="Salary"
                    data-type="Number"
                    Require="true"
                  />
                </div>
              </div>
              <div class="noti-item">
                <div class="noti-item-item">
                  <label for>Ngày gia nhập công ty</label>
                  <br />
                  <input type="date" FieldName="StartWork" data-type="Date" />
                </div>
                <div class="noti-item-item">
                  <label for>Tình trạng công việc</label>
                  <br />
                  <div class="pn-workstatus">
                    <DropDown v-model="employeeX.WorkStatus"
                      type="text"
                      FieldName="WorkStatus"
                      style="height: 38px; width: 100%; margin: 6px 0px 0px;" :customData="workStatusDropdown" 
                    />
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
            @click="closeFormDetail"
            Command="Cancel"
          >
            <div class="button-text">Hủy</div>
          </div>
          <div class="button-save button" @click="save" Command="Save">
            <div class="button-icon-save button">
              <i class="far fa-save"></i>
            </div>
            <div class="button-text">Lưu</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommonFn from "../js/Common/common.js"
import DropDown from "./DropDown.vue"

export default {
    components: {
      DropDown,
    },

    data() {
      return {
        employeeX: {},
        genderDropdown: {
          defaultValue: "",
          items: ["Nữ", "Nam", "Khác"],
          width: 2.8
        },
        jobDropdown: {
          defaultValue: "",
          items: ["Giám đốc", "Kế toán", "Khác"],
          width: 2.8
        },
        departmentDropdown: {
          defaultValue: "",
          items: ["Phòng 1", "Phòng 2", "Phòng 2"],
          width: 2.8
        },
        workStatusDropdown: {
          defaultValue: "",
          items: ["Đang công tác", "Đã nghỉ việc", "Đang tạm nghỉ"],
          width: 2.8
        }
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
    },
    watch:{
      employee:{
        immediate: true,
        deep: true,
        handler(val){
          this.employeeX = {...val};
          this.employeeX.DateOfBirth = CommonFn.getDataFormat(this.employeeX.DateOfBirth, 'Date','');
        }
      }
    },

    /**
     * Hàm dùng để gọi sự kiện focus ô input đầu tiên mỗi khi mở form
     * MTDAI 17.06.2021
     */
    mounted() {
      this.focusInputfirst();
    },

    methods: {
        closeFormDetail() {
            this.$emit("closeFormDetail");
        },

        /**
         * Hàm focus vào ô input đầu tiên
         * MTDAI 16.06.2021
         */
        focusInputfirst() {
          let me = document.querySelector("[FieldName='EmployeeCode']");
          me.focus();
        },

        // Hàm check validate mã nhân viên
        // CheckValidate() {

        //     // Check validate mã nhân viên trống
        //     let me = document.getElementById("code");
        //     if (!this.code) {
        //       me.classList.add("invalid");
        //       // me.isShowTooltip = true;
        //     }
        //     else {
        //       this.save();
        //     }
        // },

        /**
         * Hàm cất dữ liệu lên serve
         */
        save(){
          //Hàm đóng form khi save xong
          this.$emit("closeFormDetail");
          this.$emit("saveEmployee",this.employeeId ? this.employeeId : null, this.employee);
        }
    },
};
</script>

<style scoped>
.custom-tooltip {
  color: red;
}
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
.formDetail .wrapper,
.formDetail .formWrapp {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0);
  opacity: 0.5;
}

div.formDetail input,
div.formDetail select {
  height: 38px;
  margin-top: 6px;
  width: 100%;
}

div.formDetail select {
  height: 34px;
  width: 103%;
}

.formContent {
  position: absolute;
  top: 32px;
  left: 30%;
  right: 30%;
  bottom: 32px;
  min-width: 600px;
  background-color: #fff;
  border-radius: 5px;
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
  bottom: 16px;
}

.avt-detail {
  width: 200px;
  height: 200px;
  background-image: url("../../assets/Icon/default-avatar.jpg");
  background-size: 200px 200px;
  background-repeat: no-repeat;
  border-radius: 50%;
  border: 1px solid #ccc;
}
.form-detail {
  position: absolute;
  top: 0;
  left: 220px;
  bottom: 0;
  right: 0;
}

::-webkit-scrollbar{
    width: 5px;
}

::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 10px;
}

@media only screen and (max-width: 1400px) {
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
  background-color: #ccc;
  padding: 10px 10px 10px 24px;
  color: #000;
}

.button-cancel:hover {
  background-color: rgb(248, 248, 248);
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

.button-cancel {
  background-color: #ccc;
  padding: 10px 10px 10px 24px;
  color: #000;
}
.button .button-text {
  margin-right: 16px;
}
</style>
