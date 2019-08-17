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