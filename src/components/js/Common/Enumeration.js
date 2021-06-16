// Các enum dùng chung toàn chương trình
var Enumeration = Enumeration || {};

// Các mode của form detail
Enumeration.FormMode = {
    Add: 1,    // Thêm mới
    Edit: 2,   // Sửa
    Delete: 3  // Xóa
}

// Giới tính
Enumeration.Gender = {
    Female: 0, // Nữ
    Male: 1,   // Nam
    Other: 2   // Khác
}

// Tình trạng làm việc
Enumeration.WorkStatus = {
    Active: 0,
    UnActive: 1,
    Pending: 2,
}
export default Enumeration