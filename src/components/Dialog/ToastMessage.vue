<template>
    <div class="toast">
        <div class="icon-toast" :class="{'icon-error': isClass === 1, 'icon-warning': isClass === 2}"></div>
        <div class="content-toast"> {{ option.content }}</div>
        <div class="clear-toast"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            option: {
                isClass: 1,
                content: "Nội dung đi kèm tiêu đề"
            }
        }
        
    }  
}
</script>

<style scoped>
.toast {
    height: 48px;
    width: auto;
    border-radius: 4px;
    box-shadow: 0px 3px 6px #000000;
    /* opacity: 0.16; */
    display: flex;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
}

.icon-toast {
    width: 24px;
    height: 24px;
    background-color: crimson;
    margin-right: 8px;
}

.content-toast {
    height: 100%;
    width: auto;
    background-color: #e7cfcf;
    line-height: 48px;
    color: black;
}

.clear-toast {
    width: 24px;
    height: 24px;
    margin-left: 8px;
    background-color: aqua;
}

.icon-error {
    background-image: url('../../assets/Icon/error.png');
    background-repeat: no-repeat;
    background-position: center;
}
</style>