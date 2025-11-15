/*CAMBIO DE TABLAS*/
const itemsTablas = document.querySelectorAll(".item-tabla");
const imagenTabla = document.querySelector(".imagen-tabla");
const nombreTabla = document.querySelector(".nombre-tabla-desk");

const setCurrentTabla = (imagenSrc, nuevoNombre) => {
  imagenTabla.src = imagenSrc;
  nombreTabla.innerText = nuevoNombre;
};

itemsTablas.forEach((tabla) => {
  tabla.addEventListener("click", () => {
    setCurrentTabla(tabla.dataset.tabla, tabla.innerText);
  });
});

/*TOGGLE MENU MOBILE*/
const buttonMenuMobile = document.querySelector(".btn-nav-mobile");
const buttonCloseMenuMobile = document.querySelector(".btn-cerrar-modal");
const menuMobile = document.querySelector(".modal-nav-mobile");
const linksMenuMobile = document.querySelectorAll(".link-mobile");
const body = document.querySelector("body");

const toggleMenuMobile = (accion) => {
  if (accion === "abrir") {
    menuMobile.classList.add("modal-open");
    body.style.overflow = "hidden";
  } else {
    menuMobile.classList.remove("modal-open");
    body.style.overflow = "auto";
  }
};

linksMenuMobile.forEach((link) => {
  link.addEventListener("click", () => {
    toggleMenuMobile("cerrar");
  });
});

buttonMenuMobile.addEventListener("click", () => {
  toggleMenuMobile("abrir");
});

buttonCloseMenuMobile.addEventListener("click", () => {
  toggleMenuMobile("cerrar");
});
