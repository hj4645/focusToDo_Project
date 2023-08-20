const images = ["0.jpg", "1.jpg", "2.jpg"];
const bgImage = Object.assign(document.createElement("img"), { id: "backImg" }); //Object.assign()으로 속성추가
const imageUpload = document.getElementById("image-upload");

// 랜덤 이미지 선택 및 설정된 배경 초기화
function setRandomBackground() {
    const chosenImages = images[Math.floor(Math.random() * images.length)];
    bgImage.src = `img/${chosenImages}`;
    document.body.appendChild(bgImage);
  }

// 업로드된 이미지를 배경으로 설정
function setBackgroundImageFromUpload(event) {
    const file = event.target.files[0];
    
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      
      reader.onload = function (e) {
        bgImage.src = e.target.result;
        document.body.appendChild(bgImage);
      };
      
      reader.readAsDataURL(file);
    }
  }

// 이미지 업로드 시 이벤트 처리
imageUpload.addEventListener("change", setBackgroundImageFromUpload);
// 초기에 랜덤 배경 설정
setRandomBackground();