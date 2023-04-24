import { Equal, Expect } from './helpers/type-utils';

/**
 * How do we type onFocusChange?
 */

// należy nazwać przychodzący parametr funkcji  i po : podać jego typ następnie znak => oznaczający return,
// funkcja zwraca void, co onzacza właśnie, że nic nie zwraca, nie ma w sobie return, albo zwraca undefined
const addListener = (onFocusChange: (isFocused: boolean) => void) => {
    window.addEventListener('focus', () => {
        onFocusChange(true);
    });

    window.addEventListener('blur', () => {
        onFocusChange(false);
    });
};

// najlepiej jeszcze wyekstraktować osobny typ, żeby łatwiej czytać kod
type FocusListener = (isFocused: boolean) => void;

const addListener2 = (onFocusChange: FocusListener) => {
    window.addEventListener('focus', () => {
        onFocusChange(true);
    });

    window.addEventListener('blur', () => {
        onFocusChange(false);
    });
};

addListener((isFocused) => {
    console.log({ isFocused });

    type tests = [Expect<Equal<typeof isFocused, boolean>>];
});
