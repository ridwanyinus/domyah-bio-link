const modalLinksOptions = document.getElementById("linkOptionsModal");
const modalPromotional = document.getElementById("promotionalModal");
const shareProfile = document.getElementById("shareProfileModal");

const ellipsisButtons = document.querySelectorAll(".bio-link__button-ellipsis");
const promotionalButton = document.getElementById("logo");
const shareProfileBtn = document.getElementById("share-profile");

const modalOverlays = document.querySelectorAll(".modal__overlay");
const closeBtns = document.querySelectorAll(".modal__close");

function openModal(modal) {
	modal.classList.add("modal--active");
	modal.setAttribute("aria-hidden", "false");
	document.body.style.overflow = "hidden";

	const closeBtn = modal.querySelector(".modal__close");
	if (closeBtn) closeBtn.focus();
}

function closeModal(e) {
	const modal = e.target.closest(".modal");
	if (modal) {
		modal.classList.remove("modal--active");
		modal.setAttribute("aria-hidden", "true");
		document.body.style.overflow = "";
	}
}

ellipsisButtons.forEach((button) => {
	button.addEventListener("click", () => openModal(modalLinksOptions));
});

promotionalButton.addEventListener("click", () => openModal(modalPromotional));
shareProfileBtn.addEventListener("click", () => openModal(shareProfile));

[...modalOverlays, ...closeBtns].forEach((el) =>
	el.addEventListener("click", closeModal),
);

document.addEventListener("keydown", (e) => {
	if (e.key === "Escape") {
		const activeModal = document.querySelector(".modal.modal--active");
		if (activeModal) {
			activeModal.classList.remove("modal--active");
			activeModal.setAttribute("aria-hidden", "true");
			document.body.style.overflow = "";
		}
	}
});
