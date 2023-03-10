const loginForm = document.querySelector(".login-form");


async function handleLogin(evt) {
  evt.preventDefault();
  console.log("login pressed");
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();
  console.log(email)
  const userLogin = 
  {
    email,
    password
  }
  console.log(userLogin)
  const response = await fetch("/api/login", {
    body: JSON.stringify(userLogin),
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
  })
  if (response.ok) {
    console.log("working for now")
  } else {
    console.log("nah bruh");
  }
  loginForm.reset();
  document.location.replace('/')
}


loginForm.addEventListener("submit", handleLogin);
