"use strict";
const showButtons = document.querySelectorAll(".showModal");
const closeButton = document.querySelector(".closeModal");
const escOrOverlay = document.querySelector(".overlay");

const showModal = function () {
	document.querySelector(".modal").classList.remove("hidden");
	document.querySelector(".overlay").classList.remove("hidden");
};
const closeModal = function () {
	document.querySelector(".modal").classList.add("hidden");
	document.querySelector(".overlay").classList.add("hidden");
};

for (let i = 0; i < 3; i++) {
	showButtons[i].addEventListener("click", showModal);
}
closeButton.addEventListener("click", closeModal);
escOrOverlay.addEventListener("click", closeModal);
document.body.addEventListener("keydown", function (e) {
	if (e.key === "Escape") closeModal();
});

const Jonas = {
	yosh: 1991,
	ismi: "Jonas",
	familya: "Smedtman",
	ishi: function () {
		console.log(`hello ${this.ismi}`);
		const qale = function () {
			// console.log(`Hello ${this.familya}`);
		};

		qale();
	}
};

Jonas.ishi();
