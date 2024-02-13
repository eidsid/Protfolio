(function () {
  emailjs.init({
    publicKey: "ml6UIDe4x2C45xwkU",
  });
})();

async function sendMail(name, email, subject, message) {
  const params = {
    name,
    email,
    subject,
    message,
  };
  try {
    await emailjs
      .send("service_03ibwu9", "template_etndus6", params)
      .then(alert("your email sent success"));
  } catch (error) {}
}

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const Subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  if (!name || !email || !Subject || !message) {
    alert("Please fill out all fields.");
  } else if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
  } else {
    sendMail(name, email, Subject, message);
  }

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
});
