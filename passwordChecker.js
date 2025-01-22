document.getElementById("password").oninput = function () {

  let password = document.getElementById("password").value;
  let passwordCheck = true;
  const specChar = ['!','@','#','$','%','^','&','*','_']
  document.getElementById("message-success").innerHTML = " "
  document.getElementById("message-failed").innerHTML = " "
  if (password.length < 8) {
    appendPara("This password is not long enough.")
    passwordCheck = false
  }
  if (!specChar.some(char => password.includes(char))) {
    appendPara("The password must include at least one special character (e.g., !, @, #, $, %, ^, &, *).")
    passwordCheck = false
  }
  if(noSpaces(password)){
    appendPara("The password must not contain any spaces.")
    passwordCheck = false
  }
  if(!hasUpperCase(password)){
    appendPara("The password must contain an uppercase letter.")
    passwordCheck = false
  }
  if(!hasLowerCase(password)){
    appendPara("The password must contain a lowercase letter.")
    passwordCheck = false
  }
  if(!hasNumber(password)){
    appendPara("The password must include at least one numeric digit.")
    passwordCheck = false
  }
  if(passwordCheck){
    document.getElementById("message-failed").innerHTML = " "
    document.getElementById("message-success").innerHTML = "Password is valid"
  }
};


function hasUpperCase(password){
  for(i = 0; i < password.length; i++){
    if(password[i] >= 'A' && password[i] <= 'Z'){
      return true;
    }
  };
  return false;
}

function hasLowerCase(password){
  for(i = 0; i < password.length; i++){
    if(password[i] >= 'a' && password[i] <= 'z'){
      return true;
    }
  };
  return false;
}

function noSpaces(password){
  return password.includes(" ")
}

function hasNumber(password){
  for(i = 0; i < password.length; i++){
    if(password[i] >= 0 && password[i] <= 9){
      return true;
    }
  };
  return false;
}

function appendPara(words){
  const container = document.getElementById("message-failed")
  const para = document.createElement('p')
  para.innerText = words
  container.appendChild(para)
  
}