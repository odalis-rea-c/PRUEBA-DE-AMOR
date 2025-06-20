(function () {
   let form = document.getElementById("form");
   let fecha_aniversario = "2000-05-16"
   form.addEventListener("submit", function (e) {
      let fecha = document.getElementById("fecha").value
      e.preventDefault()
      if (fecha == "") {
         alert("Por favor ingrese la fecha")
      } else {
         if (fecha == fecha_aniversario) {
            location.href = "yes.html"
         } else {
            location.href = "no.html"
         }
      }

   })
}())