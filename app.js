document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formRegistro");
    const tabla = document.getElementById("tablaUsuarios");

    // Registro de usuarios
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            const nombre = document.getElementById("nombre").value.trim();
            const email = document.getElementById("email").value.trim();

            if (nombre && email) {
                const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
                usuarios.push({ nombre, email });
                localStorage.setItem("usuarios", JSON.stringify(usuarios));
                alert("✅ Usuario registrado correctamente");
                form.reset();
            } else {
                alert("⚠️ Por favor completa todos los campos.");
            }
        });
    }

    // Mostrar usuarios
    if (tabla) {
        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        if (usuarios.length === 0) {
            const fila = document.createElement("tr");
            fila.innerHTML = `<td colspan="2">No hay usuarios registrados.</td>`;
            tabla.appendChild(fila);
        } else {
            usuarios.forEach(u => {
                const fila = document.createElement("tr");
                fila.innerHTML = `<td>${u.nombre}</td><td>${u.email}</td>`;
                tabla.appendChild(fila);
            });
        }
    }
});
