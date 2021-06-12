<template>
  <div class="bo-content">
    <table>
      <thead>
        <tr>
          <th>Mã nhân viên</th>
          <th>Họ và tên</th>
          <th>Giới tính</th>
          <th>Ngày sinh</th>
          <th>Số điện thoại</th>
          <th>Email</th>
          <th>Địa chỉ</th>
          <th>Phòng ban</th>
          <th>Lương</th>
          <th>Tình trạng làm việc</th>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
export default {};
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