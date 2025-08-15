function compareArrays(arr1, arr2) {
  return arr1.every((number, index) => ((arr1.length === arr2.length) && (number === arr2[index])))
}

function getUsersNamesInAgeRange(users, gender) {
  return users.filter(user => user.gender === gender).reduce((acc, item, index, array) => {
    acc += item.age;
    if (index === array.length - 1) {
        return acc / array.length
    } else {
        return acc
    }
  }, 0)
}