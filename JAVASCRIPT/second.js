let a=20;
console.log(a);                               //variable using let 






function bb()                                  //function definition (without parameters)
{
let a=10;
console.log(a);
}
bb()                                           //function call
 



 
function cc(myname,yourname)                    //function with 2 parameters
{
    console.log("HELLO " + myname + " AND" + yourname);
}
cc("Hruu "," Sanjune");              //function call        
cc("Hruu "," Priya");                //function call






for(var i=2; i<=10; i++)             //for loop to print even numbers and "NAHI" to odd numbers
{
	if(i%2!=0)
	{
		console.log(i);
    }
    else
    {
    	console.log('NAHI');
    }  
}


 
var i=0;                   //while loop to print i for values 0 to 10 with text i is ... upto 10
while(i!=10)	
{
    console.log("i is ", i);
    i++;	
}
console.log("BYEE");