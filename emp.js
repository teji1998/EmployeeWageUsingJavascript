console.log("Welcome to employee wage problem using javascript ");
//Constants
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUMBER_OF_WORKING_DAYS = 20;
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
//using while loop to meet the maximum hours and total number of days
while (totalEmployeeHours <= MAXIMUM_HOURS_IN_MONTH && totalWorkingDays < NUMBER_OF_WORKING_DAYS){
    totalWorkingDays ++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHours = GettingWorkingHours(empCheck);
    totalEmployeeHours += empHours;
    //Adds elements to the array
    employeeDailyWageArray.push(CalculatingWage(empHours));
}
//total employee wage
let employeeWage = CalculatingWage(totalEmployeeHours);
console.log("Total days : " + totalWorkingDays + " ,Total hours : " 
        + totalEmployeeHours + " ,Employee wage : " + employeeWage);

//UC7(a):using array to calculate total employee wage for each traversal or reduce method
let totalEmpWage = 0;
function Sum(dailyWage) {
    totalEmpWage += dailyWage;
}
//take a element at a time
employeeDailyWageArray.forEach(Sum);
console.log("UC7(a) : Total days : " +totalWorkingDays + " Total Hours : " + totalEmployeeHours +
    " EmpWage : " + totalEmpWage);
function totalWages(totalWage, dailywage) {
    return totalWage + dailywage;
}
//gives final result
console.log("UC7(a) : Emp wage with reduce : " + employeeDailyWageArray.reduce(totalWages, 0));

//UC7(b): shows the day along with daily wage using array map helper function  
let dailyCounter = 0;
function mapDayWithWage(dailyWage){
    dailyCounter ++;
    return dailyCounter + " = " + dailyWage;
}
//maps the values into the array
let mapDayWithWageArray = employeeDailyWageArray.map(mapDayWithWage);
console.log("UC7(b) : Daily wage map ");
console.log(mapDayWithWageArray);

//UC7(c) : show days when full time wage of 160 were earned
function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
//returns elements meeting the condition
let fullDayWageArray = mapDayWithWageArray.filter(fullTimeWage);
console.log("UC7(c) : Daily wage filtered when full time wage earned : ");
console.log(fullDayWageArray);

//UC7(d) : find the first occurrence when full time wage was earned using find function
function findFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC7(d) : First time full time wage was earned on day : " + mapDayWithWageArray.find(findFullTimeWage));

//UC7(e) : check if every element of full time wage is really containing full time wage
function isAllFulltimewage(dailywage){
    return dailywage.includes("160");
}
console.log("UC7(e) : Check all elements have full time wage : " + fullDayWageArray.every(isAllFulltimewage));
