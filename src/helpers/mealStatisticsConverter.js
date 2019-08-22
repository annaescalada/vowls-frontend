export const mealStatisticsConverter = (meals => {
    let mealsData = [];
    for (let i = meals.length - 7; i < meals.length; i++) {
        if (meals[i]) {
            const category = formatDate(meals[i].date);
            const data = meals[i].score;
            mealsData.push({category, data})
        } else {
            mealsData.push({category: '', data: 0})
        }
    }
    console.log(mealsData);
    return mealsData;
 })

export const formatDate = (date => {
    const newDate = new Date (date)
    return `${newDate.getDate()}/${newDate.getMonth()}`
});