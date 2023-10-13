document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector("form");
    const tablaEnvios = document.getElementById("tabla-envios");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        let nombre = document.querySelector('#nombre');
        let cedula = document.querySelector('#cedula');
        let celular = document.querySelector('#celular');
        let correo = document.querySelector('#correo');
        let direccion = document.querySelector('#direccion');
        let barrio = document.querySelector('#barrio');
        let ciudad = document.querySelector('#ciudad');
        let departamento = document.querySelector('#departamento');
    

        // Validaciones
        if (nombre.value.length === 0 ||
            cedula.value.length === 0 ||
            celular.value.length === 0 ||
            correo.value.length === 0 ||
            direccion.value.length === 0 ||
            barrio.value.length === 0 ||
            ciudad.value.length === 0 ||
            departamento.value.length === 0) {
            alert('Por favor, complete todos los campos.');
            return;
        }
        // const nombreCompletoRegex = /^[A-Za-z\s]+$/;
        // if (!nombreCompletoRegex.test(nombre.value)) {
        //     alert('El nombre completo debe contener solo letras y espacios. Por favor, verifique.');
        //     return;
        // }

        // if (isNaN(cedula.value)) {
        //     alert('La cédula solo debe contener números. verifique.');
        //     return;
        // }

        // if (isNaN(celular.value)) {
        //     alert('El número de teléfono solo debe contener números.  verifique.');
        //     return;
        // }

    
        // // Validación de correo electrónico
        // const correoRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        // if (!correoRegex.test(correo.value)) {
        //     alert('Por favor, ingrese una dirección de correo electrónico válida.');
        //     return;
        // }

        const nombreCompletoRegex = /^[A-Za-z\s]+$/;
        if (!nombreCompletoRegex.test(nombre.value.trim())) {
            alert('El nombre completo debe contener solo letras y espacios. Por favor, verifique.');
            return;
        }

        const cedulaRegex = /^\d+$/;
        if (!cedulaRegex.test(cedula.value.trim())) {
            alert('La cédula solo debe contener números. Por favor, verifique.');
            return;
        }

        const celularRegex = /^\d+$/;
        if (!celularRegex.test(celular.value.trim())) {
            alert('El número de teléfono solo debe contener números. Por favor, verifique.');
            return;
        }

        const correoRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        if (!correoRegex.test(correo.value.trim())) {
            alert('Por favor, ingrese una dirección de correo electrónico válida.');
            return;
        }

        // const direccionRegex = /^[A-Za-z0-9\s]+$/;
        // if (!direccionRegex.test(direccion.value)) {
        //     alert('La dirección debe contener letras, números y espacios. Por favor, verifique.');
        //     return;
        // }

        const barrioRegex = /^[A-Za-z\s]+$/;
        if (!barrioRegex.test(barrio.value.trim())) {
            alert('El barrio debe contener solo letras y espacios. Por favor, verifique.');
            return;
        }

        // const ciudadRegex = /^[A-Za-z\s]+$/;
        // if (!ciudadRegex.test(ciudad.value.trim())) {
        //     alert('La ciudad debe contener solo letras y espacios. Por favor, verifique.');
        //     return;
        // }

        // const departamentoRegex = /^[A-Za-z\s]+$/;
        // if (!departamentoRegex.test(departamento.value.trim())) {
        //     alert('El departamento debe contener solo letras y espacios. Por favor, verifique.');
        //     return;
        // }

        // Crear una nueva fila en la tabla con los datos del empleado
        const fila = document.createElement("tr");
        fila.innerHTML = `

        <td>${nombre.value}</td>
        <td>${cedula.value}</td>
        <td>${correo.value}</td>
        <td>${celular.value}</td>
        <td>${direccion.value}</td>
        <td>${barrio.value}</td>
        <td>${ciudad.value}</td>
        <td>${departamento.value}</td>
        `;

        // Agregar la fila a la tabla
        tablaEnvios.appendChild(fila);

        // Limpiar el formulario después de agregar un empleado
        formulario.reset();

        Swal.fire(
            'Los Datos se guardaron correctamente',
            '',
            'success'
        )
    });
});