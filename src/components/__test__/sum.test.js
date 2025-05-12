import sum from "../sum"

test("Sum to 2 number",()=>{
    const result = sum(1,2);
    expect(result).toBe(3);

})