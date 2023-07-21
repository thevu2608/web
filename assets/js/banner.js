// Lưu nội dung ban đầu của chữ H1
const originalText = "Welcome to My Website";

// Function để xóa chữ sau cùng và viết lại
function typeEffect() {
  const typedText = document.getElementById("typed-text");
  const text = typedText.textContent;
  const length = text.length;

  // Kiểm tra xem chữ H1 đã viết xong hay chưa
  if (length > 0) {
    // Nếu chưa, xóa đi một ký tự cuối cùng
    typedText.textContent = text.substring(0, length - 1);
    // Gọi lại function sau 1000ms (1 giây)
    setTimeout(typeEffect, 100);
  } else {
    // Nếu đã viết xong, reset về chữ ban đầu và gọi lại function sau 1000ms
    typedText.textContent = originalText;
    setTimeout(typeEffect, 1000);
  }
}

// Gọi function để bắt đầu hiệu ứng xóa chữ sau cùng và viết lại
typeEffect();
