function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

function sendEnquiry(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const cls = document.getElementById("className").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  const email = "wizardofmathematics68@gmail.com";

  const subject = encodeURIComponent(
    "Course Enquiry - Wizard Of Mathematics EDTech"
  );

  const body = encodeURIComponent(
    Student Name: ${name}\n +
    Class/Course: ${cls}\n +
    Mobile: ${phone}\n +
    Message: ${message}
  );

  window.location.href =
    mailto:${email}?subject=${subject}&body=${body};
}
