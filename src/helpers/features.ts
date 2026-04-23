function getFirstName(str: string) {
  return str.split(" ").at(0);
}
function getLastName(str: string) {
  return str.split(" ").at(1);
}

export { getFirstName, getLastName };
