
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form"); // Chọn form
    const Klogin_errorMessage = document.getElementById("Klogin_error-message");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Lấy giá trị email và mật khẩu từ form
        const email = document.getElementById("floatingInput").value;
        const password = document.getElementById("floatingPassword").value;

        // Kiểm tra điều kiện đăng nhập (đây là ví dụ đơn giản, bạn nên sử dụng hệ thống xác thực thực tế)
        if (email === "example@example.com" && password === "password") {
            // Đăng nhập thành công, có thể chuyển hướng hoặc thực hiện các tác vụ khác ở đây
            alert("Đăng nhập thành công!");
        } else {
            // Hiển thị thông báo lỗi
            Klogin_errorMessage.innerHTML = `
            <div class="Klogin_error-message" id="Klogin_error-message" style=" display:flex; align-items: center;">
    <svg style="width: 20px; height: 20px; margin-right: 10px;" aria-hidden="true" focusable="false" viewBox="0 0 13 13">
        <circle cx="6.5" cy="6.50049" r="5.5" stroke="white" stroke-width="2"></circle>
        <circle cx="6.5" cy="6.5" r="5.5" fill="#EB001B" stroke="#EB001B" stroke-width="0.7"></circle>
        <path d="M5.87413 3.52832L5.97439 7.57216H7.02713L7.12739 3.52832H5.87413ZM6.50076 9.66091C6.88091 9.66091 7.18169 9.37267 7.18169 9.00504C7.18169 8.63742 6.88091 8.34917 6.50076 8.34917C6.12061 8.34917 5.81982 8.63742 5.81982 9.00504C5.81982 9.37267 6.12061 9.66091 6.50076 9.66091Z" fill="white"></path>
        <path d="M5.87413 3.17832H5.51535L5.52424 3.537L5.6245 7.58083L5.63296 7.92216H5.97439H7.02713H7.36856L7.37702 7.58083L7.47728 3.537L7.48617 3.17832H7.12739H5.87413ZM6.50076 10.0109C7.06121 10.0109 7.5317 9.57872 7.5317 9.00504C7.5317 8.43137 7.06121 7.99918 6.50076 7.99918C5.94031 7.99918 5.46982 8.43137 5.46982 9.00504C5.46982 9.57872 5.94031 10.0109 6.50076 10.0109Z" fill="white" stroke="#EB001B" stroke-width="0.7">
        </path>
    </svg>
    <h3 style="color: white;padding-top: 15px;">
        Please adjust the following:
    </h3>
</div>
<p style="
    text-align: left;
    padding-left: 50px;
    line-height: 2px;
">Incorrect email or password.</p>
    
`;
        }
    });
});