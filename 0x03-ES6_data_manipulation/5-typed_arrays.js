export default function createInt8TypeArray(length, position, value) {
  // create a new ArrayBuffer of lenght === parameter length
  const newArray = new ArrayBuffer(length);
  // We need a dataview to manipulate binary data
  const dataview = new DataView(newArray);
  // add the value at given position using the dataview bounded to our ArrayBuffer
  dataview.setInt8(position, value);
  return dataview;
}
