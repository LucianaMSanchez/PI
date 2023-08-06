
const validation = (userData) => {
let errores = {};
const regexE= new RegExp(/\S+@\S+\.\S+/);
const regexP = new RegExp(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])/);

if (!userData.name) {
    errores.name= "Ingresa un Nombre";
}

if (!userData.email) {
    errores.email= "Ingresa un email";
}

if (!regexE.test(userData.email)) {
    errores.email = "Email inválido";
}

if (userData.email.length > 35) {
    errores.email = "El email debe contener menos de 35 caracteres";
}

if (!regexP.test(userData.password)) {
    errores.password= "Debe contener al menos una minúscula, una mayúscula y un número.";
}

if (userData.password.length < 6 || userData.password.length > 10) {
    errores.password= "La contraseña debe tener de 6 a 10 caracteres";
}


return errores;
};

export default validation;