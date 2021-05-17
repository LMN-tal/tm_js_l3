function updateObjectInArray<ObjectShape>(array: ObjectShape[], key: number, newKeyValue: ObjectShape): ObjectShape[] {
    let newArray: ObjectShape[] = array.map(el => Object.assign({},el));
    newArray[key] = newKeyValue;
    return newArray;
}