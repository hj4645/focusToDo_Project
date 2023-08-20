const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `${username}'s TO DO LIST`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.removeEventListener("click", activateLoginForm);
  greeting.addEventListener("click", activateLoginForm);
}


//더블 클릭해서 이름 재입력 받게끔하기
function activateLoginForm() {
  greeting.classList.add(HIDDEN_CLASSNAME); // 기존 인사 메시지 숨기기
  loginForm.classList.remove(HIDDEN_CLASSNAME); // 입력 폼 보이기
  loginInput.value = ""; // 입력값 초기화
  loginInput.focus(); // 입력 필드에 포커스 설정
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
  greeting.addEventListener("dblclick", activateLoginForm);
  loginForm.addEventListener("submit", onLoginSubmit);
}