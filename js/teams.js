var employees = JSON.parse(teamMembers);


for(var i=0; i<employees.length; i++)
{
    document.getElementById('employees').innerHTML += `
<h2>${employees[i].name}</h2>
<h3>${employees[i].email}</h3>
<img alt ="sorry was lazy" src="${employees[i].image}"</h3>
<br><br>
`
}
