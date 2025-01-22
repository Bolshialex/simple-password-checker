document.getElementById("submitBtn").onclick = function () {
  let password = document.getElementById("password").value;
  if (password.length < 8) {
    document.getElementById("message").innerHTML =
      "This password is not long enough.";
  }
};
