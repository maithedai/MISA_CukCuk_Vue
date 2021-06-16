<template>
  <div class="bo-content">
    <table>
      <thead>
        <tr>
          <th v-for="(item, index) in header" :key="index">
            {{ item.text }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(items, index) in employeeData" :key="index" @dblclick="selectedItem(items)">
          <td>{{ items.EmployeeCode }}</td>
          <td>{{ items.FullName }}</td>
          <td>{{ items.Gender }}</td>
          <td>{{ moment(items.DateOfBirth).format('DD/MM/YYYY') }}</td>
          <td>{{ items.PhoneNumber }}</td>
          <td>{{ items.Email }}</td>
          <td>{{ items.PositionId }}</td>
          <td>{{ items.DepartmentId }}</td>
          <td>{{ items.Salary }}</td>
          <td>{{ items.WorkStatus }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import employeeData from "../js/EmployeeData.js"
import CommonFn from "../js/Common/common.js"
export default {
  data() {
    return  {
      employeeData: employeeData,
      header: [
          {text: "Mã nhân viên"},
          {text: "Họ tên"},
          {text: "Giới tính"},
          {text: "Ngày sinh"},
          {text: "Số điện thoại"},
          {text: "Email"},
          {text: "Chức vụ"},
          {text: "Phòng ban"},
          {text: "Mức lương cơ bản"},
          {text: "Tình trạng công việc"},
      ],
    }
  },

  created() {
      this.getData();  
  },
  methods: {
    /**
    *Hàm khi click bản ghi
    * MTDAI 13.06.2021
     */
    selectedItem(e) {
      let employeeId = e.EmployeeId;
      this.$emit('showFormDetailEdit', employeeId);
    },

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
          employeeList[index].Salary = CommonFn.getDataFormat(employeeList[index].Salary, 'Money','');
          employeeList[index].WorkStatus = CommonFn.getDataFormat(employeeList[index].WorkStatus, 'Enum', 'WorkStatus');
        }
      });
    },
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

table {
  width: 100%;
  border-collapse: collapse;
}

tbody {
  overflow: auto;
}

thead th {
    position: sticky;
    top: 0;
    background: #fff;
    color: #000;
}

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

tr:nth-child(even){background-color: #f2f2f2;}

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