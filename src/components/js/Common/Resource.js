// Resource dùng chung toàn chương trình
var Resource = Resource || {};

// Các kiểu dữ liệu của column trong grid
Resource.DataTypeColumn = {
    Number: "Number",
    Date: "Date",
    Enum: "Enum"
};

// Các method khi gọi ajax
Resource.Method = {
    Get: "Get",
    Post: "Post",
    Put: "Put",
    Delete: "Delete"
}

// giới tính
Resource.Gender = {
    Female: "Nữ",
    Male: "Nam",
    Other: "Khác"
}

//tình trạng công việc
Resource.WorkStatus = {
    Active: "Đang công tác",
    UnActive: "Đã nghỉ việc",
    Pending: "Đang nghỉ phép"
}

// Các commandType của toolbar
Resource.CommandType = {
    Add: "Add",
    Edit: "Edit",
    Delete: "Delete",
    Refresh: "Refresh",
    Import: "Import",
    Export: "Export"
}

// Các commandType của toolbar
Resource.CommandForm = {
    Save: "Save",
    Cancel: "Cancel",
    Confirm: "Confirm"
}

export default Resource