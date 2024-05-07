const toggleNavbar = document.getElementById("toggleNavbar");
const navbarList = document.querySelector(".navbar");
const sendButton = document.getElementById("sendForm");
const imageHandler = document.querySelector("#imageUploader");
const imageHolder = document.querySelector("#imageHolder");
const nameValue = document.querySelector("#name");
const ageValue = document.querySelector("#age");

//^ --------------- click,style and innerText handling -------------- ^\\
toggleNavbar.addEventListener("click", (e) => {
  if (navbarList.style.display === "flex") {
    toggleNavbar.innerText = "نشون بده";
    navbarList.style.display = "none";
  } else {
    toggleNavbar.innerText = "مخفی کن";
    navbarList.style.display = "flex";
  }
});

//* ----------------- click and form handling ------------------ \\
sendButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (!nameValue.value || !ageValue.value) {
    return alert("تمامی فیلد ها باید پر شود");
  }

  alert(`نام شما : ${nameValue.value}`);
});

//----------------- sensitive to keyboard being pressed ---------------------
document.addEventListener("keydown", (e) => {
  const elementBuilder = document.querySelector(".elementBuilder");
  const tag = document.createElement("a");
  tag.innerText = `you pressed ${e.key}`;
  elementBuilder.appendChild(tag);

  if (e.key === "ArrowUp") return alert("you cliked the one you want !");
});

//* ------------- handling any changes in inputs ------------- *\\
imageHandler.addEventListener("change", (e) => {
  const imageUrl = URL.createObjectURL(e.target.files[0]);
  imageHolder.src = imageUrl;
});

//& ------------ get data from API and convert ---------------- &\\
async function getData() {
  await fetch("url")
    .then((res) => res.json())
    .catch((err) => console.error(err));
}

//! ------------ variables ------------ !\\
let a = "a";
a = "ab"; // This is right
const c = "c";
c = "d"; //! const is for constant data

// deprecated
var b = "b";
