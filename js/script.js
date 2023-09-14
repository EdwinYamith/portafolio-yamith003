AOS.init();

// animacion de escritura
document.addEventListener("DOMContentLoaded", function () {
    const text = document.querySelector(".typing-animation span");
    const textContent = text.innerText;
    text.innerText = ""; // Borra el texto original para la animación
  
    function typeWriter(text, i) {
      if (i < textContent.length) {
        text.innerHTML += textContent.charAt(i);
        i++;
        setTimeout(function () {
          typeWriter(text, i);
        }, 100); // Controla la velocidad de escritura (ajusta según tus preferencias)
      }
    }
  
    // Inicia la animación de escritura
    typeWriter(text, 0);
  });
  




// boton de volver 
  document.addEventListener("DOMContentLoaded", function() {
    const goToTopButton = document.getElementById("goToTopButton");

    goToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Desplazamiento suave
        });
    });
});







