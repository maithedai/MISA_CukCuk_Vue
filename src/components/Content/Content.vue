<template>
  <div class="content">
    <div class="content-header">
      <div class="restaurent">
        <div class="restaurent-text">Nhà hàng biển đông</div>
        <div class="restaurent-drop"></div>
      </div>
      <div class="profile">
        <div class="icon-avt"></div>
        <div class="user-name">Mai Thế Đại</div>
        <div class="profile-option"></div>
      </div>
    </div>
    <div class="content-body">
      <div class="page-title">
        <div class="title-text">Danh sách nhân viên</div>
        <div id="toolBarEmployee">
          <div class="button-add button" v-on:click="show()">
            <div class="button-icon"></div>
            <div class="button-text">Thêm nhân viên</div>
          </div>
        </div>
      </div>
      <div class="content-content">
        <div class="bo-input">
          <div class="bo-left">
            <input
              id="input-name"
              placeholder="Tìm kiếm theo mã, Tên hoặc Số điện thoại"
            />
            <div class="pn-department">
              <div class="container content-control">
                <div class="input-field">
                  <input
                    type="text"
                    class="m-cbo"
                    id="cboDate"
                    placeholder="Tất cả phòng ban"
                  />
                  <div class="h-line"></div>
                  <div class="arrow" data-arrow="true">
                    <i class="fas fa-angle-down" data-arrow="true"></i>
                  </div>
                  <div class="btn-clear">
                    <i class="far fa-times-circle"></i>
                  </div>
                </div>
                <div class="drop-down">
                  <div class="dr-item">
                    <div class="icon"><i class="fas fa-check"></i></div>
                    <div class="text">Phòng ban 1</div>
                  </div>
                  <div class="dr-item">
                    <div class="icon"><i class="fas fa-check"></i></div>
                    <div class="text">Phòng ban 2</div>
                  </div>
                  <div class="dr-item">
                    <div class="icon"><i class="fas fa-check"></i></div>
                    <div class="text">Phòng ban 3</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="pn-location">
              <div class="container content-control">
                <div class="input-field">
                  <input
                    type="text"
                    class="m-cbo"
                    id="cboDate"
                    placeholder="Tất cả vị trí"
                  />
                  <div class="h-line"></div>
                  <div class="arrow" data-arrow="true">
                    <i class="fas fa-angle-down" data-arrow="true"></i>
                  </div>
                  <div class="btn-clear">
                    <i class="far fa-times-circle"></i>
                  </div>
                </div>
                <div class="drop-down">
                  <div class="dr-item">
                    <div class="icon"><i class="fas fa-check"></i></div>
                    <div class="text">Trạng thái 1</div>
                  </div>
                  <div class="dr-item">
                    <div class="icon"><i class="fas fa-check"></i></div>
                    <div class="text">Trạng thái 2</div>
                  </div>
                  <div class="dr-item">
                    <div class="icon"><i class="fas fa-check"></i></div>
                    <div class="text">Trạng thái 3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bo-refresh"></div>
        </div>
        <div class="bo-content-footer">
          <div class="footer-text-left">Hiển thị 1-10/1000 nhân viên</div>
          <div class="content-pages">
            <div class="first-page"></div>
            <div class="prev-page"></div>
            <div
              class="page-item"
              style="background-color: #019160; color: #fff"
            >
              1
            </div>
            <div class="page-item">2</div>
            <div class="page-item">3</div>
            <div class="page-item">4</div>
            <div class="next-page"></div>
            <div class="last-page"></div>
          </div>
          <div class="footer-text-right">10 nhân viên/trang</div>
        </div>

        <!-- Danh sách nhân viên -->
        <div class="bo-content">
          <div
            id="gridEmployee"
            Url="v1/employees"
            Toolbar="toolBarEmployee"
            ItemId="EmployeeId"
          >
            <div class="hide-item">
              <div class="col" FieldName="EmployeeCode">Mã nhân viên</div>
              <div class="col" FieldName="FullName">Họ và tên</div>
              <div
                class="col"
                FieldName="Gender"
                DataType="Enum"
                EnumName="Gender"
              >
                Giới tính
              </div>
              <div class="col" FieldName="DateOfBirth" DataType="Date">
                Ngày sinh
              </div>
              <div class="col" FieldName="PhoneNumber">Số điện thoại</div>
              <div class="col" FieldName="Email">Email</div>
              <div class="col" FieldName="Address">Địa chỉ</div>
              <div class="col" FieldName="DepartmentName">Phòng ban</div>
              <div class="col" FieldName="Salary" DataType="Number">Lương</div>
              <div
                class="col"
                FieldName="WorkStatus"
                DataType="Enum"
                EnumName="WorkStatus"
              >
                Tình trạng công việc
              </div>
            </div>
          </div>
        </div>

        <!-- Form thêm mới -->
        <div id="formEmployeeDetail" class="formDetail">
          <div class="formWrapp"></div>
          <div class="formContent">
            <div class="co-body">
              <div class="formContent-close" Command="Cancel"></div>
              <div class="formContent-text">THÔNG TIN NHÂN VIÊN</div>
              <div class="formContent-body">
                <div class="avt-detail"></div>
                <div class="form-detail">
                  <div class="a-noti">
                    <span>A. THÔNG TIN CHUNG:</span>
                    <div class="line-noti"></div>
                    <div class="noti-item">
                      <div class="noti-item-item">
                        <label for=""
                          >Mã nhân viên (<span style="color: red">*</span
                          >)</label
                        >
                        <br />
                        <input
                          type="text"
                          FieldName="EmployeeCode"
                          Require="true"
                        />
                      </div>
                      <div class="noti-item-item">
                        <label for=""
                          >Họ và tên (<span style="color: red">*</span>)</label
                        >
                        <br />
                        <input
                          type="text"
                          FieldName="FullName"
                          Require="true"
                        />
                      </div>
                    </div>
                    <div class="noti-item">
                      <div class="noti-item-item">
                        <label for=""
                          >Ngày sinh (<span style="color: red">*</span>)</label
                        >
                        <br />
                        <input
                          type="date"
                          FieldName="DateOfBirth"
                          DataType="Date"
                          Require="true"
                        />
                      </div>
                      <div class="noti-item-item">
                        <label for="">Giới tính</label>
                        <br />
                        <div class="pn-gender">
                          <div class="container content-control">
                            <div class="input-field">
                              <input
                                type="text"
                                id="cboDate"
                                FieldName="Gender"
                                DataType="Enum"
                                EnumName="Gender"
                              />
                              <div class="h-line-form"></div>
                              <div class="arrow-form" data-arrow="true">
                                <i
                                  class="fas fa-angle-down"
                                  data-arrow="true"
                                ></i>
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
                        <label for=""
                          >Số CMTND/ Căn cước (<span style="color: red">*</span
                          >)</label
                        >
                        <br />
                        <input type="text" FieldName="" />
                      </div>
                      <div class="noti-item-item">
                        <label for="">Ngày cấp</label>
                        <br />
                        <input
                          type="date"
                          FieldName="DateMade"
                          DataType="Date"
                        />
                      </div>
                    </div>
                    <div class="noti-item">
                      <div class="noti-item-item">
                        <label for="">Nơi cấp</label>
                        <br />
                        <input type="text" FieldName="" />
                      </div>
                    </div>
                    <div class="noti-item">
                      <div class="noti-item-item">
                        <label for=""
                          >Email (<span style="color: red">*</span>)</label
                        >
                        <br />
                        <input type="text" FieldName="Email" />
                      </div>
                      <div class="noti-item-item">
                        <label for=""
                          >Số điện thoại (<span style="color: red">*</span
                          >)</label
                        >
                        <br />
                        <input
                          type="text"
                          FieldName="PhoneNumber"
                          DataType="Number"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="b-noti">
                    <span>B. THÔNG TIN CÔNG VIỆC:</span>
                    <div class="line-noti"></div>
                    <div class="noti-item">
                      <div class="noti-item-item">
                        <label for="">Vị trí</label>
                        <br />
                        <div class="pn-job">
                          <div class="container content-control">
                            <div class="input-field">
                              <input
                                type="text"
                                id="cboDate"
                                placeholder="Vị trí"
                                FieldName="Job"
                                DataType="Enum"
                                EnumName="Job"
                              />
                              <div class="h-line-form"></div>
                              <div class="arrow-form" data-arrow="true">
                                <i
                                  class="fas fa-angle-down"
                                  data-arrow="true"
                                ></i>
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
                        <label for="">Phòng ban</label>
                        <br />
                        <div class="pn-department-form">
                          <div class="container content-control">
                            <div class="input-field">
                              <input
                                type="text"
                                id="cboDate"
                                placeholder="Phòng ban"
                                FieldName="Department"
                                DataType="Enum"
                              />
                              <div class="h-line-form"></div>
                              <div class="arrow-form" data-arrow="true">
                                <i
                                  class="fas fa-angle-down"
                                  data-arrow="true"
                                ></i>
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
                        <label for="">Mã số thuế cá nhân</label>
                        <br />
                        <input
                          type="text"
                          FieldName="TaxCode"
                          DataType="Number"
                        />
                      </div>
                      <div class="noti-item-item">
                        <label for=""
                          >Lương cơ bản (<span style="color: red">*</span
                          >)</label
                        >
                        <br />
                        <input
                          type="number"
                          FieldName="Salary"
                          DataType="Number"
                          Require="true"
                        />
                      </div>
                    </div>
                    <div class="noti-item">
                      <div class="noti-item-item">
                        <label for="">Ngày gia nhập công ty</label>
                        <br />
                        <input
                          type="date"
                          FieldName="StartWork"
                          DataType="Date"
                        />
                      </div>
                      <div class="noti-item-item">
                        <label for="">Tình trạng công việc</label>
                        <br />
                        <div class="pn-workstatus">
                          <div class="container content-control">
                            <div class="input-field">
                              <input
                                type="text"
                                id="cboDate"
                                placeholder="Tình trạng làm việc"
                                FieldName="WorkStatus"
                                DataType="Enum"
                                EnumName="WorkStatus"
                              />
                              <div class="h-line-form"></div>
                              <div class="arrow-form" data-arrow="true">
                                <i
                                  class="fas fa-angle-down"
                                  data-arrow="true"
                                ></i>
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
                <div class="button-cancel button" Command="Cancel">
                  <div class="button-text">Hủy</div>
                </div>
                <div class="button-save button" Command="Save">
                  <div class="button-icon-save">
                    <i class="far fa-save"></i>
                  </div>
                  <div class="button-text">Lưu</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FormDetail ref="FormDetail"/>
  </div>
