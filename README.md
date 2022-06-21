# GraphQlNeo4j
Using graphQl with Neo4j sandbox 
checkout the Repo
run "npm install" to install all necessary packages
to start the app : run command . node app.js
Open http://localhost:3000/graphql to interact with graphql webide 

To Add an employee:

mutation {
  createEmployee(input: {firstName: "xxx", email: "xxx@outlook.com", designation: ENGINEER, skills: [{skillName: "Javascript", experience: 5}, {skillName: "JAVA", experience: 5}]}) {
    id
    firstName
  }
}


To Get an employee:

query {
  getEmployee(id:<ID from create>)
  {id 
  skills{experience skillName }
  
  }}
