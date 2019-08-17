export const updateInfo = ((age, gender, weight, height, activity) => {
    // Cálculo IMC
    const IMC = ((weight / (height * height)) * 10000).toFixed(2);

    // Cálculo GED
    let GED = 0;
    if (gender === 'female') {
      GED = (((10 * weight) + (6.25 * height) - (5 * age) - 161) * activity).toFixed(0)
    } else {
      GED =( ((10 * weight) + (6.25 * height) - (5 * age) + 5) * activity).toFixed(0);
    }

    // Cálculo portion
    let portion = 1;
    if (GED >= 2100 && GED < 3000) {
        portion = 2;
    } else if (GED >= 3000) {
        portion = 3;
    }

    return {IMC, GED, portion};
});