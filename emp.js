console.log("Welcome to employee wage problem using javascript ");

//UC1:To check if employee is present or not

{
    const IS_ABSENT = 0;
    let empCheck = Math.floor(Math.random()*10)%2;
    if(empCheck == IS_ABSENT){
        console.log("Employee is absent");
    }else{
        console.log("Employee is present")
    }
}

//UC2:Calculating the employee wage based on full time and part time
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
{
let empHours = 0;
let empCheck = Math.floor(Math.random()*10)%3;
switch(empCheck) {
    case IS_FULL_TIME:
        empHours = FULL_TIME_HOURS;
        break;
    case IS_PART_TIME:
        empHours = PART_TIME_HOURS;
        break;
    default:
        empHours = 0;        
}
let employeeWage = empHours * WAGE_PER_HOUR;
console.log("Employee wage : " +employeeWage);



}
