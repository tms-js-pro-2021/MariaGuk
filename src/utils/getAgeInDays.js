
function getAgeInDays(year, month, day) {
    const date = new Date(year, (month - 1), day);
    const currentDate = new Date();
    const days = Math.round((currentDate - date) / 86400000);
    console.log(days);
}
// getAgeInDays();

function dateOfWrTest() {
    const dayOfCreateTest = '2021-07-08T00:00:00.000Z';
    const currentDate = Date.parse(new Date());
    const daysCount = (currentDate - Date.parse(dayOfCreateTest)) / 86400000;
    console.log(Math.round(daysCount));
}
dateOfWrTest();

export { getAgeInDays, dateOfWrTest };
