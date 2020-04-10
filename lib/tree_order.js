function inOrderArray(root) {
  const newArray = [];
  if (root === null) return newArray;[]

  newArray.push(...inOrderArray(root.left));
  newArray.push(root.val);
  newArray.push(...inOrderArray(root.right));

  return newArray;
}

function postOrderArray(root) {
  // if the root is null, return an empty array

  // get the array for visiting the left node
  // get the array for visiting the right node

  // return the left array concatenated with the right array
  //   concatenated with the root value
  const newArray = [];
  if (root === null) return newArray;

  newArray.push(...postOrderArray(root.left));
  newArray.push(...postOrderArray(root.right));
  newArray.push(root.val); // ['']

  return newArray;
}


module.exports = {
  inOrderArray,
  postOrderArray
};
