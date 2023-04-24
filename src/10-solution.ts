import { expect, it } from 'vitest';
import { Equal, Expect } from './helpers/type-utils';

// Set otypowuje się tak samo jak tablicę, czy Promise, czyli mamy skłądnię z <>, Set<typ_elementów_w_set>
const guitarists = new Set<string>();

guitarists.add('Jimi Hendrix');
guitarists.add('Eric Clapton');

it('Should contain Jimi and Eric', () => {
    expect(guitarists.has('Jimi Hendrix')).toEqual(true);
    expect(guitarists.has('Eric Clapton')).toEqual(true);
});

it('Should give a type error when you try to pass a non-string', () => {
    // @ts-expect-error
    guitarists.add(2);
});

it('Should be typed as an array of strings', () => {
    const guitaristsAsArray = Array.from(guitarists);

    type tests = [Expect<Equal<typeof guitaristsAsArray, string[]>>];
});
