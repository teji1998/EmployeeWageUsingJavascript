console.log("Welcome to employee wage problem using javascript ");
//Constants
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUMBER_OF_WORKING_DAYS = 20;
const MAXIMUM_HOURS_IN_MONTH = 160;
//Variables
let totalEmployeeHours = 0;
let totalWorkingDays = 0;
//function to get the working hours
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
//using while loop to meet the maximum hours and total number of days
while (totalEmployeeHours <= MAXIMUM_HOURS_IN_MONTH && totalWorkingDays < NUMBER_OF_WORKING_DAYS){
    totalWorkingDays ++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmployeeHours += gettingWorkingHours(empCheck);
}
//total employee wage
let employeeWage = totalEmployeeHours * WAGE_PER_HOUR;
console.log("Total days : " + totalWorkingDays + ",Total hours : " 
        + totalEmployeeHours + ",Employee wage : " + employeeWage);

