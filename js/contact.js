function validateForm() {
  var email = document.getElementsByName("email")[0].value;
  var message = document.getElementsByName("message")[0].value;
  var number = document.getElementsByName("phone")[0].value;
  var errorMessage = "";

  if (email === "") {
    errorMessage += "Please enter email address. ";
  }
  if (number === "") {
    errorMessage += "Please enter phone. ";
  }

  if (message === "") {
    errorMessage += "Please enter message.";
  }

  if (errorMessage !== "") {
    document.getElementById("error-message").textContent = errorMessage;
    document.getElementById("success-message").textContent = ""; // Xóa thông báo thành công (nếu có)
    return false; // Ngăn form được gửi đi nếu có lỗi
  }

  // Nếu dữ liệu hợp lệ, bạn có thể thực hiện xử lý form ở đây (ví dụ: gửi dữ liệu form đến máy chủ).

  // Hiển thị thông báo thành công
  document.getElementById("success-message").textContent =
    "The form has been submitted successfully!";
  document.getElementById("error-message").textContent = ""; // Xóa thông báo lỗi (nếu có)

  return false; // Ngăn form được gửi đi (để thử nghiệm, bạn có thể thay đổi thành "true" để thực hiện gửi form).
}
