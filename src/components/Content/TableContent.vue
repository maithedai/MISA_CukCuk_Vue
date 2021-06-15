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
        <tr v-for="(items, index) in employeeData" :key="index" >
          <td>{{ items.EmployeeCode }}</td>
          <td>{{ items.FullName }}</td>
          <td>{{ items.Gender }}</td>
          <td>{{ items.DateOfBirth }}</td>
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
     * hàm get data server
    */
    getData() {
      var me = this;
      this.axios.get('http://cukcuk.manhnv.net/v1/employees').then((response) => {
        console.log(response.data)
        me.employeeData = response.data
      })
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

table {
  width: 100%;
  border-collapse: collapse;
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
</style>