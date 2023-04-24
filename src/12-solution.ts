import { expect, it } from 'vitest';

const coerceAmount = (amount: number | { amount: number }) => {
    // należy sprawdzić jakiego typu jest parametr który został podany do funkcji (za pomocą słowa kluczowego typeof)
    // zależnie co zostało dane to trzeba zwrócić odpowiednią wartość
    if (typeof amount === 'number') {
        return amount;
    }
    return amount.amount;
};

it('Should return the amount when passed an object', () => {
    expect(coerceAmount({ amount: 20 })).toEqual(20);
});

it('Should return the amount when passed a number', () => {
    expect(coerceAmount(20)).toEqual(20);
});
