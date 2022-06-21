import {nanoid} from 'nanoid'

class Employee {
    constructor(id,{
        firstName,secondName,email,designation,skills
    }){
        this.id=id
        this.firstName= firstName
        this.secondName= secondName
        this.email = email
        this.designation= designation
        this.skills= skills
    }
}

const employeeData={}


const resolvers = {
    getEmployee: ({id}) => {
        return new Employee(id, employeeData[id])
    },

    createEmployee: ({input})=> {
        let id = nanoid();
        employeeData[id]= input;
       
        return new Employee(id,input);

    }
}

export default resolvers;
