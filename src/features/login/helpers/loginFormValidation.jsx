import isEmail from "validator/lib/isEmail";

export const loginFormValidation = (loginData) => {
    const { correo, clave } = loginData;
    const inputCorreo = document.getElementById('correo');
    const inputClave = document.getElementById('clave');

    if (
        !isEmail(correo) ||
        clave.length < 6
    ) {
        !isEmail(correo) ? inputCorreo.classList.add('is-invalid') : inputCorreo.classList.remove('is-invalid');
        clave.length < 6 ? inputClave.classList.add('is-invalid') : inputClave.classList.remove('is-invalid');
        return false;
    }
    inputCorreo.classList.remove('is-invalid');
    inputClave.classList.remove('is-invalid');
    return true;

}