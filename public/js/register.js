const form = document.getElementById("register-form");
const messageEl = document.getElementById("message");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  setMessage(messageEl, "", "");

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  try {
    await apiRequest("/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    setMessage(messageEl, "Регистрация прошла успешно. Теперь войдите.", "success");
    form.reset();
    
    setTimeout(() => {
      window.location.href = "./login.html";
    }, 1500);
  } catch (error) {
    setMessage(messageEl, error.message, "error");
  }
});
