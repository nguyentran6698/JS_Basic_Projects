function paginate(people) {
  const numberPerPage = 9;
  const numberOfFolowers = people.length;
  const numberOfPages = Math.ceil(numberOfFolowers / numberPerPage);
  // create an array of array
  const pagePeoples = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * numberPerPage;
    return people.slice(start, start + numberPerPage);
  });
  return pagePeoples;
}

export default paginate;
