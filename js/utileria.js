/**
 * Valida que un correo tenga formato correcto.
 * @param {string} correo - Correo electrónico a validar.
 * @returns {boolean} true si el correo es válido, false si no.
 */
function validarCorreo(correo) {
    const expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresion.test(correo);
}

/**
 * Valida que un texto contenga solo letras, espacios, ñ y vocales acentuadas.
 * @param {string} texto - Texto a validar.
 * @returns {boolean} true si solo contiene letras, false si no.
 */
function soloLetras(texto) {
    const expresion = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    return expresion.test(texto);
}

/**
 * Valida que un número no exceda una longitud máxima.
 * @param {string|number} numero - Número a validar.
 * @param {number} maxLongitud - Longitud máxima permitida.
 * @returns {boolean} true si cumple con la longitud, false si no.
 */
function validarLongitud(numero, maxLongitud) {
    const texto = String(numero).trim();
    return /^\d+$/.test(texto) && texto.length <= maxLongitud;
}

/**
 * Calcula la edad de una persona a partir de su fecha de nacimiento.
 * @param {string} fechaNacimiento - Fecha en formato YYYY-MM-DD.
 * @returns {number} Edad calculada.
 */
function calcularEdad(fechaNacimiento) {
    const nacimiento = new Date(fechaNacimiento);
    const hoy = new Date();

    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }

    return edad;
}

/**
 * Valida si una persona es mayor de edad.
 * @param {string} fechaNacimiento - Fecha en formato YYYY-MM-DD.
 * @returns {boolean} true si es mayor de edad, false si no.
 */
function esMayorDeEdad(fechaNacimiento) {
    return calcularEdad(fechaNacimiento) >= 18;
}

/**
 * Valida que una contraseña sea segura.
 * Requiere mayúscula, minúscula, número, carácter especial y mínimo 8 caracteres.
 * @param {string} password - Contraseña a validar.
 * @returns {boolean} true si la contraseña es segura, false si no.
 */
function validarPassword(password) {
    const expresion = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return expresion.test(password);
}

/**
 * Convierte un texto a formato título.
 * Ejemplo: "juan perez" se convierte en "Juan Perez".
 * @param {string} texto - Texto a convertir.
 * @returns {string} Texto convertido.
 */
function convertirTitulo(texto) {
    return texto
        .toLowerCase()
        .split(" ")
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
        .join(" ");
}

/**
 * Limpia espacios innecesarios de un texto.
 * @param {string} texto - Texto a limpiar.
 * @returns {string} Texto sin espacios extras.
 */
function limpiarEspacios(texto) {
    return texto.trim().replace(/\s+/g, " ");
}