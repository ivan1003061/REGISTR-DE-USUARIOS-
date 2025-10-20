document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formRegistro");
    const tabla = document.getElementById("tablaUsuarios");

    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            const nombre = document.getElementById("nombre").value;
            const email = document.getElementById("email").value;

            if (nombre && email) {
                const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
                usuarios.push({ nombre, email });
                localStorage.setItem("usuarios", JSON.stringify(usuarios));
                alert("Usuario registrado correctamente");
                form.reset();
            }
        });
    }

    if (tabla) {
        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        usuarios.forEach(u => {
            const fila = document.createElement("tr");
            fila.innerHTML = `<td>${u.nombre}</td><td>${u.email}</td>`;
            tabla.appendChild(fila);
        });
    }
});
