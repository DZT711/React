function formateDate(date) {
    return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
}
export default function GetDate() {
    const today = new Date();
    return (
        <div>
            <p>Today is {formateDate(today)}</p>
        </div>
    );
}
// Dưới đây là giải thích chi tiết cho từng phần:

// new Intl.DateTimeFormat(...): Tạo ra một đối tượng dùng để định dạng ngày giờ theo các tiêu chuẩn quốc tế.

// 'en-US': Chỉ định ngôn ngữ và vùng miền là tiếng Anh - Mỹ (English - United States).

// { weekday: 'long' }: Đây là tùy chọn định dạng. Nó báo cho chương trình biết rằng bạn chỉ muốn lấy thông tin về "thứ" trong tuần (weekday), và muốn hiển thị nó ở dạng từ đầy đủ ('long'), ví dụ: hiển thị "Tuesday" thay vì viết tắt là "Tue".

// .format(date): Hàm này nhận vào một biến date (là một đối tượng thời gian) và tiến hành định dạng nó theo các thiết lập ở trên để trả về chuỗi văn bản kết quả.