</template>
<script>
import FormDetail from './FormDetail.vue'

export default {
  name: "Content",
  components: {
    FormDetail
  },
  methods: {
    show() {
      this.$refs.FormDetail.open();
    }
  }
};
</script>
<style scoped>
.menu-bar-small {
    --menu-bar-width: 52px;
}
.content {
    width: calc(100% - var(--menu-bar-width));
    height: 100vh;
    position: relative;
}
.content-header {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(224, 224, 224);
    position: absolute;
    top: 0;
}

.content-body {
    width: 100%;
    height: calc(100vh - 50px);
    position: absolute;
    top: 50px;
}

    .content-header .restaurent {
        width: 200px;
        height: 100%;
        display: flex;
    }

    .content-header .profile {
        height: 100%;
        display: flex;
    }
.restaurent-text {
    width: auto;
    height: 100%;
    line-height: 50px;
    text-align: center;
    margin-right: 10px;
    margin-left: 16px;
}

.restaurent-drop {
    width: 16px;
    height: 100%;
    background-image: url("../../assets/Icon/btn-next-page.svg");
    background-repeat: no-repeat;
    background-position: center;
    transform: rotate(90deg);
}

.profile .icon-avt {
    width: 30px;
    height: 100%;
    margin-right: 16px;
    background-image: url("../../assets/Icon/avatar-default.png");
    background-repeat: no-repeat;
    background-size: 30px;
    background-position: center;
}

