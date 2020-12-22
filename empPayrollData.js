class EmployeePayRollData {
    //property
    id;
    salary;
    gender;
    startDate;

    //constructor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    //getter and setter method
    get name() { return this._name; }
    set name(name) {
        let nameRegex = new RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(nameRegex.test(name)) this._name = name;
        else throw 'Name is in incorrect format';
    };

    //to return a string
    toString(){
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate == undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "id = " + this.id + ", name = " + this.name + ", salary = " + this.salary + ", gender = " + this.gender + ", startDate = " + empDate;
    }
}

        let employeePayRollData=new EmployeePayRollData(1,"Mark",30000);
        console.log(employeePayRollData.toString());
        employeePayRollData.name="Teju";
        console.log(employeePayRollData.toString());
        let newEmployeePayrollData = new EmployeePayRollData(1,"Venky",40000,"M",new Date());
        console.log(newEmployeePayrollData.toString());