<template>
  <!-- <div class="wapper">
    <div class="form-wapper">
    
    </div> -->
    <div class="content">
      <div class="content-header">
        <div class="restaurent">
          <div class="restaurent-text text-title-2">Nhà hàng biển đông</div>
          <div class="restaurent-drop"></div>
        </div>
        <div class="profile">
          <div class="icon-avt"></div>
          <div class="user-name text-lable-field">Mai Thế Đại</div>
          <div class="profile-option"></div>
        </div>
      </div>
      <div class="content-body">
        <div class="page-title">
          <div class="title-text text-heading">Danh sách nhân viên</div>
          <div id="toolBarEmployee">
            <div class="bo-delete" @click="deleteEmployee" :employeeId="employeeId">
              <i style="size: 20px; margin-left: 16px" class="fas fa-user-minus"></i>
              <div class="button-delete-text">Xóa nhân viên</div>
            </div>
            <div class="button-add button" @click="eventCreateEmployee">
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
                ref="tableContent"
                v-debounce:200ms="searchEmployee"
              />
              <ComboBox
                v-bind:customDataDropDown="department_dropdown"
                FieldName="Department" style="margin-right: 16px">
              </ComboBox>
              <ComboBox
                v-bind:customDataDropDown="location_dropdown"
                FieldName="Location">
              </ComboBox>
            </div>
            <div class="bo-refresh" @click="refreshData"></div>
          </div>
          <div class="bo-content-footer">
            <div class="footer-text-left">Hiển thị <b>{{fromRec}}-{{toRec}}/{{totalRecord}}</b> nhân viên</div>
            <div class="content-pages">
              <div class="first-page button-pagging" @click="firstPage"></div>
              <div class="prev-page button-pagging" @click="prevPage"></div>
              <!-- <div class="page-item" @click="page1" :class="{'page-active': isActive}">1</div>
            <div class="page-item" @click="page2" :class="{'page-active': isActive}">2</div>
              <div class="page-item">3</div>-->
              <div
                class="page-item"
                v-for="index in items"
                :key="index"
                @click="paggingEmployee(index)"
                :class="{'page-active': (index === selectedIndex)}"
              >{{ index }}</div>
              <div class="next-page button-pagging" @click="nextPage"></div>
              <div class="last-page button-pagging" @click="lastPage"></div>
            </div>
            <div class="footer-text-right"><b>{{ pageSize }}</b> nhân viên/trang</div>
          </div>

          <!-- Danh sách nhân viên -->
          <TableContent
            @showFormDetailEdit="showFormDetailEdit"
            @selectItem="selectItem"
            @getTotalPage="getTotalPage"
            ref="tableContent"
          />
        </div>
      </div>
      <FormDetail
        v-if="isShow"
        ref="formDetail"
        @closeFormDetail="closeFormDetail"
        :employee="employee"
        @saveEmployee="saveEmployee"
      />
      <ConfirmDelete
        v-show="isShowConfirm"
        @closeFormConfirm="closeFormConfirm"
        :employee="employee"
        @acceptDeleteEmployee="acceptDeleteEmployee"
      />
      <Loading v-show="isShowLoading" />
    </div>
  <!-- </div> -->
</template>
<script>
import FormDetail from "./FormDetail.vue";
import TableContent from "./TableContent.vue";
import ConfirmDelete from "../Dialog/ConfirmDelete.vue";
// import DropDown from "../Base/DropDown.vue";
import Loading from "../Loading/Loading.vue";
// import EventBus from '../../EvenBus.js'
import ComboBox from '../Base/ComboBox.vue'