.profile .user-name {
    width: auto;
    /* text-align: center; */
    line-height: 50px;
}

.profile .profile-option {
    width: 16px;
    height: 100%;
    margin: 0px 16px 16px;
    background-image: url("../../assets/Icon/option.png");
    background-repeat: no-repeat;
    background-position: center;
}

.page-title {
    height: 40px;
    position: absolute;
    left: 16px;
    right: 16px;
    top: 16px;
    display: flex;
    justify-content: space-between;
}

    .page-title .title-text {
        line-height: 40px;
        font-size: 18px;
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

.button-add:hover {
    background-color: #2FBE8E;
}
    .button .button-icon {
        width: 20px;
        height: 20px;
        margin-left: 16px;
        margin-right: 8px;
        background-image: url("../../assets/Icon/add.png");
        background-repeat: no-repeat;
        background-position: center;
    }

    .button .button-text {
        margin-right: 16px;
    }

.content-content {
    position: absolute;
    top: 60px;
    left: 16px;
    right: 16px;
    bottom: 16px;
}
    .content-content .bo-input {
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: space-between;
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

.bo-left {
    display: flex;
    width: auto;
    height: 100%;
}

.bo-refresh {
    width: 40px;
    height: 38px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-image: url("../../assets/Icon/refresh.png");
    background-repeat: no-repeat;
    background-position: center;
}

.bo-refresh:hover {
    background-color: rgb(240, 240, 240);
}

.notValidControl {
    border-color: red;
}

#input-name {
    width: 250px;
    height: 38px;
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 0px 30px 0px;
    background-image: url("../../assets/Icon/search.png");
    background-repeat: no-repeat;
    background-position: 8px center;
    margin-right: 16px;
}

#input-department {
    width: 150px;
    height: 38px;
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 0px 8px 0px;
    margin-right: 16px;
}

