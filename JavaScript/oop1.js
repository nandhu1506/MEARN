// Create student class with 4 properties : id,name,course,fees, define function for display student details

class student{
    constructor(id,name,course,fees){
        this.studentID = id
        this.studentName = name
        this.studentCourse = course
        this.studentFees = fees
    }
    displayData(){
        console.log(`
            ---------------Student Details-------------------
            Student ID : ${this.studentID}
            Name : ${this.studentName}
            Course : ${this.studentCourse}
            Fees : ${this.studentFees}
            `);
    }
}

const stu1 = new student(100,"Aaaa","MEARN",10000)
stu1.displayData()
const stu2 = new student(101,"Abbbb","python",15000)
stu2.displayData()


//----------------Inheritance--------------------//


class Parent{
    myBike = "Duke"
}

class child extends Parent{ 

}

const obj = new child()
console.log(`My Bike is : ${obj.myBike}`);
