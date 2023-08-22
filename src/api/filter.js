const fakeList = [
  {
    id: 1,
    name: 'JavaScript',
    salary: 10000,
  },
  {
    id: 2,
    name: 'React',
    salary: 12000,
  },
  {
    id: 3,
    name: 'Java',
    salary: 15000,
  },
];

export const getFilteredItems = params => {
  return Promise.resolve(fakeList);
};
