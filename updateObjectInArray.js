function updateObjectInArray(array, key, newKeyValue) {
    let newArray = array.map(el => Object.assign({}, el));
    newArray[key] = newKeyValue;
    return newArray;
}
