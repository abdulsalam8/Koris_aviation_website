
function toggleText1() {
  var initialText = document.getElementById("initialText1");
  var additionalText = document.getElementById("additionalText1");
  var button = document.getElementById("toggleButton1");
  if (initialText.style.display !== "none") {
    initialText.style.display = "none";
    additionalText.style.display = "block";
    button.innerHTML = "Read Less <i class='bx bxs-up-arrow-alt'></i>";
  } else {
    initialText.style.display = "block";
    additionalText.style.display = "none";
    button.innerHTML = "Read More <i class='bx bxs-down-arrow-alt'></i>";
  }
}
function toggleText2() {
  var initialText = document.getElementById("initialText2");
  var additionalText = document.getElementById("additionalText2");
  var button = document.getElementById("toggleButton2");
  if (initialText.style.display !== "none") {
    initialText.style.display = "none";
    additionalText.style.display = "block";
    button.innerHTML = "Read Less <i class='bx bx-up-arrow-alt'></i>";
  } else {
    initialText.style.display = "block";
    additionalText.style.display = "none";
    button.innerHTML = "Read More <i class='bx bx-down-arrow-alt' ></i>";
  }
}
function toggleText3() {
  var initialText = document.getElementById("initialText3");
  var additionalText = document.getElementById("additionalText3");
  var button = document.getElementById("toggleButton3");
  if (initialText.style.display !== "none") {
    initialText.style.display = "none";
    additionalText.style.display = "block";
    button.innerHTML = "Read Less <i class='bx bxs-up-arrow-alt'></i>";
  } else {
    initialText.style.display = "block";
    additionalText.style.display = "none";
    button.innerHTML = "Read More <i class='bx bxs-down-arrow-alt'></i>";
  }
}
function toggleText4() {
  var initialText = document.getElementById("initialText4");
  var additionalText = document.getElementById("additionalText4");
  var button = document.getElementById("toggleButton4");
  if (initialText.style.display !== "none") {
    initialText.style.display = "none";
    additionalText.style.display = "block";
    button.innerHTML = "Read Less <i class='bx bxs-up-arrow-alt'></i>";
  } else {
    initialText.style.display = "block";
    additionalText.style.display = "none";
    button.innerHTML = "Read More <i class='bx bxs-down-arrow-alt'></i>";
  }
}
window.addEventListener("scroll", function () {
  //var for changing background color on-scroll
  const header = document.querySelector(".sticky-header");
  //var for changing text color on scroll
  const links = header.querySelectorAll("a");
  //var for changing menu color on scroll
  //var for menu selector
  let menu = document.querySelector("#menu-icon");
  let navmenu = document.querySelector("ul");

  menu.onclick = () => {
    // Toggle the "bx-menu" and "bx-x" classes on the menu icon
    menu.querySelector("i").classList.toggle("bx-menu");
    menu.querySelector("i").classList.toggle("bx-x");

    // Toggle the "open" class on the navigation menu
    navmenu.classList.toggle("open");
  };

  if (window.scrollY > 0) {
    header.style.backgroundColor = "#f1f1f1";
    header.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.1)";
    menu.style.color = "#222";
    links.forEach(function (link) {
      link.style.color = "var(--primary-color)";
    });
  } else {
    header.style.backgroundColor = "transparent";
    header.style.boxShadow = "none";
    menu.style.color = "";
    links.forEach(function (link) {
      link.style.color = "";
    });
  }
});
// function redirectToPage() {
// // Storing the scroll position in sessionStorage
// sessionStorage.setItem("scrollPosition", window.pageYOffset);
// }
// Store the current scroll position before redirecting

//document.addEventListener("click", function () {
  // Check if the current URL contains "#fleet"
  //if (window.location.href.includes("#fleet")) {
    // alert("cool");
    // Get the element by its ID
   // var yourElement = document.getElementById("fleet");

    // Add marginTop style
    // yourElement.style.marginTop = "10000px"; // Adjust the value as needed
 // }
//});

AOS.init();


