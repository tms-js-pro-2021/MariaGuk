import sum from './_.js';

describe('index', () => {
    it('adds1+2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    })
})
