<template>
  <div class="bo-content">
    <table>
      <thead>
        <tr>
          <th class="left-thead">Mã nhân viên</th>
          <th class="left-thead">Họ và tên</th>
          <th class="left-thead">Giới tính</th>
          <th>Ngày sinh</th>
          <th class="left-thead">Số điện thoại</th>
          <th class="left-thead">Email</th>
          <th class="left-thead">Chức vụ</th>
          <th class="left-thead">Phòng ban</th>
          <th class="right-thead">Mức lương cơ bản</th>
          <th class="left-thead">Tình trạng công việc</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(items, index) in employeeData" :key="index" 
          @click.exact="selectedRow(items, index)"
          @click.ctrl="multiSelect(items, index)" 
          @dblclick="selectedItem(items)" 
          :class="{'selected-row': selected(index)}">
          <td>{{ items.EmployeeCode }}</td>
          <td>{{ items.FullName }}</td>
          <td>{{ items.Gender }}</td>
          <td>{{ moment(items.DateOfBirth).format('DD/MM/YYYY') }}</td>
          <td>{{ items.PhoneNumber }}</td>
          <td>{{ items.Email }}</td>
          <td>{{ items.PositionId }}</td>
          <td>{{ items.DepartmentId }}</td>
          <td class="right-thead">{{ items.Salary }}</td>
          <td>{{ items.WorkStatus }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import employeeData from "../../js/EmployeeData.js"
import CommonFn from "../../js/Common/common.js"
export default {
  components: {
    
  },
  data() {
    return  {
      multiSelectArray: [],
      multiIndexArray: [],
      employeeData: employeeData,
      isSelected: false,
      isShowConfirm: false,
    }
  },

  created() {
    this.paggingEmployee(1);  
  },
  methods: {

    selected(index) {
      return this.multiIndexArray.includes(index);
    },

    /**
     * Hàm mở form confirm khi xóa nhân viên
     * MTDAI 13.06.2021
     */
    openFormConfirmDelete() {
      this.isShowConfirm = true
    },

    /**
    *Hàm khi double click bản ghi
    * MTDAI 13.06.2021
     */
    selectedItem(e) {
      this.$emit('showFormDetailEdit', e);
    },

    /**
     * Hàm khi 1 click để chọn
     * MTDAI 16.06.2021
     */
    selectedRow(e, index) {
      this.multiSelectArray = []
      this.multiIndexArray = []
      this.multiIndexArray = this.multiIndexArray.concat(index);
      this.multiSelectArray = this.multiSelectArray.concat(e.EmployeeId)
      this.isClassSelect(this.multiIndexArray),
      this.$emit('selectItem', this.multiSelectArray);
    },

    /**
     * Hàm crtl + click để chọn nhiều bản ghi
     * MTDAI 19.06.2021
     */
    multiSelect(e, index) {
      this.multiIndexArray = this.multiIndexArray.concat(index);
      this.multiSelectArray = this.multiSelectArray.concat(e.EmployeeId)
      // let employeeId = e.EmployeeId;
      this.isClassSelect(this.multiIndexArray),
      console.log(this.multiSelectArray)
      this.$emit('selectItem', this.multiSelectArray);
    },
 
    isClassSelect(multiIndexArray) {
      for (const index of multiIndexArray) {
        this.isSelected = index
      }    
    },
    /**
     * 
     */
    onDeleteSuccess(id){
      this.employeeData = this.employeeData.filter(x => x.EmployeeId != id);
    },

    /**
     * Hàm bỏ select các bản ghi
     */
    // removeSelect() {
    //   let a = document.querySelectorAll(".selected-row")
    //   console.log(a)
    //   a.classList.remove("selected-row")
    // },
    
    /**
     * hàm get data server
     * MTDAI 13.06.2021
    */
    getData() {
      var me = this;
      this.axios.get('http://cukcuk.manhnv.net/v1/employees').then((response) => {
        me.employeeData = response.data
        let employeeList = this.employeeData;
        for(let index in employeeList){
          employeeList[index].Gender = CommonFn.getDataFormat(employeeList[index].Gender, 'Enum', 'Gender');
          employeeList[index].DateOfBirth = CommonFn.getDataFormat(employeeList[index].DateOfBirth, 'Date','');
          employeeList[index].IdentityDate = CommonFn.getDataFormat(employeeList[index].IdentityDate, 'Date','');
          employeeList[index].JoinDate = CommonFn.getDataFormat(employeeList[index].JoinDate, 'Date','');
          employeeList[index].Salary = CommonFn.getDataFormat(employeeList[index].Salary, 'Money','');
          employeeList[index].WorkStatus = CommonFn.getDataFormat(employeeList[index].WorkStatus, 'Enum', 'WorkStatus');
        }
      });
    },

    /**
     * Hàm search Employee theo tên
     * MTDAI 18.06.2021
     */
    searchEmployee(name){
      let pageSize = '10',
          pageNumber = '1',
          fullName = "";
      var me = this
      fullName = name;
      if(fullName == "") {
        this.getData()
      }
      else {
        this.axios.get('http://cukcuk.manhnv.net/v1/Employees/Filter?pageSize=' + pageSize + '&pageNumber=' + pageNumber +'&fullName=' +fullName).then((response) => {
          me.employeeData = response.data.Data
          let employeeList = this.employeeData
          console.log(employeeList)
          for(let index in employeeList){
            employeeList[index].Gender = CommonFn.getDataFormat(employeeList[index].Gender, 'Enum', 'Gender');
            employeeList[index].DateOfBirth = CommonFn.getDataFormat(employeeList[index].DateOfBirth, 'Date','');
            employeeList[index].Salary = CommonFn.getDataFormat(employeeList[index].Salary, 'Money','');
            employeeList[index].WorkStatus = CommonFn.getDataFormat(employeeList[index].WorkStatus, 'Enum', 'WorkStatus');
          }
        })
      }
    },

    /**
     * Phân trang cho danh sách nhân viên
     * MTDAI 21.06.2021 
     */
    paggingEmployee(Number) {
      let pageSize = 2,
          pageNumber = Number-1;
      var me = this
      this.axios.get('http://cukcuk.manhnv.net/v1/Employees/employeeFilter/?pageSize='+ pageSize + '&pageNumber=' + pageNumber + '&employeeFilter=a' ).then((response) => {
        me.employeeData = response.data.Data
        this.$emit("getTotalPage", response.data.TotalPage, response.data.TotalRecord, pageSize)     
        let employeeList = this.employeeData;
        for(let index in employeeList){
          employeeList[index].Gender = CommonFn.getDataFormat(employeeList[index].Gender, 'Enum', 'Gender');
          employeeList[index].DateOfBirth = CommonFn.getDataFormat(employeeList[index].DateOfBirth, 'Date','');
          employeeList[index].IdentityDate = CommonFn.getDataFormat(employeeList[index].IdentityDate, 'Date','');
          employeeList[index].JoinDate = CommonFn.getDataFormat(employeeList[index].JoinDate, 'Date','');
          employeeList[index].Salary = CommonFn.getDataFormat(employeeList[index].Salary, 'Money','');
          employeeList[index].WorkStatus = CommonFn.getDataFormat(employeeList[index].WorkStatus, 'Enum', 'WorkStatus');
        }
      })
    },

    onEditSuccess(id, employee) {
      if(id) {
        this.employeeData = this.employeeData.filter(x => x.EmployeeId != id);
        this.employeeData.unshift(employee);
      }else {
        this.employeeData.unshift(employee);
      }
    }
  }
};
</script>
<style scoped>

.bo-content {
  position: absolute;
  width: 100%;
  top: 55px;
  bottom: 16px;
}

.left-thead {
  text-align: left;
}

.right-thead {
  text-align: right;
}

table {
  width: 100%;
  border-collapse: collapse;
}

tbody {
  overflow: auto;

}

.selected-row {
  background-color: #e3f3ee !important;
}

thead th {
    position: sticky;
    top: 0;
    background: #fff;
    color: #000;
    text-align: left;
}

tr {
  height: 48px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

::-webkit-scrollbar{
    width: px;
}

::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 10px;
}

td {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

tr:nth-child(even){background-color: #fafafa;}

tr:hover {
  background-color: rgb(245, 245, 245);
}

.d-flex {
  display: flex;
}

.align-right {
    text-align: right;
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
</style>