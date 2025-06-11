// create a class for Student with minimum 5 attributes, create 3
// defferent objects with meaning ful name, and set and get all
// information.


class STUDENT {
    name;
    std;
    gender;
    age;
    phone;

 display(name,std,gender,age,phone){
 this.name = name;
 this.std = std;
 this.gender = gender;
 this.age = age;
 this.phone = phone;
}
}

const jugal = new STUDENT();
      
jugal.display("jugal","12th","male",20,9877654433)
console.log(jugal)


const nikunj = new STUDENT()
nikunj.display("nikunj","12th","male",20,9876543210)
console.log(nikunj)

const honey = new STUDENT()
honey.display("honey","12th","female",20,8876543210)
document.writeln(honey.age)
console.log(honey)

