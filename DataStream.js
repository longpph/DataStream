/**
 * HỆ THỐNG PHÂN TÍCH DỮ LIỆU DATASTREAM - LEGACY CODE
 * Nhiệm vụ: Lấy email của khách VIP và tính tổng doanh thu từ họ.
 */

const rawUsers = [
    { id: 1, name: "Alice", role: "VIP", email: "alice@mail.com", totalSpent: 500 },
    { id: 2, name: "Bob", role: "MEMBER", email: "bob@mail.com", totalSpent: 120 },
    { id: 3, name: "Charlie", role: "VIP", email: "charlie@mail.com", totalSpent: 800 },
    { id: 4, name: "David", role: "GUEST", email: "david@mail.com", totalSpent: 50 }
];

// LỖI THIẾT KẾ: Khai báo nhiều biến tạm, sử dụng cấu trúc điều khiển mệnh lệnh dài dòng.
let vipEmails = [];
let totalVipRevenue = 0;

for (let i = 0; i < rawUsers.length; i++) {
    if (rawUsers[i].role === "VIP") {
        vipEmails.push(rawUsers[i].email);
        totalVipRevenue += rawUsers[i].totalSpent;
    }
}

console.log("Emails:", vipEmails);
console.log("Total Revenue:", totalVipRevenue);

// --- KHU VỰC THỰC HÀNH CỦA HỌC VIÊN ---
// NHIỆM VỤ: Hãy xóa bỏ hoàn toàn vòng lặp `for` và các biến `let` tạm thời ở trên.
// 1. Tạo hằng số `modernVipEmails` sử dụng kết hợp `.filter()` và `.map()`.
// 2. Tạo hằng số `modernTotalRevenue` sử dụng `.filter()` và `.reduce()`.