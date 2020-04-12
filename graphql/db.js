export const people =[
    {
        id: 0,
        name: "changhee",
        age: 18,
        gender: "female"
    },
    {
        id: 1,
        name: "sangeun",
        age: 22,
        gender: "female"
    },

    {
        id: 2,
        name: "dongwoo",
        age: 34,
        gender: "male"
    },

    {
        id: 3,
        name: "juyoung",
        age: 23,
        gender: "male"
    },

    {
        id: 4,
        name: "jungtae",
        age: 19,
        gender: "male"
    },
];

export const getById= id =>{
    const filteredPeople = people.filter(person => person.id === id)
    return filteredPeople[0];
}