function check() {
    //1.获取用户名
    var username = document.getElementById("username").value;
    var Phone = /^1[3578][0-9]{9}$/;
    var Mail = /^([a-zA-Z0-9_-]){1,}@([a-zA-Z0-9_-]){1,}(.[a-zA-Z0-9_-]){1,}$/;
    //2.获取密码
    var password = document.getElementById("password").value;
    var regpassword = /^[0-9,a-z]{8,18}$/;
    //2.2.获取重复输入密码
    var password2 = document.getElementById("password2").value;
    //3.验证格式正确性
    if (Phone.test(username) || Mail.test(username)) {
        document.getElementById("usernameHint").innerHTML = "<img src='Resource/对.png' height='15px'><font color='green'>用户名可用</font>";
    } else {
        document.getElementById("usernameHint").innerHTML = "<img src='Resource/错.png' height='15px'><font color='red'>用户名不可用</font>";
    }

    if (regpassword.test(password)) {
        document.getElementById("passwordHint").innerHTML = "<img src='Resource/对.png' height='15px'><font color='green'>密码可用</font>";
    } else {
        document.getElementById("passwordHint").innerHTML = "<img src='Resource/错.png' height='15px'><font color='red'>密码不符合格式</font>";
    }

    if (password2 !="" && password2==password) {
        document.getElementById("password2Hint").innerHTML = "<img src='Resource/对.png' height='15px'><font color='green'>密码相同</font>";
    } else {
        document.getElementById("password2Hint").innerHTML = "<img src='Resource/错.png' height='15px'><font color='red'>两次密码不同</font>";
    }
}