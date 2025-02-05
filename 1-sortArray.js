/*
There is an array, each item has such format:
{firstName: 'xxx', lastName: 'xxx', customerID: 'xxx', note: 'xxx', profession: ‘xxx’}
lastName, note can be empty, customerID can only be a set of digital numbers.
profession can only have ‘student’, ‘freelancer’, ‘productOwner’, ‘engineer’ or
‘systemAnalytics’.
*/

/*
Q1. Please follow the principle (‘firstName’ + ‘lastName’ + ‘customerID’) to sort this
array and print it out.
*/
function sortUserName(user) {
  // 排序
  const sortedUsers = user.sort((a, b) => {
    const aStr = `${a.firstName}${a.lastName || ''}${a.customerID}` 
    const bStr = `${b.firstName}${b.lastName || ''}${b.customerID}`
    return aStr.localeCompare(bStr)
  })
  console.log('依(firstName+lastName+customerId)排序後陣列', sortedUsers)
}

/*
Q2. Please sort by ‘profession’ to follow the principle.
(‘systemAnalytics’ > ‘engineer’ > ‘productOwner’ > ‘freelancer’ > ‘student’)
*/
function sortByType(user) {
  const professionOrder = {
    systemAnalytics: 5,
    engineer: 4,
    productOwner: 3,
    freelancer: 2,
    student: 1,
  }
  const userSortedByProfession = user.sort((a, b) => professionOrder[b.profession] - professionOrder[a.profession])
  console.log('依profession排序後陣列', userSortedByProfession)
}

const customers = [
  { firstName: 'John', lastName: 'Doe', customerID: '123', note: '', profession: 'engineer' },
  { firstName: 'Jane', lastName: '', customerID: '234', note: 'VIP', profession: 'student' },
  { firstName: 'Alice', lastName: 'Smith', customerID: '111', note: '', profession: 'freelancer' },
  { firstName: 'Bob', lastName: 'Brown', customerID: '45', note: 'New', profession: 'productOwner' }
];

sortUserName(customers)
sortByType(customers)