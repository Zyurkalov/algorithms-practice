const arr = [
    {id:1, parent: []},
    {id:2, parent: [1]},
    {id:3, parent: [2]},
]

const findParents = (searchId, arr) => {
    const child = arr.find((elem) => elem.id === searchId)
    if (!child) return {}
    return child.parent.length ? findParents(child.parent[0], arr) : child;
}