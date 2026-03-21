
// Cambiar idioma
const langSwitch = document.getElementById("langSwitch");
langSwitch.addEventListener("click", () => {
  if(langSwitch.textContent === "ES/EN") {
    langSwitch.textContent = "EN/ES";
    document.querySelector(".subtitle").textContent = "Software/Web Development";
  } else {
    langSwitch.textContent = "ES/EN";
    document.querySelector(".subtitle").textContent = "Desarrollo de Software/Web";
  }
});

// Copiar número de cuenta
document.querySelectorAll(".copiar").forEach(btn => {
  btn.addEventListener("click", () => {
    const numero = btn.previousElementSibling.textContent;
    navigator.clipboard.writeText(numero);
    alert("Número copiado: " + numero);
  });
});

// Guardar contacto vCard
document.getElementById("btnGuardar").addEventListener("click", () => {
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Celes Domínguez
TEL;TYPE=CELL:6648123071
EMAIL:celestinod13@gmail.com
END:VCARD`;
  const blob = new Blob([vcard], { type: "text/vcard" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "celes-dominguez.vcf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

// Compartir tarjeta
document.getElementById("compartirPortada").addEventListener("click", async () => {
  if(navigator.share) {
    await navigator.share({ title:"Tarjeta Digital Celes", text:"Te comparto mi contacto", url:window.location.href });
  } else alert("Compartir no soportado en este navegador.");
});

// Barra lateral navegación
const accionesBancos = document.getElementById("accionesBancos");

document.querySelectorAll('.sidebar a').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const target = btn.dataset.section;

    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));

    if(target === "documentos"){
      loginDocs.style.display = "flex";
      accionesBancos.style.display = "none";
    } else {
      document.getElementById(target).classList.add('active');

      // 👇 AQUÍ CONTROLAMOS LOS BOTONES
      if(target === "bancos"){
        accionesBancos.style.display = "block"; // mostrar
      } else {
        accionesBancos.style.display = "none"; // ocultar
      }
    }

    // Ocultar iconos perfil
    const icons = document.querySelectorAll('.contact-icons');
    if(target === "perfil") icons.forEach(ic => ic.style.display="flex");
    else icons.forEach(ic => ic.style.display="none");
  });
});

// Botón invitación WhatsApp
document.getElementById("inviteBtn").addEventListener("click", () => {
  const mensaje = encodeURIComponent("Quiero que generes mi tarjeta digital");
  window.open(`https://wa.me/526648123071?text=${mensaje}`, "_blank");
});

// Variables documentos
const loginDocs = document.querySelector("#loginDocs");
const btnEntrar = document.querySelector("#btnEntrar");
const passwordInput = document.querySelector("#passwordDocs");
const documentos = document.querySelector("#documentos");

// Validar contraseña
btnEntrar.addEventListener("click", () => {
  const password = passwordInput.value;

  if(password === "mari123") {
    loginDocs.style.display = "none";

    // 👇 MOSTRAR DOCUMENTOS BIEN
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    documentos.classList.add("active");

    passwordInput.value = "";
  } else {
    alert("Contraseña incorrecta");
  }
});
//compartir cuentas
document.getElementById("compartirBancos").addEventListener("click", async () => {

  const texto = `
Mis cuentas:

Santander: 5579100482166897
Mercado Pago: 1234567890123456
`;

  if(navigator.share){
    await navigator.share({
      title: "Mis cuentas",
      text: texto
    });
  } else {
    alert("No se puede compartir aquí");
  }

});
//ver targeta completa
document.getElementById("verTarjeta").addEventListener("click", () => {
  window.location.href = window.location.href;
});