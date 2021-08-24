// Write your solution in this file!
const employee = {}
employee.name = 'Oluwayemisi Soremekun'
employee.streetAddress = '10532 Court Ave'

function updateEmployeeWithKeyAndValue(employee,key,value){
    const updateEmployee = Object.assign({},employee,{[key]:value})
    return updateEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    return Object.assign(employee,{[key]:value})
}

function deleteFromEmployeeByKey(employee,key){
    const updateEmployee = {...employee}
    delete updateEmployee[key]
    return updateEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key]
    return employee
}