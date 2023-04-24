import { expect, it } from 'vitest';

const tryCatchDemo = (state: 'fail' | 'succeed') => {
    try {
        if (state === 'fail') {
            throw new Error('Failure!');
        }
        // najgorsze z możliwych rozwiązanie to otypować 'e' jako 'any'
    } catch (e: any) {
        return e.message;
        // lepszym pomysłem jest wskazanie że 'e' jest jako Error, Error to obiekt ale też typ dla obiektu błędu
        // return (e as Error).message;

        // najlepsze rozwiązanie to wskazanie że 'e' jest instancją konstruktora obiektu błędu Error
        // if (e instanceof Error) {
        //   return e.message;
        // }
    }
};

it('Should return the message when it fails', () => {
    expect(tryCatchDemo('fail')).toEqual('Failure!');
});
