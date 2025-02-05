
export const foodGroups = ['cereals', 'proteins', 'tubers', 'fruit', 'berries', 'cruciferous', 'greens', 'othervegs', 'omega', 'fat', 'dairy'];

export const foodGroupToIcon = (group => {
    const foodGroups = ['cereals', 'proteins', 'tubers', 'fruit', 'berries', 'cruciferous', 'greens', 'othervegs', 'omega', 'fat', 'dairy'];
    const foodGroupsIcons = ['./images/Food-icons/Cereals.png', './images/Food-icons/Protein.png', './images/Food-icons/Tubers.png', './images/Food-icons/Fruit.png', './images/Food-icons/Berries.png', './images/Food-icons/Cruciferous.png', './images/Food-icons/Greens.png', './images/Food-icons/Otherveg.png', './images/Food-icons/omega.png', './images/Food-icons/Fat.png', './images/Food-icons/Dairy.png'];
    return foodGroupsIcons[foodGroups.indexOf(group)];
});

export const foodGroupToName = (group => {
    const foodGroups = ['cereals', 'proteins', 'tubers', 'fruit', 'berries', 'cruciferous', 'greens', 'othervegs', 'omega', 'fat', 'dairy'];
    const foodGroupsTitles = ['Cereales integrales', 'Alimentos proteicos', 'Tubérculos', 'Fruta', 'Frutos rojos', 'Crucíferas', 'Hortalizas', 'Otras verduras', 'Omega 3', 'Grasas saludables', 'Lácteos vegetales'];
    return foodGroupsTitles[foodGroups.indexOf(group)]
});

export const portionConvert = ((group, portion) => {
    let result;
    switch (group) {
        case 'dairy':
        case 'fruit':
        case 'berries':
            result = 1;
            break;
        default:
            result = portion;
            break;
    }
    return result;
});