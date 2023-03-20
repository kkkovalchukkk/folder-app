const popupWindowUploadFile = document.querySelector("#upload-popup");
const popupWindowDownloadFile = document.querySelector("#download-popup");
const popupWindowUpdate = document.querySelector("#update-popup");
const popupWindowDelete = document.querySelector("#delete-popup");

const popupWindowCloseBtns = document.querySelectorAll(".popup__close-btn");
const popupWindowCancelBtns = document.querySelectorAll(".popup__cancel-btn");

const popupWindowUploadFileConfirmBtn = popupWindowUploadFile.querySelector(".popup__confirm-btn");

const uploadFileBtn = document.querySelector(".content-menu-btn-file");
const downloadFileBtns = document.querySelectorAll(".file-item-menu__download-btn");
const deleteFileBtns = document.querySelectorAll(".file-item-menu__delete-btn");

function closePopupWindow(popupSelector) {
  popupSelector.classList.add("popup-window--hidden");
}
function openPopupWindow(popupSelector) {
  popupSelector.classList.remove("popup-window--hidden");
  window.addEventListener("click", (e) => {
    closePopupWindowClick(e, popupSelector);
  });
  window.addEventListener("keydown", (e) => {
    closePopupWindowByEsc(e, popupSelector);
  });
}
function closePopupWindowClick(e, popupWindow) {
  if (e.target == popupWindow) {
    closePopupWindow(popupWindow);
  }
}
function closePopupWindowByEsc(e, popupWindow) {
  if (e.key === "Escape") {
    closePopupWindow(popupWindow);
  }
}

uploadFileBtn.addEventListener("click", (e) => {
  openPopupWindow(popupWindowUploadFile);
});

popupWindowCloseBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    closePopupWindow(e.target.closest(".popup-window"));
  });
});

downloadFileBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    openPopupWindow(popupWindowDownloadFile);
  });
});

popupWindowUploadFileConfirmBtn.addEventListener("click", () => {
  closePopupWindow(popupWindowUploadFile);
  openPopupWindow(popupWindowUpdate);
});

popupWindowCancelBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    closePopupWindow(e.target.closest(".popup-window"));
  });
});

deleteFileBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    openPopupWindow(popupWindowDelete);
  });
});
