const original = [
    {
        id: 'a',
        parent: 'root',
        type: 'folder'
    },
    {
        id: 'b',
        parent: 'a',
        type: 'folder'
    },
    {
        id: 'c',
        parent: 'a',
        type: 'folder'
    },
    {
        id: 'c_0',
        parent: 'b',
        type: 'folder'
    },
    {
        id: 'd',
        parent: 'c_0',
        type: 'folder'
    },
    {
        id: 'e',
        parent: 'c',
        type: 'folder'
    },
    {
        id: 'f_0',
        parent: 'a',
        type: 'file'
    },
    {
        id: 'f',
        parent: 'a',
        type: 'file'
    },
    {
        id: 'g',
        parent: 'f',
        type: 'file'
    },
    {
        id: 'h',
        parent: 'f_0',
        type: 'file'
    }
];

const createId = (currentId, index) => `${currentId}_${index}`;
let idMap = {};

const copy = original.map(location => {
    let index = 0;
    let copyId = createId(location.id, index);
    while (original.some(doc => doc.id === copyId)) {
        index++;
        copyId = createId(location.id, index);
    };
    idMap[location.id] = copyId;
    return { ...location, id: copyId };
}).map(location => ({ ...location, parent: idMap[location.parent] || 'root' }));
console.log([...original, ...copy]);