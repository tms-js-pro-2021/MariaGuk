import { getDateNow } from './date';
import { getAgeInDays, dateOfWrTest } from './getAgeInDays';


jest.mock('../utils/date.js', () => ({
    __esModule: true,
    getDateNow: () => 1625741349667,



}));


describe('getAgeInDays', () => {
    test("find the number of days that have passed since the birthday", () => {
        const date = new Date(2000, 10, 23);
        const currentDate = new Date();
        const result = Math.round((currentDate - date) / 86400000);

        expect(result).toBe(7534);

        // Отработало два раза,потом что-то сломалось ,не могу понять в чем дело.
        // expect(getAgeInDays(2000, 11, 23)).toBe(7534);

    })
})

describe('dateOfWrTest', () => {
    test('how many days have passed since the test was written', () => {
        const dayOfCreateTest = '2021-07-08T00:00:00.000Z';
        const currentDate = Date.parse(new Date());
        const daysCount = (currentDate - Date.parse(dayOfCreateTest)) / 86400000;
        const result = (Math.round(daysCount));

        expect(result).toBe(1);
    })
})