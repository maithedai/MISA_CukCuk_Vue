// Các hàm dùng chung toàn chương trình
var CommonFn = CommonFn || {};

// Hàm format số tiền
CommonFn.formatMoney = money => {
    if(money && !isNaN(money)){
        return money.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1.");
    }else{
        return money;
    }
}

// Format ngày tháng
// CommonFn.formatDate = dateSrc => {
//     let date = new Date(dateSrc),
//         year = date.getFullYear().toString(),
//         month = (date.getMonth() + 1).toString().padStart(2, '0'),
//         day = date.getDate().toString().padStart(2, '0');

//     return `${day}/${month}/${year}`;
// }

// Kiểm tra xem có phải dạng date không
CommonFn.isDateFormat = (date) => {
    let regex = new RegExp("([0-9]{4}[-](0[1-9]|1[0-2])[-]([0-2]{1}[0-9]{1}|3[0-1]{1})|([0-2]{1}[0-9]{1}|3[0-1]{1})[-](0[1-9]|1[0-2])[-][0-9]{4})");
    
    return regex.test(date);
}

// Format ngày tháng
CommonFn.convertDate = dateSrc => {
    let date = new Date(dateSrc),
        year = date.getFullYear().toString(),
        month = (date.getMonth() + 1).toString().padStart(2, '0'),
        day = date.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
}

// Lấy giá trị của một enum
CommonFn.getValueEnum = (data, enumName) => {
   let enumeration = Enumeration[enumName],
       resource = Resource[enumName];

    for(var propName in enumeration){
        if(enumeration[propName] == data){
            data = resource[propName];
        }
    }

    return data;
}

// Hàm ajax gọi lên server lấy dữ liệu
// CommonFn.Ajax = (url, method, data, fnCallBack, async = true) => {
//     $.ajax({
//         url: url,
//         method: method,
//         async: async,
//         data: JSON.stringify(data),
//         headers: {
//             "Content-Type": "application/json"
//         },
//         crossDomain: true,
//         contentType: "application/json;charset=utf-8",
//         dataType: "json",
//         success: function (response) {
//             fnCallBack(response);
//         },
//         error: function (errormessage) {
//             console.log(errormessage.responseText);
//         }
//     })
// }

CommonFn.getDataFormat = (data, dataType, enumName) => {
    switch(dataType){
        case "Enum":
            data = CommonFn.getValueEnum(data, enumName);
            break
        case "Number":
            data = parseInt(data);
            break;
        case "Date":
            data = CommonFn.convertDate(data);
            break;
        case "Money":
            data = CommonFn.formatMoney(data);
            break;  
    }
    return data;
}

import Resource from "../Common/Resource.js"
import Enumeration from "../Common/Enumeration.js"
export default CommonFn