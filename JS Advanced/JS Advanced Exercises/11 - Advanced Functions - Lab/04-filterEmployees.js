function filterEmployees(data, criteria) {


  let info = JSON.parse(data)
  
  let [key, value] = criteria.split('-')
  let counter = 0
  for (const employee of info) {
    if (employee[key] === value) {
      console.log(`${counter}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
      counter++
    }
  }
}
filterEmployees(`[{ "id": "1", "first_name": "Kaylee", "last_name": "Johnson", "email": "k0@cnn.com", "gender": "Female" },
{ "id": "2", "first_name": "Kizzee", "last_name": "Johnson", "email": "kjost1@forbes.com", "gender": "Female" },
{ "id": "3", "first_name": "Evanne", "last_name": "Maldin", "email": "emaldin2@hostgator.com", "gender": "Male" },
{ "id": "4", "first_name": "Evanne", "last_name": "Maldina", "email": "ev2@hostgator.com", "gender": "Male" }]`,
    "last_name - Johnson")

// filterEmployees(`[{
//     "id": "1",
//     "first_name": "Ardine",
//     "last_name": "Bassam",
//     "email": "abassam0@cnn.com",
//     "gender": "Female"
//   }, {
//     "id": "2",
//     "first_name": "Kizzee",
//     "last_name": "Jost",
//     "email": "kjost1@forbes.com",
//     "gender": "Female"
//   },  
// {
//     "id": "3",
//     "first_name": "Evanne",
//     "last_name": "Maldin",
//     "email": "emaldin2@hostgator.com",
//     "gender": "Male"
//   }]`,
//   'gender-Female'
// )