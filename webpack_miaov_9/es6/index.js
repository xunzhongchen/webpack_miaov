var fn=()=>{
    console.log(123)
}

fn();

class Student{
    hello(){
        console.log('class')
    }
}

var s=new Student()
s.hello()

class leo extends Student{

}
var l=new leo()
l.hello();