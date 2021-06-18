<template>
    <div>

    </div>
</template>
<script>
export default {
    methods: {
        validate() {
            var form = this.$refs.form;
            var listInput = form.getElementsByTagName("input");
            if(listInput && listInput.length > 0){
                listInput.forEach(input => {
                    var require = input.getAttribute("require");
                    if(require == "empty"){
                        if(input.value == null || input.value == ""){
                            input.parentElement.classList.add("error-empty");
                        }
                    }
                });
            }
        },

        // validateBlur() {
        //     debugger // eslint-disable-line
        //     var form = this.$refs.form;
        //     var listInput = form.getElementsByTagName("input");
        //     if(listInput && listInput.length > 0) {
        //         listInput.forEach(input => {
        //             var blur = input.getAttribute('isBlur');
        //             if(blur == "true") {
        //                 input.parentElement.classList.add("error-empty")
        //             }
        //         })
        //     }
        // }
    }
}
</script>
<style>
.error-empty::after{
    content: "Bạn cần nhập thông tin này";
    color: red;
}

.error-empty input{
    border: 1px solid red !important;
}
</style>