const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const logoutButton = document.querySelector("#logout-button");
const greeting = document.querySelector("#greeting");
const animationContainer = document.querySelector("#animation-container");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

//더블 클릭해서 이름 재입력 받게끔하기
function activateLoginForm() {
  greeting.classList.add(HIDDEN_CLASSNAME); 
  loginForm.classList.remove(HIDDEN_CLASSNAME); 
  loginInput.value = "";
  loginInput.focus(); 
}

function paintGreetings(username) {
  greeting.innerText = `Hello, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.removeEventListener("click", activateLoginForm);
  greeting.addEventListener("click", activateLoginForm);
  //logoutButton.style.display = "block";
  //showAnimationContainer();
}

/* 애니메이션 컨테이너 표시 함수
function showAnimationContainer() {
  animationContainer.classList.remove(HIDDEN_CLASSNAME);
}
*/

/* 로그아웃 처리 함수
function handleLogout() {
  localStorage.removeItem(USERNAME_KEY);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginInput.value = ""; // 입력값 초기화
  greeting.classList.add(HIDDEN_CLASSNAME);
  animationContainer.classList.add(HIDDEN_CLASSNAME);
  logoutButton.style.display = "none";
  loginInput.focus();
}

// 로그아웃 버튼 이벤트 핸들러 등록
logoutButton.addEventListener("click", handleLogout);
*/

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  //animationContainer.style.display = "none"; 
  //ogoutButton.style.display = "none"; 
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
  greeting.addEventListener("dblclick", activateLoginForm);
  loginForm.addEventListener("submit", onLoginSubmit);
  //animationContainer.style.display = "block"; 
  //logoutButton.style.display = "flex"; 
}
