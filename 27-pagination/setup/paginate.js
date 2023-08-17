const paginate = (followers) => {
  const itemsPerPage = 15;
  const numberofPages = Math.ceil(followers.length / itemsPerPage);

  const newFollowers = Array.from({ length: numberofPages }, (_, index) => {
    const start = index * itemsPerPage;

    return followers.slice(start, start + itemsPerPage);
  });
  return newFollowers;
};

export default paginate;