export default {
  name: "Content",
  components: {
    FormDetail,
    TableContent,
    ConfirmDelete,
    // DropDown,
    Loading,
    ComboBox
  },
  data() {
    return {
      pageSize:0,
      // fromRec:0,
      // toRec:0,
      totalPage: 1,
      totalRecord: 0,
      selectedIndex: 0,
      items: [],
      isActive: false,
      multiSelectArray: [],
      isShowLoading: false,
      isShow: false,
      isShowDropdown: false,
      employeeId: null,
      isShowConfirm: false,
      employee: {},
      department_dropdown_title:'Tất cả phòng ban',
      department_dropdown:[
        {
          data_text:'Phòng ban 1',
        },
        {
          data_text:'Phòng ban 2',
        },
        {
          data_text:'Phòng ban 3',
        }
      ],
      location_dropdown: [
        {
          data_text:'Vị trí 1',
        },
        {
          data_text:'Vị trí 2',
        },
        {
          data_text:'Vị trí 3',
        }
      ],
    };
  },

  mounted() {
    // this.$refs.tableContent.paggingEmployee();
    this.paggingEmployee(1)
  },

//   updated(){
// this.paggingEmployee(1)
//   },

  watch: {
    /**
     * Hàm gán sự kiện khi số tổng số trang thay đổi
     * MTDAI 23.04.2021
     */
    totalPage: function(val) {
      if(val > 4) {
        this.items = [1, 2, 3, 4]
      }
      else {
        for (let i = 1; i < val + 1 ; i++) {
          this.items.push(i)
        }
      }
    },

    /**
     * Hàm gán sự kiện khi số trang thay đổi
     * MTDAI 24.04.2021
     */
    selectedIndex: function(val) {
      var num = (val - 1)*this.pageSize
      this.paggingEmployee(val)
      // if(val < this.totalPage) {
      //   this.fromRec = num + 1
      //   this.toRec = num + this.pageSize
      // }
      // else {
      //   this.fromRec = num + 1
      //   this.toRec = this.totalRecord
      // }
    }
  },

  /**
   * Hàm get giá trị cho toRec và fromRec
   * MTDAI 25.06.2021
   * 
   */
  computed: {
    fromRec() {
      return (this.selectedIndex - 1)*this.pageSize + 1
    },
    toRec() {
      return (this.selectedIndex)*this.pageSize
    }
  },

  methods: {
    /**
     * Hàm sử lý khi reload trang
     * MTDAI 17.06.2021
     */
    refreshData() {
      this.isShowLoading = true;
      setTimeout(() => this.isShowLoading = false, 1000);
      this.paggingEmployee(1);
      // this.getData();
    },

    /**
     * Hàm click vào số trang (trang hiện tại) trả về dữ liệu của trang
     * MTDAI 22.06.2021
     */
    paggingEmployee(index) {
      this.selectedIndex = index;
      this.$refs.tableContent.paggingEmployee(this.selectedIndex);
    },

    setSelectedGender(selectedVal){
      //gán selectVal vào input trên giao diện
      let e = this.getElementByFieldName('Gender');
      if(e){
          e.getElementsByTagName('input')[1].value = '';
          e.getElementsByTagName('input')[1].value = selectedVal;
      }
    },

    getSelectedGender(selectedVal){
      switch(selectedVal){
        case Resource.Gender.Male:
            this.employee.Gender = Enum.Gender.Male;
            break;
        case Resource.Gender.Female:
            this.employee.Gender = Enum.Gender.Female;
            break;
        case Resource.Gender.Other:
            this.employee.Gender = Enum.Gender.Other;
            break;
      }
    },

    /**
     * Hàm get giá trị tổng số trang, pageSize và số bản ghi nhân viên
     * MTDAI 23.06.2021
     */
    async getTotalPage(totalPage, totalRecord, pageSize) {
      this.totalPage = totalPage;
      this.totalRecord = totalRecord;
      await this.getPageSize(pageSize);
      // this.paggingEmployee(1);
    },

    /**
     * Hàm gán giá trị cho Pagesize. Mục đích tạo ra hàm để sử dụng async / await để giá trị pageSize có trước khi hiển thị trang 1
     * MTDAI 25.06.2021
     */
    getPageSize(pageSize) {
      this.pageSize = pageSize     
    },

    /**
     * Hàm khi click button next page
     * MTDAI 22.06.2021
     */
    nextPage() {
      var maxIndex = Math.max.apply(Math, this.items);
      if(maxIndex < this.totalPage ) {
        if(this.selectedIndex < maxIndex) { 
          this.selectedIndex += 1;
        } else {
          this.items.push(maxIndex+1)
          this.selectedIndex += 1
          this.items.shift();
        }
      }else {
         if(this.selectedIndex < maxIndex) { 
          this.selectedIndex += 1;
        }
      }
    },

    /**
     * Hàm khi click button prev page
     * MTDAI 22.06.2021
     */
    prevPage() {
      var minIndex = Math.min.apply(Math, this.items);

      if(this.selectedIndex > 1) {

        if(this.selectedIndex > minIndex) { 
          this.selectedIndex -= 1;
        }else {
          this.items.unshift(minIndex - 1)
          this.selectedIndex -= 1

          this.items.pop();

        }
      }
    },

    /**
     * Hàm khi click quay về trang đầu tiên
     * MTDAI 22.06.2021
     */
    firstPage() {
      this.selectedIndex = 1;
      if(this.totalPage < 4) {
        for(let i=this.totalPage; i>0;i--){
          this.items.pop()
          this.items.unshift(i)
        }
      }
      else {
        this.items = [1, 2, 3, 4]
      }
    },

    /**
     * Hàm khi click quay về trang cuối cùng
     * MTDAI 22.06.2021
     */
    lastPage() {
      if(this.totalPage) {
        this.selectedIndex = this.totalPage;
        if(this.totalPage > 4) {
          for(let i=this.totalPage; i > (this.totalPage - 4); i--) {
            this.items.pop()
            this.items.unshift(i)
          }
        }
        if(this.totalPage == 4) {
          this.selectedIndex = 4
        }else {
          for(let i=1; i < this.totalPage; i++) {
            this.items.push(i)
          }
        }
      }
    },

    /**
     * Hàm search Employee
     * MTDAI 18.06.2021
     */
    searchEmployee(val) {
      this.$refs.tableContent.searchEmployee(val);
    },
    /**
     * Hàm close formdetail
     * MTDAI 22.06.2021
     */
    closeFormDetail() {
      this.isShow = false;
    },

    reloadDataTable() {
      this.getData();
    },

    getData() {
      this.$refs.tableContent.getData();
    },
    /**
     * Hàm mở form detail sửa
     * MTDAI 15.06.2021
     */
    showFormDetailEdit(employee) {
      // console.log(employee)
      this.isShow = true;
      this.axios
        .get("http://cukcuk.manhnv.net/v1/employees/" + employee.EmployeeId)
        .then((response) => {
          if (response) {
            this.employee = response.data;
          }
        })
        .catch((error) => {
          console.log(error);
          this.$toast.show("warning", "Có lỗi xảy ra! Vui lòng liên hệ MISA");
        });
    },

    /**
     * Hàm mở form detail khi tạo
     * MTDAI 15.06.2021
     */
    showFormDetail() {
      this.employee = {};
      this.isShow = true;
      
    },

    /**
     * Hàm xử lý xự kiện khi click button thêm nhân viên xử lý 2 sự kiện: mở form và tự sinh mã nhân viên
     * MTDAI 25.06.2021
     * 
     */
    async eventCreateEmployee() {
      await this.showFormDetail();
      this.$refs.formDetail.newEmployeeCode();
    },

    /**
     * hàm ở form confirm xóa khi click button xóa nhân viên
     * MTDAI 16.06.2021
     */
    deleteEmployee() {
      let sel = document.querySelectorAll(".selected-row");
      //Hàm kiểm tra xem có bản ghi nào được chọn chưa
      if (sel.length > 0) {
        this.isShowConfirm = true;
      }
    },

    /**
     *
     */
    selectItem(multiSelectArray) {
      this.multiSelectArray = multiSelectArray;
    },
    /**
     * Hàm khi đã confirm xóa
     * MTDAI 16.06.2021
     */
    acceptDeleteEmployee() {
      //Xóa những phần tử đã được chọn
      for (let employeeId of this.multiSelectArray) {
        this.axios
          .delete("http://cukcuk.manhnv.net/v1/employees/" + employeeId)
          .then((response) => {
            if (response) {
              this.$refs.tableContent.onDeleteSuccess(employeeId);
              this.isShowConfirm = false;

              /**
               * Hàm hiển thị thông báo xóa thành công
               * MTDAI 18.06.2021
               */
              this.$toast.show("success", "Xóa nhân viên thành công");
            }
            //Hàm bỏ select bản ghi khi đã xóa xong
          })
          .catch((error) => {
            console.log(error);
            this.$toast.show("warning", "Có lỗi xảy ra! Vui lòng liên hệ MISA");
          });
      }
      // this.$refs.tableContent.removeSelect()
    },

    /**
     * Hàm khi click button Hủy form confirm
     * MTDAI 16.06.2021
     */
    closeFormConfirm() {
      this.isShowConfirm = false;
    },

    /**
     * Hàm thêm, sửa dữ liệu trên api
     */
    saveEmployee(id, employee) {
      console.log(id)
      if (id) {
        debugger
        this.axios
          .put("http://cukcuk.manhnv.net/v1/employees/" + id, employee)
          .then((response) => {
            if (response) {
              this.$refs.tableContent.onEditSuccess(id, employee);
              this.$toast.show("success", "Sửa nhân viên thành công");
            }
          })
          .catch((error) => {
            console.log(error);
            this.$toast.show("warning", "Có lỗi xảy ra! Vui lòng liên hệ MISA");
          });
      } else {
        debugger
        this.axios
          .post("http://cukcuk.manhnv.net/v1/employees", employee)
          .then((response) => {
            if (response) {
              this.$toast.show("success", "Thêm nhân viên thành công");
              this.$refs.tableContent.onEditSuccess(id, employee);
            }
          })
          .catch((error) => {
            console.log(error);
            this.$toast.show("warning", "Có lỗi xảy ra! Vui lòng liên hệ MISA");
          });
      }
    },
  },
};
</script>
<style scoped>
/* .wapper {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  display: none;
  margin: auto;
}

.form-wapper {
  width: 100%;
  height: 100%;
  display: none;
} */

