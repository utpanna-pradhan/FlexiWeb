window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page-loaded");
});
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = document.querySelectorAll("#mobile-menu a");
const navbar = document.getElementById("navbar");

// toggle navbar while click on btn
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
 
// click on links and it will hide navbar
mobileLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

//Click outside navbar in mobile view then it will close
document.addEventListener("click", (e) => {
  const isMenuOpen = !mobileMenu.classList.contains("hidden");
  const clickedInsideMenu = mobileMenu.contains(e.target);
  const clickedMenuButton = menuBtn.contains(e.target);

  if (isMenuOpen && !clickedInsideMenu && !clickedMenuButton) {
    mobileMenu.classList.add("hidden");
  }
});

// Soft bg change while scroll in navbar
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("bg-slate-900", "shadow-lg");
    navbar.classList.remove("bg-slate-900/70");
  } else {
    navbar.classList.remove("bg-slate-900", "shadow-lg");
    navbar.classList.add("bg-slate-900/70");
  }
});



const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < windowHeight - 100) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // run on load



const navLinks = document.querySelectorAll("nav a");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
  const page = link.dataset.page;

  if (
    (page === "index" && (currentPage === "" || currentPage === "index.html")) ||
    currentPage === `${page}.html`
  ) {
    link.classList.add("text-blue-400", "font-medium");
  } else {
    link.classList.remove("text-blue-400", "font-medium");
  }
});



const pageLinks = document.querySelectorAll("a[href$='.html']");

pageLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = link.getAttribute("href");

    document.body.classList.remove("page-loaded");

    setTimeout(() => {
      window.location.href = target;
    }, 300);
  });
});





const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    // Inputs
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    // Errors
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const messageError = document.getElementById("message-error");
    const successMsg = document.getElementById("success-msg");

    // Reset
    nameError.classList.add("hidden");
    emailError.classList.add("hidden");
    messageError.classList.add("hidden");
    successMsg.classList.add("hidden");

    let isValid = true;

    if (name.value.trim() === "") {
      nameError.textContent = "Name is required";
      nameError.classList.remove("hidden");
      isValid = false;
    }

    if (!email.value.includes("@")) {
      emailError.textContent = "Enter a valid email";
      emailError.classList.remove("hidden");
      isValid = false;
    }

    if (message.value.trim().length < 10) {
      messageError.textContent = "Message must be at least 10 characters";
      messageError.classList.remove("hidden");
      isValid = false;
    }

   if (isValid) {
  const btn = document.getElementById("submit-btn");
  const btnText = document.getElementById("btn-text");
  const loader = document.getElementById("loader");

  btn.disabled = true;
  btn.classList.add("opacity-60", "cursor-not-allowed");

  btnText.classList.add("hidden");
  loader.classList.remove("hidden");

  setTimeout(() => {
    loader.classList.add("hidden");
    btnText.classList.remove("hidden");

    successMsg.classList.remove("hidden");
    btn.disabled = false;
    btn.classList.remove("opacity-60", "cursor-not-allowed");

    form.reset();
  }, 1500);
}
  });
}