#input-location {
    width: 150px;
    height: 38px;
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 0px 8px 0px;
}

.bo-content {
    position: absolute;
    width: 100%;
    top: 55px;
    bottom: 32px;
    overflow-x: auto;
    /* overflow-y: hidden; */
    border-bottom: 4px solid #ccc;
}

.bo-content-footer {
    position: absolute;
    width: 100%;
    bottom: 0px;
    height: 20px;
    display: flex;
    justify-content: space-evenly;
}

.footer-text-left {
    position: absolute;
    left: 0;
}

.footer-text-right {
    position: absolute;
    right: 0;
}

.content-pages {
    position: absolute;
    display: flex;
}

    .content-pages .first-page {
        width: 20px;
        height: 20px;
        margin-right: 8px;
        background-image: url("../../assets/Icon/btn-firstpage.svg");
        background-repeat: no-repeat;
    }

    .content-pages .last-page {
        width: 20px;
        height: 20px;
        margin-left: 8px;
        background-image: url("../../assets/Icon/btn-lastpage.svg");
        background-repeat: no-repeat;
    }

    .content-pages .prev-page {
        width: 20px;
        height: 20px;
        margin-right: 8px;
        background-image: url("../../assets/Icon/btn-prev-page.svg");
        background-repeat: no-repeat;
    }

    .content-pages .next-page {
        width: 20px;
        height: 20px;
        margin-left: 8px;
        background-image: url("../../assets/Icon/btn-next-page.svg");
        background-repeat: no-repeat;
    }

    .content-pages .page-item {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        border: 1px solid #ccc;
        line-height: 25px;
        text-align: center;
        margin-left: 8px;
    }