.menu-bar-small {
  --menu-bar-width: 52px;
}
.content {
  width: calc(100% - var(--menu-bar-width));
  /* width: 100%; */
  height: 100vh;
  position: relative;
  /* z-index: 2000000000; */
  /* background-color: #ffff; */
  /* left: 0; */
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

.page-active {
  background-color: #019160;
  color: #fff;
}

.page-active:hover {
  background-color: #2fbe8e !important;
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
}

.button {
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

.button-add {
  background-color: #019160;
}

.button-add:hover {
  background-color: #2fbe8e;
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

#toolBarEmployee {
  display: flex;
  width: auto;
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
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-image: url("../../assets/Icon/refresh.png");
  background-repeat: no-repeat;
  background-position: center;
}

.bo-delete {
  color: #fff;
  line-height: 40px;
  text-align: center;
  width: auto;
  height: 40px;
  background-color: rgb(212, 61, 61);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
}

.button-delete-text {
  margin-left: 8px;
  margin-right: 16px;
  width: auto;
  height: 100%;
}

.bo-delete:hover {
  cursor: pointer;
  background-color: rgb(177, 121, 121);
}

.bo-refresh:hover {
  background-color: rgb(240, 240, 240);
}

.notValidControl {
  border-color: red;
}

#input-name {
  width: 280px;
  height: 40px;
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
  height: 40px;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 0px 8px 0px;
  margin-right: 16px;
}

#input-location {
  width: 150px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 0px 8px 0px;
}

