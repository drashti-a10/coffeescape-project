const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const readMoreBtn = document.getElementById("read-more-btn");
  const moreText = document.querySelector(".more-text");
menuOpenButton.addEventListener("click", () =>{
    document.body.classList.toggle("show-mobile-menu");
});


menuCloseButton.addEventListener("click", () => menuOpenButton.click());

readMoreBtn.addEventListener("click", () => {
    if (moreText.style.display === "inline") {
      moreText.style.display = "none";
      readMoreBtn.textContent = "Read More";
    } else {
      moreText.style.display = "inline";
      readMoreBtn.textContent = "Read Less";
    }
  });




 

