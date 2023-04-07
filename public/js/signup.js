const signUpForm = document.querySelector(".signup-form");

async function handleSignUp(evt) {
  evt.preventDefault();
  console.log("sign up button pressed");

  const newUsername = document.querySelector("#username-signup").value.trim();
  const newEmail = document.querySelector("#email-signup").value.trim();
  const newPass = document.querySelector("#password-signup").value.trim();
  const newUser = {
    username: newUsername,
    email: newEmail,
    password: newPass,
  };

  const response = await fetch("/api/signup", {
    body: JSON.stringify(newUser),
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
  })
  if (response.ok) {
    console.log(response)
    console.log("working for now")
  } else {
    console.log("nah bruh");
  }
  signUpForm.reset();
  document.location.replace('/')
}
signUpForm.addEventListener("submit", handleSignUp);