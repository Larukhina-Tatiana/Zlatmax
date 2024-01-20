(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

// (() => {
//   const open = {
//     openModalBtnComments: document.querySelector("[data-modal-open-btn]"),
//     closeModalBtnComments: document.querySelector("[data-modal-close-btn]"),
//     modal: document.querySelector("[data-modal-comments]"),
//   };

//   open.openModalBtnComments.addEventListener("click", toggleModal1);
//   open.closeModalBtnComments.addEventListener("click", toggleModal1);

//   function toggleModal1() {
//     open.modal.classList.toggle("is-hidden");
//   }
// })();
