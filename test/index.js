import isNum from '../src/index'
import add from '../src/add'
import max from '../src/max'

describe('index.js: ', () => {
    it('isNum() should work fine.', () => {
        expect(isNum(1)).toBe(true)
        expect(isNum('1')).toBe(false)
    })
    it('add() should work fine.', () => {
        expect(add(4)).toBe(5)
    })
    it('max() should work fine.', () => {
        expect(max(7, 1, 5, 8, 9, 14, 2, 0)).toBe(14)
    })
})