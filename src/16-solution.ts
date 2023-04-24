import { Equal, Expect } from './helpers/type-utils';

interface User {
    id: string;
    firstName: string;
    lastName: string;
}

/**
 * How do we create a new object type with _only_ the
 * firstName and lastName properties of User?
 */

// pierwsze rozwiązanie - Omit - pozwala wbrać właściwiości z podanego typu do ominięcia/ignorowania, czyli Omit<typ_obiektu, typy do wyeliminowania po przecinku>
type MyType = Omit<User, 'id'>;

// drugie rozwiązanie - Pick - odwrotność, pozwala wybrać jakie właściwości ma brać z podanego typu obiektu, czyli Pick<typ_obiektu, typy do wybrania po przecinku>
type MyType1 = Pick<User, 'firstName' | 'lastName'>;

type tests = [Expect<Equal<MyType, { firstName: string; lastName: string }>>];
