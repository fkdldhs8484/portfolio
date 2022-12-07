hljs.highlightAll();

// 탭 메뉴
const tabBtn = document.querySelectorAll("#card__btn > ul > li");
const tabCont = document.querySelectorAll("#tab-cont > div");

tabBtn.forEach((e, i) => {
  e.addEventListener("click", (event) => {
    event.preventDefault();

    tabBtn.forEach((e) => {
      e.classList.remove("active");
    });
    e.classList.add("active");

    tabCont.forEach((div) => {
      div.style.display = "none";
    });
    tabCont[i].style.display = "block";
  });
});
