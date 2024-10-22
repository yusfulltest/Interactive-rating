const eachRating = document.querySelectorAll(".rating");
const submit = document.querySelector(".btn");
const mainPage = document.querySelector(".ratePage");
const confirmation = document.querySelector(".confirmPage");
let rateScore = document.querySelector(".rateScore");
let o = 1;
///////
let num = document.querySelectorAll(".num");
for (let i = 0; i < num.length; i++) {
  console.log((num[i].textContent = o++));
}

eachRating.forEach((rate) => {
  rate.addEventListener("click", function (e) {
    eachRating.forEach((rate) => {
      rate.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});

submit.addEventListener("click", function () {
  eachRating.forEach((rate) => {
    if (rate.classList.contains("active")) {
      mainPage.classList.add("hide");
      confirmation.classList.remove("hide");
      rateScore.textContent = `You selected ${rate.textContent} out of 5`;
    }
  });
});
