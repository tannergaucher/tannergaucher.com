export default function formatDate(date) {
  const regEx = /-/gi
  return date.replace(regEx, '.')
}



