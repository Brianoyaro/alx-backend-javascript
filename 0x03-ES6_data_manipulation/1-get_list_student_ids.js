export default function getListStudentIds(obj) {
  if (Array.isArray(obj)) {
    return obj.map((val) => val.id);
  }
  return [];
}
