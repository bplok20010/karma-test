import isNum from '../src/index'
import add from '../src/add'

describe('index.js: ', () => {
    it('isNum() should work fine.', () => {
        expect(isNum(1)).toBe(true)
        expect(isNum('1')).toBe(false)
    })
    it('add() should work fine.', () => {
        expect(add(4)).toBe(5)
    })
})