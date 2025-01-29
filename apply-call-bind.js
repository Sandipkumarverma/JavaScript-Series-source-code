const person = {
    Fname : "sandip",
    Lname : "verma",
    FullName : function(course, Channel){
        return this.Fname +" "+this.Lname +" "+course+" "+Channel;
    }
    
}
// console.log(person.FullName());

const person1 = {
    Fname : "Vipul",
    Lname  : "Raj",
}

// call methods
console.log(person.FullName.call(person1,"javascript","NextEra Coders"));

// apply method

console.log(person.FullName.apply(person1,["javascript", "NextEra Coders"]));

// bind method

const Result = person.FullName.bind(person1,"javascript", "NextEra Coders")
console.log(Result);
console.log(Result());

