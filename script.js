// Função para exibir mensagens
function showMessage(message, type = "error") {
  let msgDiv = document.createElement("div");
  msgDiv.textContent = message;
  msgDiv.style.position = "fixed";
  msgDiv.style.top = "20px";
  msgDiv.style.left = "50%";
  msgDiv.style.transform = "translateX(-50%)";
  msgDiv.style.padding = "12px 20px";
  msgDiv.style.backgroundColor = type === "error" ? "#ff4d4d" : "#4CAF50";
  msgDiv.style.color = "#fff";
  msgDiv.style.borderRadius = "8px";
  msgDiv.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
  msgDiv.style.zIndex = "9999";
  msgDiv.style.fontSize = "14px";
  document.body.appendChild(msgDiv);

  setTimeout(() => { msgDiv.remove(); }, 2500);
}


// =========================================================
// CADASTRO (register.html)
// =========================================================
function registerUser() {
  const user = document.getElementById("newUser")?.value.trim();
  const pass = document.getElementById("newPass")?.value.trim();
  const phone = document.getElementById("newPhone")?.value.trim();

  if (!user || !pass || !phone) {
    showMessage("Preencha todos os campos!");
    return;
  }

  // Salvar no LocalStorage
  localStorage.setItem("vast_user", user);
  localStorage.setItem("vast_pass", pass);
  localStorage.setItem("vast_phone", phone);

  showMessage("Conta criada com sucesso!", "success");

  setTimeout(() => {
    window.location.href = "login.html";
  }, 1500);
}



// =========================================================
// LOGIN (login.html)
// =========================================================
function login() {
  const phone = document.getElementById("phone")?.value.trim();
  const pass = document.getElementById("pass")?.value.trim();

  const savedPhone = localStorage.getItem("vast_phone");
  const savedPass = localStorage.getItem("vast_pass");

  if (phone === savedPhone && pass === savedPass) {
    showMessage("Login realizado com sucesso!", "success");

    setTimeout(() => {
      window.location.href = "https://sites.google.com/view/vastbitloud";
    }, 1000);

  } else {
    showMessage("Telefone ou senha incorretos!");
  }
}
