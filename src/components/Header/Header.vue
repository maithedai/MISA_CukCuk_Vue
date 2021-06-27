<template>
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
</template>

<script>
export default {
    
}
</script>

<style scoped>

.content-header {
  width: calc(100% - 250px);
  height: 50px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(224, 224, 224);
  position: absolute;
  left: 250px;
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
</style>