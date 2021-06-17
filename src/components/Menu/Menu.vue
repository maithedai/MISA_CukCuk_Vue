<template>
  <div class="menu-left">
    <div class="menu-header">
      <div class="icon-bar"></div>
      <div class="logo"></div>
    </div>
    <div class="menu-body">
      <div class="menu-item">
        <div class="menu-item-icon icon-board"></div>
        <div class="menu-item-text">Tổng quan</div>
      </div>
      <div class="menu-item">
        <div class="menu-item-icon icon-report"></div>
        <div class="menu-item-text">Báo cáo</div>
      </div>
      <div class="menu-item">
        <div class="menu-item-icon icon-buy"></div>
        <div class="menu-item-text">Mua hàng</div>
      </div>
      <router-link class="menu-item" to="/employees">
        <div class="menu-item-icon icon-employee"></div>
        <div class="menu-item-text">Danh mục nhân viên</div>
      </router-link>
      <div class="menu-item">
        <div class="menu-item-icon icon-setting"></div>
        <div class="menu-item-text">Thiết lập hệ thống</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Menu",
};
</script>

<style scoped>
.menu-bar-small {
    --menu-bar-width: 52px;
}
.wrapper {
    width: 100%;
    height: 100vh;
    display: flex;
}
.menu-left {
    width: var(--menu-bar-width);
    height: 100vh;
    border-right: 1px solid #ccc;
    overflow: hidden;
}

.content {
    width: calc(100% - var(--menu-bar-width));
    height: 100vh;
    position: relative;
}

.menu-left .menu-header {
    width: 100%;
    height: 50px;
}

.menu-header .icon-bar {
    float: left;
    width: 52px;
    height: 100%;
    background-image: url("../../assets/Icon/toggle.png");
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: center;
}

.menu-header .icon-bar:hover{
    background-color: rgb(243, 243, 243);
}

.menu-header .logo {
    float: left;
    width: calc(100% - 52px);
    height: 100%;
    background-image: url("../../assets/Icon/cukcuk-logo.png");
    background-repeat: no-repeat;
    background-position: left;
    background-size: 150px;
}

.menu-item {
    display: flex;
    width: 100%;
    height: 44px;
    cursor: pointer;
    text-decoration: none;
    color: #000;
}

.menu-item:focus {
    background-color: #019160;
}

.menu-item:hover {
    background-color: #e5e5e5;
}

    .menu-item .menu-item-icon {
        width: 52px;
        height: 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 25px;
    }

    .menu-item .menu-item-text {
        width: calc(100% - 52px);
        height: 100%;
        line-height: 44px;
    }

.icon-board {
    background-image: url("../../assets/Icon/dashboard.png");
}

.icon-report {
    background-image: url("../../assets/Icon/report.png");
}

.icon-buy {
    background-image: url("../../assets/Icon/dashboard.png");
}

.icon-employee {
    background-image: url("../../assets/Icon/dic-employee.png");
}

.icon-setting {
    background-image: url("../../assets/Icon/setting.png");
}
</style>