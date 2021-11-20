const markdown1 = `
# Factory Functions

26-Sept-2021

&nbsp;

Factory functions, some say is a better design pattern than constructors. To understand more about this, let’s imagine a scenario. When you create an object using the new keyword followed by a constructor’s name what happens is you, in return, get all the properties and functions declared inside the constructor, in a variable which is on the lhs of the initialization expression. Now, let’s say that you cannot use the new keyword but have to make the code behave exactly the same as before when the new keyword was used.

&nbsp;

What you would do is create an object literal inside the function and add properties to it which could be default or the ones passed as arguments to this function and then return that same object literal consisting of all those properties.

&nbsp;

This would behave exactly the same as it would with the new keyword. You would still have the returned properties stored in a variable on the lhs of initialization expression for further use.

&nbsp;

This function that was called without the new keyword is called a factory function.

&nbsp;

Now, you can also implement the idea of private variables and functions here as the programmer can decide as to what variables or functions should be returned by this function and only those variables or functions would be accessed outside it. Along with this, the functions or variables can retain their scope even outside the factory function because of the closures. Even if they are called outside the function, they can still access other “not returned variables” because they have retained their scope outside the factory function.

&nbsp;

Now what about the inheritance? One way is you create two factory functions with one of these being the parent function and the other being a child function. Then you can simply call the parent function inside the child function and store the literal returned by the parent in a variable and use it further.

&nbsp;

There is one more design pattern in JS called Module Pattern which we would see in the later blogs.
`
export default markdown1