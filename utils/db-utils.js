export function replaceMongoIdInArray(array) {
  return array.map(({ _id, ...rest }) => {
    return {
      id: _id.toString(),
      ...rest,
    };
  });
}
