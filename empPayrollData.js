class EmployeePayRollData {

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
    }

    get id() { return this._id; }
    set id(id) {
        let idRegex = RegExp('^[1-9]{1}[0-9]*$');
        if (idRegex.test(id)) {
            this._id = id;
        } else {
            throw 'Id is in incorrect formst';
        }
    }

    get gender() { return this._gender; }
    set gender(gender) {
        let genderRegex = RegExp('^[MFmf]{1}$');
        if (genderRegex.test(gender)) {
            this._gender = gender;
        } else {
            throw 'Gender is in incorrect format';
        }
    }

    get salary() { return this._salary; }
    set salary(salary) {
        let salaryRegex = RegExp('^[1-9]{1}[0-9]*$');
        if (salaryRegex.test(salary)) {
            this._salary = salary;
        } else {
            throw 'Salary is in incorrect format';
        }
    }

    get startDate() { return this._startDate; }
    set startDate(startDate) {
        if (startDate <= new Date())
            this._startDate = startDate;
        else throw "Date is in incorrect format";
    }

    //to return a string
    toString(){
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate == undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "id = " + this.id + ", name = " + this.name + ", salary = " + this.salary + ", gender = " + this.gender + ", startDate = " + empDate;
    }
}

let newEmployeePayrollData = new EmployeePayRollData(1, "Liam", 30000, 'M', new Date());
console.log(newEmployeePayrollData.toString());
try {
    newEmployeePayrollData.name = "Te";
    console.log(newEmployeePayrollData.toString());
} catch (e) {
    console.error(e);
}
try {
    newEmployeePayrollData.id = -5;
    console.log(newEmployeePayrollData.toString());
} catch (e) {
    console.error(e);
}
try {
    newEmployeePayrollData.salary = -190;
    console.log(newEmployeePayrollData.toString());
} catch (e) {
    console.error(e);
}
try {
    newEmployeePayrollData.startDate = new Date();
    console.log(newEmployeePayrollData.toString());
} catch (e) {
    console.error(e);
}