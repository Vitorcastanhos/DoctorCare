// retirado a função do <body> para eliminar erro do console.log referente ao scroll da pagina
window.addEventListener("scroll", onScroll);
onScroll(); //ativando função scroll da pagina

function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();

  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(contact);
}

//function to get the position every time we scroll and change de menu position.
function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;
  //top section
  const sectionTop = section.offsetTop;
  //height section
  const sectionHeight = section.offsetHeight;
  //section has reached the targetline or passed
  const sectionTopReachedOrPassedTargetLine = targetLine >= sectionTop;

  const sectionEndsAt = sectionTop + sectionHeight;

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

  const sectionBoundaries =
    sectionTopReachedOrPassedTargetLine && !sectionEndPassedTargetLine;

  const sectionId = section.getAttribute("id");
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  menuElement.classList.remove("active");
  if (sectionBoundaries) {
    menuElement.classList.add("active");
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navElement.classList.add("scroll");
  } else {
    navElement.classList.remove("scroll");
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > window.innerHeight - 50) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

ScrollReveal({
  origin: "top",
  distance: "40px",
  duration: 900,
}).reveal(
  `#home, #home img, #home .stats, #services, #services header, #services .card, #about, #about header, #about .content`
);
