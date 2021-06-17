<template>
    <div class="confirm-delete">
        <div class="form-confirm">
            <div class="form-header" @click="closeFormConfirm"></div>
            <div class="form-content">
                <div class="content-content">
                    <div class="content-header text-title-2">Xóa bản ghi</div>
                    <div class="content-body">
                        <div class="icon-warning"></div>
                        <div class="text-confirm">
                            Bạn có chắc muốn xóa bản ghi này hay không?
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-footer">
                <div class="btn-cancel" @click="closeFormConfirm">Hủy</div>
                <div class="btn-delete" @click="acceptDeleteEmployee">Xóa</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        closeFormConfirm() {
            this.$emit("closeFormConfirm")
        },
        acceptDeleteEmployee() {
            this.$emit("acceptDeleteEmployee")
        }
    }
}
</script>

<style scoped>
.confirm-delete {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* display: none; */
}

.form-confirm {
    position: absolute;
    width: 500px;
    height: 200px;
    background-color: #fff;
    box-shadow: #ccc 1px 0px 6px 3px;
    border-radius: 4px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}
    .form-confirm .form-header {
        width: 100%;
        height: 24px;
        background-image: url("../../assets/Icon/x.svg");
        background-repeat: no-repeat;
        background-position: right;
    }

    .form-confirm .content-body {
        position: absolute;
        width: 100%;
        top: 48px;
        bottom: 24px;
        display: flex;
    }

    .form-confirm .form-content {
        width: 100%;
        height: calc(100% - 84px);
        position: relative;
    }

    .form-confirm .form-footer {
        width: 100%;
        height: 60px;
        background-color: #f4f4f4;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

.content-content {
    position: absolute;
    top: 0px;
    left: 24px;
    right: 24px;
    bottom: 0px;
}

    .content-content .content-header {
        width: 100%;
        height: 24px;
        
    }

.icon-warning {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgb(235, 235, 235);
    background-image: url("../../assets/Icon/icon-warning.jpg");
    background-repeat: no-repeat;
    background-size: 26px;
    background-position: center;
}

.text-confirm {
    position: absolute;
    left: 46px; 
    right: 0px;
    height: 100%;
    display: flex;
    align-items: center;
}

.btn-delete {
    height: 40px;
    width: 80px;
    background-color: #f65454;
    border-radius: 4px;
    color: #fff;
    text-align: center;
    line-height: 40px;
    margin-right: 24px;
}

.btn-delete:hover {
    background-color: #fa7e7e;
    cursor: pointer;
}

.btn-cancel {
    height: 40px;
    width: 80px;
    background-color: #f4f4f4;
    border-radius: 4px;
    color: #000;
    text-align: center;
    line-height: 40px;
    margin-right: 16px;
}

.btn-cancel:hover {
    background-color: #e5e5e5;
    cursor: pointer;
}

</style>