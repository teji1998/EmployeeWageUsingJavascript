console.log("Welcome to employee wage problem using javascript ");
//Constants
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const numberOfWorkingDays = 20;
const MAXIMUM_HOURS_IN_MONTH = 160;
//function to get the working hours
function GettingWorkingHours(empCheck)
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
//to get the daily employee wage
function CalculatingWage(empHours)
{
    return empHours * WAGE_PER_HOUR;
}
//Variables
let totalEmployeeHours = 0;
let totalWorkingDays = 0;
//array to store the daily wage
let employeeDailyWageArray = new Array();
//Map to store the daily wage
let empDailyWageMap = new Map();
//Map to store the daily hours
let empDailyHoursMap = new Map();
//Array to store the daily hours and wage as an object
let empDailyHoursAndWageArray = new Array();
//using while loop to meet the maximum hours and total number of days
while (totalEmployeeHours <= MAXIMUM_HOURS_IN_MONTH && totalWorkingDays < numberOfWorkingDays){
    totalWorkingDays ++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHours = GettingWorkingHours(empCheck);
    totalEmployeeHours += empHours;
    empDailyHoursAndWageArray.push( 
        {
            dayNumber : totalWorkingDays,
            dailyHours : empHours,
            dailyWage : CalculatingWage(empHours),
            toString() {
                return '\nDay' + this.dayNumber + ' => working hours is ' 
                    + this.dailyHours + ' and wage earned = ' + this.dailyWage          
            }
        });
}
console.log("UC10 store daily wage, work, hours day in a object: " + empDailyHoursAndWageArray);

//UC11:Using arrow functions
let totalHours = empDailyHoursAndWageArray.filter(obj => obj.dailyHours > 0)
    .reduce((totalHours,obj) => totalHours += obj.dailyHours,0);
let totalWage = empDailyHoursAndWageArray.filter(obj => obj.dailyWage >0)
    .reduce((totalWage,obj) => totalWage += obj.dailyWage,0);
console.log("\nUC11(a) : Calculate total hours and wage using arrow functions : ");
console.log("Total Hours: " + totalHours + "   Total Wage: " + totalWage);

//UC11(b) Show the full working days using foreach
console.log("\nUC11(b) : Show the full working days");
empDailyHoursAndWageArray.filter(obj => obj.dailyHours == 8).forEach(obj => process.stdout.write(obj.toString()));
