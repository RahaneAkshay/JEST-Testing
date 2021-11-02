import {sum,TestCases} from '../app/util'


describe('demo test suite',()=>{
    test('first test case',()=>{
        expect(sum(4,3)).toBe(7)
    })
   
    test('test with toEqual',()=>{
        const result = TestCases.getObject('akshay',25)
        expect(result).toEqual({
            name:'akshay',
            age:25
        })
    })
})