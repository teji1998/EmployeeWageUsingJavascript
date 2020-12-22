class EmployeePayRollData {
    //property
    id;
    salary;

    //constructor
    constructor(id,name,salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    //getter and setter method
    get name() { return this._name; }
    set name(name) {this._name = name;}


    //to return a string
    toString() {
        return "id = " +this.id + ", name = " +this.name + ", salary = " +this.salary;
    }
}
let employeePayrollData = new EmployeePayRollData(1, "Liam", 30000);
console.log(employeePayrollData.toString());
employeePayrollData.name = "john";
console.log(employeePayrollData.toString());