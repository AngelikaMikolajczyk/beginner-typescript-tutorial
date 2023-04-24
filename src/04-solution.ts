import { expect, it } from 'vitest';

export const getName = (first: string, last?: string) => {
    // trzeba sprawdzić czy dany parametr przyszedł
    if (last) {
        return `${first} ${last}`;
    }
    return first;
};

it('Should work with just the first name', () => {
    const name = getName('Matt');

    expect(name).toEqual('Matt');
});

it('Should work with the first and last name', () => {
    const name = getName('Matt', 'Pocock');

    expect(name).toEqual('Matt Pocock');
});
