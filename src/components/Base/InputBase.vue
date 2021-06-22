<template>
    <div class="base-input"
        :style="[{width: isNaN(width) ? width : width + 'px'}]"
    >
        <input 
            v-model="valueX"
            :type="type"
            :Require="require"
        />
    </div>
</template>
<script>
export default {
    props: {
        value: {
            Type: String,
            default: null
        },
        require: {
            Type: String,
            default: ""
        },
        type: {
            Type: String,
            default: "text"
        },
        width: {
            Type: [String,Number],
            default: "100%"
        }
    },
    data(){
        return {
            valueX: null
        }
    },
    watch: {
        value: {
            handler(val){
                this.valueX = val;
            },
            immediate: true
        },
        valueX: {
            handler(val){
                this.$emit("input",val);
            },
        }
    },
    methods: {

    }
}
</script>
<style>
.base-input{
    width: 100%;
    height: 40px;
}
.base-input input{
    width: 100%;
    height: 40px;
}
</style>