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
                    v-model="employee.EmployeeCode"
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
                  <input type="text" v-model="employee.FullName" FieldName="FullName" Require="true" />
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
                    v-model="employee.DateOfBirth"
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
                    <div class="container content-control">
                      <div class="input-field">
                        <input
                          v-model="employee.Gender"
                          type="text"
                          FieldName="Gender"
                          data-type="Enum"
                          EnumName="Gender"
                        />
                        <div class="h-line-form"></div>
                        <div class="arrow-form" data-arrow="true">
                          <i class="fas fa-angle-down" data-arrow="true"></i>
                        </div>
                        <div class="btn-clear">
                          <i class="far fa-times-circle"></i>
                        </div>
                      </div>
                      <div class="drop-down">
                        <div class="dr-item">
                          <div class="icon">
                            <i class="fas fa-check"></i>
                          </div>
                          <div class="text" value="0">Nữ</div>
                        </div>
                        <div class="dr-item">
                          <div class="icon">
                            <i class="fas fa-check"></i>
                          </div>
                          <div class="text" value="1">Nam</div>
                        </div>
                        <div class="dr-item">
                          <div class="icon">
                            <i class="fas fa-check"></i>
                          </div>
                          <div class="text" value="2">Khác</div>
                        </div>
                      </div>
                    </div>
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
                  <input v-model="employee.IdentityNumber" type="text" FieldName="IdentityNumber" />
                </div>
                <div class="noti-item-item">
                  <label for>Ngày cấp</label>
                  <br />
                  <input v-model="employee.IdentityDate" type="date" FieldName="IdentityDate" data-type="Date" />
                </div>
              </div>
              <div class="noti-item">
                <div class="noti-item-item">
                  <label for>Nơi cấp</label>
                  <br />
                  <input v-model="employee.IdentityPlace" type="text" FieldName="IdentityPlace"/>
                </div>
              </div>
              <div class="noti-item">
                <div class="noti-item-item">
                  <label for>
                    Email (
                    <span style="color: red;">*</span>)
                  </label>
                  <br />
                  <input v-model="employee.Email" type="text" FieldName="Email" />
                </div>
                <div class="noti-item-item">
                  <label for>
                    Số điện thoại (
                    <span style="color: red;">*</span>)
                  </label>
                  <br />
                  <input
                    v-model="employee.PhoneNumber"
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
                    <div class="container content-control">
                      <div class="input-field">
                        <input
                          v-model="employee.Job"
                          type="text"
                          
                          placeholder="Vị trí"
                          FieldName="Job"
                          data-type="Enum"
                          EnumName="Job"
                        />
                        <div class="h-line-form"></div>
                        <div class="arrow-form" data-arrow="true">
                          <i class="fas fa-angle-down" data-arrow="true"></i>
                        </div>
                        <div class="btn-clear">
                          <i class="far fa-times-circle"></i>
                        </div>
                      </div>
                      <div class="drop-down">
                        <div class="dr-item" value="1">
                          <div class="icon">
                            <i class="fas fa-check"></i>
                          </div>
                          <div class="text">Giám đốc</div>
                        </div>
                        <div class="dr-item" value="2">
                          <div class="icon">
                            <i class="fas fa-check"></i>
                          </div>
                          <div class="text">Kế toán</div>
                        </div>
                        <div class="dr-item" value="3">
                          <div class="icon">
                            <i class="fas fa-check"></i>
                          </div>
                          <div class="text">Lập trình viên</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="noti-item-item">
                  <label for>Phòng ban</label>
                  <br />
                  <div class="pn-department-form">
                    <div class="container content-control">
                      <div class="input-field">
                        <input
                          v-model="employee.Department"
                          type="text"
                          
                          placeholder="Phòng ban"
                          FieldName="Department"
                          data-type="Enum"
                        />
                        <div class="h-line-form"></div>
                        <div class="arrow-form" data-arrow="true">
                          <i class="fas fa-angle-down" data-arrow="true"></i>
                        </div>
                        <div class="btn-clear">
                          <i class="far fa-times-circle"></i>
                        </div>
                      </div>
                      <div class="drop-down">
                        <div class="dr-item" value="1">
                          <div class="icon">
                            <i class="fas fa-check"></i>
                          </div>
                          <div class="text">Phòng kinh doan</div>
                        </div>
                        <div class="dr-item" value="2">
                          <div class="icon">
                            <i class="fas fa-check"></i>
                          </div>
                          <div class="text">Phòng nhân sự</div>
                        </div>
                        <div class="dr-item" value="3">
                          <div class="icon">
                            <i class="fas fa-check"></i>
                          </div>
                          <div class="text">Phòng tài chính</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="noti-item">
                <div class="noti-item-item">
                  <label for>Mã số thuế cá nhân</label>
                  <br />
                  <input v-model="employee.TaxCode" type="text" FieldName="TaxCode" data-type="Number" />
                </div>
                <div class="noti-item-item">
                  <label for>
                    Lương cơ bản (
                    <span style="color: red;">*</span>)
                  </label>
                  <br />
                  <input
                    v-model="employee.Salary"
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
                    <div class="container content-control">
                      <div class="input-field">
                        <input
                          v-model="employee.WorkStatus"
                          type="text"
                          
                          placeholder="Tình trạng làm việc"
                          FieldName="WorkStatus"
                          data-type="Enum"
                          EnumName="WorkStatus"
                        />
                        <div class="h-line-form"></div>
                        <div class="arrow-form" data-arrow="true">
                          <i class="fas fa-angle-down" data-arrow="true"></i>
                        </div>
                        <div class="btn-clear">
                          <i class="far fa-times-circle"></i>
                        </div>
                      </div>
                      <div class="drop-down">
                        <div class="dr-item">
                          <div class="icon">
                            <i class="fas fa-check"></i>
                          </div>
                          <div class="text" value="1">Đang công tác</div>
                        </div>
                        <div class="dr-item">
                          <div class="icon">
                            <i class="fas fa-check"></i>
                          </div>
                          <div class="text" value="2">Đã nghỉ việc</div>
                        </div>
                      </div>
                    </div>
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
export default {
    data() {
      return {
        employee: {}
      }
    },
    props:
    {
      employeeId: String
    },
     created() {
      this.getEmployeeById(this.employeeId)
    },
    methods: {
        closeFormDetail() {
            this.$emit("closeFormDetail");
        },

        //hàm focus vào ô đầu tiên
        focusInputfirst() {
          let me = document.getElementById("code")
          alert(me)
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
          debugger // eslint-disable-line
          if(this.employeeId) {
            this.axios.put('http://cukcuk.manhnv.net/v1/employees/'+this.employeeId, this.employee).then((response) => {
              console.log(response)
            })
          }else {
            this.axios.post('http://cukcuk.manhnv.net/v1/employees', this.employee).then((response) => {
              console.log(response)
            })
          }
          //Hàm đóng form khi save xong
          this.$emit("closeFormDetail");

          //hàm reload dữ liệu sau khi save
          this.$emit("reloadDataTable")
        },
        /**
       * Hàm lấy dữ liệu theo id
       */
      getEmployeeById(employeeId){
        if(employeeId) {
          /**
           * get by id
           */
          var me = this;
          this.axios.get('http://cukcuk.manhnv.net/v1/employees/'+employeeId).then((response) => {
            me.employee = response.data;

          })

        } else {
          this.employee = {}
        }
      },
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
  height: 30px;
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
  width: 45%;
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

.arrow-form {
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
