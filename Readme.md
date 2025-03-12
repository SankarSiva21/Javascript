# Variable 
Variable is a name given to the specfic memory address. In that address it may store some data.

In JavaScript we have 3 ways to define a variable by usuing 
# var const let
Var -> allows us to to redeclare a same variable gain. It leads to unwanted problems 
const -> Once it declared it cannot be change. It is constant.
Let -> let allows us to modify a variable but not alloed to redifine 
Ex:- <br>
    var num1 = 10; 
    var num1 = 20; -> allowed 
        num1 = 30  -> allowed

    const num2 = 10;
    const num2 = 20; -> not allowed 
          num2 = 30; -> not allowed 

    let num3 = 10;
    let num3 = 20;  -> not allowed 
        num3 = 30;  -> allowed
# Data typrs in Javascript :- 
    1. Primitive 
    2. Non Primite
# Primitive :-
    1.1. Number  
        1.1.1 let lenght = 16;
        1.1.2 let weight =  56.369;
        1.1.3 let y = 123e5 // 12300000
        1.1.4 let x = 123e-5 // 0.00123
        1.1.5 let number = 10_00_000; // allowed so that we will 
    1.2. String 
        1.2.1 let color = "yellow";
        2.2 let lastName  = "Sankar";
    1.3. Boolean 
        1.3.1 let x = true;
        1.3.2 let y = false;
    1.4. Null
    1.5. Undefined 
    1.6. Symbol
# Non Primitive :-
    2.1. Object 
        2.1.1 const person = {firstName: 'john' , lastName: 'Doe'};
# Note :-
    Javascript has dynamic types. This means that the same variable can be used to hold different data type
    Ex :- 
        let x;
        x = 5;
        x = "String;;

how to get a data from array and object.

# Conditional statements 
    1.if(condtion){
        statement1;
        statement2;
    } 

    2.if(){

    }else {

    }

    if (){

    }
    3. else if(){

    }
    else{

    }

    if(){
        if(){

        }
        esle {

        }
    }
    esle {

    }
