# Variable 
Variable is a name given to the specfic memory address. In that address it may store some data.

In JavaScript we have 3 ways to define a variable by usuing 
# var const let
Var -> allows us to to redeclare a same variable gain. It leads to unwanted problems 
const -> Once it declared it cannot be change. It is constant.
Let -> let allows us to modify a variable but not alloed to redifine 
Ex:-
    var num1 = 10; 
    var num1 = 20; -> allowed 
        num1 = 30  -> allowed

    const num2 = 10;
    const num2 = 20; -> not allowed 
          num2 = 30; -> not allowed 

    let num3 = 10;
    let num3 = 20;  -> not allowed 
        num3 = 30;  -> allowed