interface User {
    id: number;
    firstName: string;
    lastName: string;
    role: 'admin' | 'user' | 'super-admin';
    posts: Post[];
    //lub
    // posts: Array<Post>;
    // można na dwa sposoby oznaczyć tablicę, albo Typem generycznym => Array<czego_to_jest_tablica> albo za pomocą znaków tablicy => czego_to_jest_tablica[]
}

interface Post {
    id: number;
    title: string;
}

export const defaultUser: User = {
    id: 1,
    firstName: 'Matt',
    lastName: 'Pocock',
    role: 'admin',
    posts: [
        {
            id: 1,
            title: 'How I eat so much cheese',
        },
        {
            id: 2,
            title: "Why I don't eat more vegetables",
        },
    ],
};
