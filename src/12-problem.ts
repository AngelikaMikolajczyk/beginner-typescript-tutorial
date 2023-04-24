import { expect, it } from 'vitest';

// testy zgłaszają błędy, że zwracane są typy undefined, jak to naprawić?
const coerceAmount = (amount: number | { amount: number }) => {};

it('Should return the amount when passed an object', () => {
    expect(coerceAmount({ amount: 20 })).toEqual(20);
});

it('Should return the amount when passed a number', () => {
    expect(coerceAmount(20)).toEqual(20);
});
