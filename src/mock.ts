const names = ['name1', 'name2', 'name3', 'name4', 'name5', 'name6'];

const getRandom = (max: number) => Math.floor(Math.random() * max);

let defaultId = 0;
const CreateData = () => ({
    id: defaultId++,
    date: new Date(getRandom(5000000000000)).toLocaleDateString(),
    name: names[getRandom(names.length)],
    count: defaultId,
    distance: getRandom(1000)

});



export const mockData = new Array(51).fill(null).map(CreateData);