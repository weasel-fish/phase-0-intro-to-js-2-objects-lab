// Write your solution in this file!
const employee = {
    name : 'Norm',
    streetAddress : '123 Default Street'
}

function updateEmployeeWithKeyAndValue(obj, key, val) {
    return Object.assign({}, obj, {[key] : val});
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, val) {
    obj[key] = val;
    return obj;
}

function deleteFromEmployeeByKey(obj, key) {
    const newObj = {...obj};
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}