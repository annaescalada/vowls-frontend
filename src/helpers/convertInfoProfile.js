export const convertActivity = (level) => {
    let activity;
    switch (level) {
      case 1.4:
      case '1.4':
        activity = 'Sedentario';
        break;
      case 1.6:
      case '1.6':
        activity = 'Leve';
        break;
      case 2:
      case '2':
        activity = 'Moderado';
        break;
      case 2.4:
      case '2.4':
        activity = 'Muy activo';
        break;
      default:
        activity = 'Sedentario';
        break;
    }
    return activity;
  }

  export const convertGender = (sex) => {
    let gender;
    switch (sex) {
      case 'male':
        gender = 'Hombre';
        break;
      case 'female':
        gender = 'Mujer';
        break;
      default:
        gender = 'Mujer';
        break;
    }
    return gender;
  }
