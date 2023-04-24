interface LukeSkywalker {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
}

// należy wskazać typ generyczny Promise ze wskazaniem co ten promise zwraca Promise<typ_zwracany_przez_promise>
export const fetchLukeSkywalker = async (): Promise<LukeSkywalker> => {
    const data = await fetch('https://swapi.dev/api/people/1').then((res) => {
        return res.json();
    });

    // można też otypować same dane zwracane z fetcha, które później są zwracane w funkcji
    const data1: LukeSkywalker = await fetch('https://swapi.dev/api/people/1').then((res) => {
        return res.json();
    });

    return data;
    // albo można wskazać typ zwracanej danej - rozwiązanie nie polecane
    // return data as LukeSkywalker;
};
