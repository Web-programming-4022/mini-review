// const all = document.querySelectorAll("")
const satart = document.querySelector("#startGame");
const result = document.querySelector("#result");

satart.addEventListener("click", (e) => {
  e.preventDefault();

  // value => {
  // let user= ""
  // }

  const rand = random(0, 2);
    

  switch (rand) {
    case 0:
      return "rock";
  }

  if (rand === 0 && user === "rock") result.innerText = "DRAW";
});
