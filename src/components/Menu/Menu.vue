<template>
  <div class="menu-left">
    <div class="menu-header">
      <div class="icon-bar" @click="zoomoutMenuBar"></div>
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
  methods: {

    /**
     * Hàm khi click thu nhỏ và phóng to menu
     * MTDAI 18.06.2021
     */
    zoomoutMenuBar() {
      debugger //eslint-disable-line
      //Kiểm tra menu có đang thu nhỏ không
      var isExist = document.getElementsByClassName("menu-bar-small")
      if(isExist && isExist.length > 0) {
        debugger //eslint-disable-line
        isExist.forEach(index => {
          //Nếu thu nhỏ thì phóng to
          console.log(index)
          index.classList.remove("menu-bar-small")
          
        });

      }else {
        //Nếu không thu nhỏ thì mở rộng
        var menu = document.getElementsByClassName("menu-left")
        var content = document.getElementsByClassName("content")
        menu[0].classList.add("menu-bar-small")
        content[0].classList.add("menu-bar-small")
      }
    }
  }
};
</script>

<style scoped>
@import url("../../common.css");
.wrapper {
    width: 100%;
    height: 100vh;
    display: flex;
}
.menu-left {
    transition: 0.2s;
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