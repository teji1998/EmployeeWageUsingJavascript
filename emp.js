console.log("Welcome to employee wage problem using javascript ");
//UC3:Function to get working hours
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
function gettingWorkingHours(empCheck)
{
    switch(empCheck) {
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
            break;
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            break;
        default:
            return 0;  
    }          
}
let empHours = 0;
//UC4:calculating employee wage for a month
const NUMBER_OF_WORKING_DAYS = 20;
for(let day = 0 ; day < NUMBER_OF_WORKING_DAYS; day ++) 
{
    let empCheck =  Math.floor(Math.random() * 10) % 3;
    empHours += gettingWorkingHours(empCheck);
}
let employeeWage = empHours * WAGE_PER_HOUR;
console.log("Employee wage is " + employeeWage + " for " + empHours + " hours " );

