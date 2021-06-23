<template>
    <div class="toast">
        <div class="icon-toast" :style="[{'background-image': 'url(' + option.Image + ')'}]"></div>
        <div class="content-toast"> {{ option.Content }}</div>
        <div class="clear-toast" :style="[{'background-image': 'url(' + option.IconClear + ')'}]"></div>
    </div>
</template>

<script>
export default {
    props: {
        option: {
            Type: Object,
            default: null,
        }
    },
    data() {
        return {
        } 
    }  
}
</script>

<style scoped>
.toast {
    position: absolute;
    bottom: 60px;
    right: 0px;
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
    /* background-color: crimson; */
    margin-right: 8px;
    border-radius: 50px;
}

.content-toast {
    height: 100%;
    width: auto;
    line-height: 48px;
    color: black;
    font-size: 13px;
}

.clear-toast {
    width: 24px;
    height: 24px;
    margin-left: 8px;
}

.icon-error {
    background-image: url('../../assets/Icon/error.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 24px;
}
</style>