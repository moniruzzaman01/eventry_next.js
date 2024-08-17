export function replaceMongoIdInArray(array) {
  return array.map(({ _id, ...rest }) => {
    return {
      id: _id.toString(),
      ...rest,
    };
  });
}

export function replaceMongoIdInObject(obj) {
  const { _id, ...updatedObj } = { ...obj, id: obj._id.toString() };
  return updatedObj;
}
