document.addEventListener("DOMContentLoaded", function () {
  const formData = JSON.parse(localStorage.getItem("blogPostData"));

  if (formData) {
    document.getElementById("featuredTitle").textContent =
      formData.featuredPost.title;
    document.getElementById("featuredContent").textContent =
      formData.featuredPost.content;
    document.getElementById("featuredDate").textContent =
      formData.featuredPost.date;

    document.getElementById("worldTitle").textContent =
      formData.worldCard.title;
    document.getElementById("worldContent").textContent =
      formData.worldCard.content;
    document.getElementById("worldDate").textContent = formData.worldCard.date;
    document.getElementById("worldThumbnail").src =
      formData.worldCard.thumbnail;

    document.getElementById("designTitle").textContent =
      formData.designCard.title;
    document.getElementById("designContent").textContent =
      formData.designCard.content;
    document.getElementById("designDate").textContent =
      formData.designCard.date;
    document.getElementById("designThumbnail").src =
      formData.designCard.thumbnail;
  }
});

// script.js
const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.querySelector("nav ul");

menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navMenu.classList.toggle("animate");
});

navMenu.addEventListener("transitionend", () => {
  navMenu.classList.remove("animate");
});