.bo-content {
  position: absolute;
  width: 100%;
  top: 55px;
  bottom: 45px;
  overflow: auto;
}

.bo-content-footer {
  position: absolute;
  width: 100%;
  bottom: 0px;
  height: 40px;
  display: flex;
  line-height: 40px;
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

.button-pagging:hover {
  background-color: #e9ebee;
  border-radius: 4px;
}

.content-pages .first-page {
  width: 40px;
  height: 40px;
  margin-right: 8px;
  background-image: url("../../assets/Icon/btn-firstpage.svg");
  background-position: center;
  background-repeat: no-repeat;
}

.content-pages .last-page {
  width: 40px;
  height: 40px;
  margin-left: 8px;
  background-image: url("../../assets/Icon/btn-lastpage.svg");
  background-repeat: no-repeat;
  background-position: center;
}

.content-pages .prev-page {
  width: 40px;
  height: 40px;
  margin-right: 8px;
  background-image: url("../../assets/Icon/btn-prev-page.svg");
  background-repeat: no-repeat;
  background-position: center;
}

.content-pages .next-page {
  width: 40px;
  height: 40px;
  margin-left: 8px;
  background-image: url("../../assets/Icon/btn-next-page.svg");
  background-repeat: no-repeat;
  background-position: center;
}

.content-pages .page-item {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #ccc;
  line-height: 40px;
  text-align: center;
  margin-left: 8px;
}

.page-item:hover {
  cursor: pointer;
  background-color: #e9ebee;
  color: #000;
}

table {
  width: 100%;
  border-collapse: collapse;
}

.selected-row {
  background-color: #81b1a1 !important;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
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

.fade {
  opacity: 0.2;
}
.container .m-cbo {
  width: 100%;
  height: 100%;
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
.container .m-cbo:active {
  border-color: #d2d2d2;
}
/* style cho cÃƒÆ’Ã‚Â¡c thÃƒÂ¡Ã‚ÂºÃ‚Â» anh em */
.container .m-cbo:hover ~ .h-line,
.container .m-cbo:focus ~ .h-line,
.container .m-cbo:active ~ .h-line {
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

.container .input-field {
  height: 38px;
  position: center;
}
.container .input-field .arrow {
  position: absolute;
  top: 0px;
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

.container .input-field .h-line {
  border-left: 1px #bbbbbb solid;
  position: absolute;
  top: 0px;
  right: 37px;
  bottom: 1px;
  width: 1px;
  height: 38px;
}
.container .input-field .arrow.down {
  transform: rotate(180deg);
}
.container .input-field .arrow:hover {
  background-color: #e9ebee;
}

/* item clear text */
.container .input-field .btn-clear {
  position: absolute;
  top: 15px;
  right: 17%;
  cursor: pointer;
  display: none;
}
.container .input-field .btn-clear:hover .far {
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

.container .drop-down .dr-item {
  /* width: 240px; */
  height: 40px;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.container .drop-down .dr-item:hover {
  background-color: #e9ebee;
}
.container .drop-down .dr-item.active {
  background-color: #019160;
  color: #ffffff;
}
.container .drop-down .dr-item .icon {
  padding: 12px 15px;
  color: transparent;
}
.container .drop-down .dr-item.active .icon {
  color: #ffffff;
}

.container .drop-down .dr-item .text {
  flex: 1;
}

input::placeholder {
  font-size: 11px !important;
  color: #bbbbbb;
}

</style>