import { expect, it } from 'vitest';

interface Cache {
    [id: string]: string;
}

const createCache = () => {
    // Rcord to taki specjalny typ, który reprezentuje parę klucz-wartość, oddzielone przecinkami, pierwszy typ to typ dla klucza, a drugi typ to typ dla wartośc
    const cache: Record<string, string> = {};

    // albo mozna łatwiej, zastosować znak klucza [] i w nim jaki typ tego klucza (to może być zmienna id, index, czy key, obojętne)
    // po tym kluczu po : podajemy typ wartości dla tego klucza
    const cache1: {
        [id: string]: string;
    } = {};

    // warto sobie ten typ wynieść do typu nie inline
    const cache2: Cache = {};

    // jesli TS zgłasza błąd z index-em to prawie jest to pewne że jest błąd związany z obiektem

    const add = (id: string, value: string) => {
        cache[id] = value;
    };

    const remove = (id: string) => {
        delete cache[id];
    };

    return {
        cache,
        add,
        remove,
    };
};

it('Should add values to the cache', () => {
    const cache = createCache();

    cache.add('123', 'Matt');

    expect(cache.cache['123']).toEqual('Matt');
});

it('Should remove values from the cache', () => {
    const cache = createCache();

    cache.add('123', 'Matt');
    cache.remove('123');

    expect(cache.cache['123']).toEqual(undefined);
});
