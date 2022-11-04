function student(name,std_class,gpa){
    this.name=name;
    this.std_class=std_class;
    this.gpa=gpa;
    
}
function creat(){
   let s1=new student("asma",3,2.2);
   let s2=new student("aqsa",1,3.2);
   let s3=new student("azra",3.98,3.9);
   
   console.log("Student 1 Name")
   console.log(s1.name)
   console.log("--------------")
   console.log("Student 2 Name")
   console.log(s2.name)
   console.log("--------------")
   console.log("Student 3 Name")
   console.log(s3.name)
   console.log("--------------")
   console.log("Student 1 Data")
   console.log(s1)
   console.log("--------------")
   console.log("Student 2 Data")
   console.log(s2)
   console.log("--------------")
   console.log("Student 3 Data")
   console.log(s3)
   console.log("--------------")
   return [s1,s2,s3];
}

let students= creat();

var newarray =students.filter(function (e1){
    return e1.gpa>3
});
console.log("Students with GPA Above 3")
console.log(newarray)