const form = document.getElementById("form");


// Manipulate show/hide password for multiple inputs

const toggleEyes = document.querySelectorAll(".toggle-show-btn");

toggleEyes.forEach((toggleEye) => {
  toggleEye.addEventListener("click", (e) => {
    toggleEye.previousElementSibling.type =
      toggleEye.previousElementSibling.type === "text" ? "password" : "text";
    toggleEye.classList.toggle("toggled");

    toggleEye.innerHTML = toggleEye.classList.value.includes("toggled")
      ? `<i class="fa fa-eye-slash"></i>`
      : `<i class="fa fa-eye"></i>`;

    e.preventDefault();
  });
});
