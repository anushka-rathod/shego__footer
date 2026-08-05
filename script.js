document.getElementById("year").textContent = new Date().getFullYear();


// Social media links
const socialLinks = {
  Facebook: "https://www.facebook.com/",
  Instagram: "https://www.instagram.com/",
  WhatsApp: "https://wa.me/918989494417",
  LinkedIn: "https://www.linkedin.com/"
};


// Update social links
const socialElements = document.querySelectorAll(".social-link");

socialElements.forEach((element) => {

  const name = element.getAttribute("aria-label");

  if (socialLinks[name]) {
    element.href = socialLinks[name];
  }

});