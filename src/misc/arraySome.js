const FIELD_MAPPING_DATA = [
  {
    fieldId: 1,
    viewName: [1, 2]
  },
  {
    fieldId: 2,
    viewName: [3, 4]
  },
  {
    fieldId: 3,
    viewName: [5, 6]
  },
]

function fieldMapper(viewName) {
  
  let matchItem = FIELD_MAPPING_DATA.find(val => val.viewName.some(item => item === viewName));

  if (matchItem) {
    return matchItem.fieldId
  } else {
    return undefined;
  }
}

console.log(fieldMapper(3));