import { expect, it } from 'vitest';

// to jest najprostsze rozwiązanie
export const addTwoNumbers = (params: { first: number; second: number }) => {
    return params.first + params.second;
};

// lepiej zrobić osobny typ, niż pisać inline
type AddTwoNumbersArgs = {
    first: number;
    second: number;
};

// nie musi być to type, może to być też interface
// interface AddTwoNumbersArgs {
//   first: number;
//   second: number;
// }

export const addTwoNumbers1 = (params: AddTwoNumbersArgs) => {
    return params.first + params.second;
};

it('Should add the two numbers together', () => {
    expect(
        addTwoNumbers({
            first: 2,
            second: 4,
        })
    ).toEqual(6);

    expect(
        addTwoNumbers({
            first: 10,
            second: 20,
        })
    ).toEqual(30);
});
