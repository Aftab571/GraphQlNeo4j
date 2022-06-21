import {buildSchema} from 'graphql'

const schema = buildSchema(`
      type Employee {
          id: ID
          firstName: String
          secondName: String
          email:String
          designation: Desgn 
          skills: [TechSkills]
      }

      type TechSkills {
          skillName: String
          experience: Int
      }

      enum Desgn {
          TRAINEE
          ENGINEER
          MANAGER

      }

      type Query {
          getEmployee(id:ID): Employee
      }

      input EmployeeInput {
        id: ID
        firstName: String!
        secondName: String
        email:String!
        designation: Desgn! 
        skills: [TechSkillsInput]
      }

      input TechSkillsInput {
        skillName: String!
        experience: Int!
      }

      type Mutation {
          createEmployee(input:EmployeeInput ): Employee
      }

`)

export default schema;