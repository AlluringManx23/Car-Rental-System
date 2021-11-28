class MyClass {
    
    constructor() {
        console.log("initiate");
    }

    add(arg1,arg2){
        let result;
        result = arg1 + arg2;
        return result;
    }
    
    validation(arg1) {
     if(arg1 === ""){
        alert("enter something valid");
        document.getElementById('myInput').innerHTML = "";
        return false;
        }
        else if (!arg1.match(/^[A-Za-z]+$/)){
          alert("Can only enter letters");
        document.getElementById('myInput').innerHTML = "";
        return false;
        }
        else{return true;}
            }
    

    }

module.exports = MyClass;