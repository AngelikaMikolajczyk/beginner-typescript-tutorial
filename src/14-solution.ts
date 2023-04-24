import { Equal, Expect } from './helpers/type-utils';

/**
 * Here, the id property is shared between all three
 * interfaces. Can you find a way to refactor this to
 * make it more DRY?
 */

// tworzymy typ obiektu który jest bazowy, z którego może dziedziczyć inny typ
interface Base {
    id: string;
}

// za pomocą słówka extends można dziedziczyć z innego typu
interface User extends Base {
    firstName: string;
    lastName: string;
}

//  tutaj też dziedziczymy z Base
interface Post extends Base {
    title: string;
    body: string;
}

// też dziedziczymy z Base
interface Comment extends Base {
    comment: string;
}

type tests = [
    Expect<Equal<User, { id: string; firstName: string; lastName: string }>>,
    Expect<Equal<Post, { id: string; title: string; body: string }>>,
    Expect<Equal<Comment, { id: string; comment: string }>>
];
