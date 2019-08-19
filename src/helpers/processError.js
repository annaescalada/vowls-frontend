export const processError = (errorCode) => {
    let error = '';
    switch (errorCode) {
        case 500:
            error = 'Ya existe un usuario con este correo electrónico.';
            break;
            case 401:
                    error = 'No existe ningún usuario con este correo electrónico.';
                    break;
                case 422:
                error = 'Introduce un nombre de usuario y una contraseña para continuar.';
                break;
                    case 423:
                    error = 'Asegúrate de haber rellenado todos los campos e inténtalo de nuevo.';
                    break;
                            case 424:
                                error = 'Introduce tu nueva contraseña.';
                                break;
        default:
            error = 'Ha habido un error, por favor inténtalo de nuevo.';
            break;
    }
    return error;  
}