<template>
    <div>

    </div>
</template>
<script>
export default {
    methods: {
        /**
         * Hàm kiểm tra các validate
         */
        validate() {
            var isPass = true
            if(!this.validateEmpty()) {
                isPass = false
            }
            if(!this.validateData()) {
                isPass = false
            }
            return isPass
        },
        /**
         * Hàm kiểm tra xem input require có trống hay không
         * MTDAI 17.06.2021
         */
        validateEmpty() {
            var isValidate = true
            var form = this.$refs.form;
            var listInput = form.getElementsByTagName("input");
            if(listInput && listInput.length > 0){
                listInput.forEach(input => {
                    var require = input.getAttribute("require");
                    if(require == "empty"){
                        if(input.value == null || input.value == ""){
                            input.parentElement.classList.add("error-empty");
                            isValidate = false
                        }
                    }else {
                        isValidate = this.validateData()
                    }
                });
            }
            return isValidate
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

        /**
         * Hàm tìm fieldname email để kiểm tra validate
         * MTDAI 18.06.2021
         */
        validateData() {
            var isPass = true
            var form = this.$refs.form;
            var listInput = form.getElementsByTagName("input");
            if(listInput && listInput.length > 0) {
                listInput.forEach(input => {
                    var email = input.getAttribute('FieldName');
                    if(email == "Email") {
                        isPass = this.validateEmail(input.value)
                        input.parentElement.classList.add("error-data");
                    }
                })
            }
            return isPass
        },

        /**
         * Hàm validate email 
         * MTDAI 18.06.2021
         */
        validateEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
    }
}
</script>
<style>

.error-data::after{
    /* content: "Định dạng Email không hợp lệ"; */
    color: red;
}

.error-data input{
    border: 1px solid red !important;
}

.error-empty::after{
    /* content: "Bạn cần nhập thông tin này"; */
    color: red;
}

.error-empty input{
    border: 1px solid red !important;
}
</style>