table {
    width: 100%;
    border-collapse: collapse;
}

thead th {
    position: sticky;
    top: 0;
    background: #fff;
    color: #000;
}

.selected-row {
    background-color: #81b1a1 !important;
}

tr:nth-child(even){background-color: #f2f2f2;}

::-webkit-scrollbar{
    width: 5px;
}

::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 10px;
}

td {
    padding: 10px;
    border-bottom: 1px solid #ccc;
}

tr:hover {
    background-color: rgb(245, 245, 245);
}

.d-flex {
    display: flex;
}

.flex-1 {
    flex: 1;
}

.align-center {
    text-align: center;
}

.align-right {
    text-align: right;
}

.hide-item {
    display: none;
}

.align-right {
    text-align: right;
}

.align-center {
    text-align: center;
}

th {
    padding: 10px;
    border-bottom: 1px solid #ccc;
}

.d-flex {
    display: flex;
}

.formDetail {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: none;
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
    left: 20%;
    right: 20%;
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
    justify-content:space-between;
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
    background-color: #2FBE8E;
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

.arrow-form:hover{
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

.fade {
    opacity: 0.2;
}
.container .m-cbo{
    width: 170px;
    height: 36px;
    border: 1px #bbbbbb solid;
    border-radius: 4px;
    font-size: 13px;
    color: #000000;
    padding-left: 16px;
    padding-right: 62px;
    /* margin: 4px; */
    outline: none;
    text-overflow: ellipsis;
}
.container .m-cbo:hover,
.container .m-cbo:focus,
.container .m-cbo:active{
    border-color: #d2d2d2;
}
/* style cho cÃƒÆ’Ã‚Â¡c thÃƒÂ¡Ã‚ÂºÃ‚Â» anh em */
.container .m-cbo:hover ~ .h-line,
.container .m-cbo:focus ~ .h-line,
.container .m-cbo:active ~ .h-line{
    border-color: #d2d2d2;
}
.pn-department {
    position: relative;
    margin-right: 16px;
    height: 100%;
    width: 250px;
}

.pn-location {
    position: relative;
    width: 250px;
    height: 100%;
}

.container .input-field{
    height: 38px;
    position: center;
}
.container .input-field .arrow{
    position: absolute;
    top: 1px;
    right: 0px;
    bottom: 0px;
    width: 38px;
    height: 38px;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.container .input-field .h-line{
    border-left: 1px #bbbbbb solid;
    position: absolute;
    top: 1px;
    right: 37px;
    bottom: 1px;
    width: 1px;
    height: 38px;
}
.container .input-field .arrow.down{
    transform: rotate(180deg);
}
.container .input-field .arrow:hover{
    background-color: #e9ebee;
}


/* item clear text */
.container .input-field .btn-clear{
    position: absolute;
    top: 15px;
    right: 17%;
    cursor: pointer;
    display: none;
}
.container .input-field .btn-clear:hover .far{
    background-color: #d2d2d2;
    border-radius: 50%;
}

/* Drop down */
/* .container .drop-down{
    position: absolute;
    top: 62px;
    width: 250px;
    left: 4px;
    box-shadow: 0px 2px 16px -9px #000000;
    display: none;
} */

    .container .drop-down .dr-item{
    /* width: 240px; */
    height: 40px;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.container .drop-down .dr-item:hover{
    background-color: #e9ebee;
}
.container .drop-down .dr-item.active{
    background-color: #019160;
    color: #ffffff;
}

.container .drop-down .dr-item .icon{
    padding: 12px 15px;
    color: transparent;
}
.container .drop-down .dr-item.active .icon{
    color: #ffffff;
}

.container .drop-down .dr-item .text{
    flex: 1;
}

input::placeholder{
    font-size: 11px !important;
    color: #bbbbbb;
}
</style>