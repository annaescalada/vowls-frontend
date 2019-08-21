export const processError = (errorCode) => {
    let error = '';

    switch (errorCode) {
        case 421:
                error = 'Introduce un nombre de usuario para continuar.';
                break;   
        case 422:
                error = 'Introduce una contraseña para continuar.';
                break;  
        case 423:
                error = 'Introduce tu nombre para continuar.';
                break;   
        case 424:
                error = 'Introduce tu edad para continuar.';
                break;  
        case 425:
                error = 'Indica si eres hombre o mujer para continuar.';
                break;   
        case 426:
                error = 'Introduce tu peso en kg para continuar.';
                break;
        case 427:
                error = 'Introduce tu altura en cm para continuar.';
                break;
        case 428:
                error = 'Escoge un nivel de actividad física para continuar.';
                break;
        case 432:
                error = 'Introduce una nueva contraseña para continuar o haz click en cancelar.';
                break;
        case 404:
                error = 'No existe ningún usuario con este correo electrónico.';
                break;
        case 401:
                error = 'La contraseña es incorrecta.';
                break;
        case 402:
                error = 'Ya existe un usuario con este correo electrónico.';
                break;
        default:
            error = 'Ha habido un error, por favor inténtalo de nuevo más tarde.';
            break;
    }
    return error;  
}