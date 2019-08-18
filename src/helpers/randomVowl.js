const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min) ) + min;
}

export const randomVowl = ((foods) => {
    const cerealArr = [];
    const proteinArr = [];
    const tuberArr = [];
    const cruciferousArr = [];
    const greensArr = [];
    const othervegsArr = [];
    const salsaArr = [];
    foods.forEach(food => {
        if (!food.categories.includes('breakfast')) {
            switch (food.group) {
                case 'cereals':
                    cerealArr.push(food);
                    break;
                    case 'proteins':
                        proteinArr.push(food);
                        break;
                        case 'tubers':
                            tuberArr.push(food);
                            break;
                            case 'cruciferous':
                                cruciferousArr.push(food);
                                break;
                                case 'greens':
                                    greensArr.push(food);
                                    break;
                                    case 'othervegs':
                                        othervegsArr.push(food);
                                        break;
                                        case 'salsa':
                                            salsaArr.push(food);
                                            break;
                                            default:
                                                break;
                                            }
                                        };   
                                    })
        const cereal = cerealArr[getRndInteger(0, cerealArr.length)]
        const protein = proteinArr[getRndInteger(0, proteinArr.length)]
        const tuber = tuberArr[getRndInteger(0, tuberArr.length)]
        const cruciferous = cruciferousArr[getRndInteger(0, cruciferousArr.length)]
        const greens = greensArr[getRndInteger(0, greensArr.length)]
        const othervegs = othervegsArr[getRndInteger(0, othervegsArr.length)]
        const salsa = salsaArr[getRndInteger(0, salsaArr.length)]
    return { cereal, protein, tuber, cruciferous, greens, othervegs, salsa };
});