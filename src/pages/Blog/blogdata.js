const blogs = [
    {
        id: 0,
        title: 'factory functions',
        url: 'factory-functions',
        date: new Date('2021-09-26'),
        text: [
            `Factory functions, some say is a better design pattern than constructors. To understand more about this, let’s imagine a scenario. When you create an object using the new keyword followed by a constructor’s name what happens is you, in return, get all the properties and functions declared inside the constructor, in a variable which is on the lhs of the initialization expression. Now, let’s say that you cannot use the new keyword but have to make the code behave exactly the same as before when the new keyword was used.`,
            `What you would do is create an object literal inside the function and add properties to it which could be default or the ones passed as arguments to this function and then return that same object literal consisting of all those properties. `,
            `This would behave exactly the same as it would with the new keyword. You would still have the returned properties stored in a variable on the lhs of initialization expression for further use. `,
            `This function that was called without the new keyword is called a factory function.`,
            `Now, you can also implement the idea of private variables and functions here as the programmer can decide as to what variables or functions should be returned by this function and only those variables or functions would be accessed outside it. Along with this, the functions or variables can retain their scope even outside the factory function because of the closures. Even if they are called outside the function, they can still access other “not returned variables” because they have retained their scope outside the factory function.`,
            `Now what about the inheritance? One way is you create two factory functions with one of these being the parent function and the other being a child function. Then you can simply call the parent function inside the child function and store the literal returned by the parent in a variable and use it further.`,
            `There is one more design pattern in JS called Module Pattern which we would see in the later blogs.`
        ]
    },
    {
        id: 1,
        title: 'prototypal inheritance',
        url: 'prototypal-inheritance',
        date: new Date('2021-09-23'),
        text: [
            `Before we start with this concept, lets understand the meaning of prototype and inheritance.`,
            `Inheritance is when an object inherits some properties or a behaviour from a parent object. In languages like Java or C++ we call this classical inheritance where we would define a class as a blueprint of an object. In JavaScript, classical inheritance is absent. Yes, the idea classical inheritance was introduced in ES6 but it is just a syntactical sugar for programmers switching from other languages like mentioned above but beneath the syntax, it is still a prototypal inheritance.`,
            `Coming to prototype. What is it? Prototype is an attribute of an object that tells us about the parent constructor. This parent constructor is called a prototype. The object inherits all the properties and methods of its prototype once we define the latter as it’s prototype. `,
            `Create a constructor, add some properties and check its prototype, you would see its pointing to its own constructor by default. Now if you create different objects of the same constructor, you would see that they all are inheriting the same constructor as their respective prototypes. The object’s prototype is the constructor it inherits from and the prototype of that constructor is Object.prototype which has all the default properties that we use like .toLowerCase() and many more.`,
            `Now, I can add more constructors and make use of prototype to inherit properties but the final parent constructor is always going to be Object.prototype. It’s like a series of prototypes inheriting from their respective parent constructor in a chain. This is called a prototype chain. Whenever a call is made to an object’s property, it first checks for it in the “enumerable properties” and if it finds it, the value is returned and the search is stopped but if it doesn’t then it goes to the prototype of the object and searches for it until it reaches the final prototype called Object.prototype. `,
            `This is the most basic idea of prototypal inheritance. `,
            `Now, one more use case of prototype is as a property. You can define any function as the prototype of a constructor.  Usually adding functions like these as a prototype property is preferred when you wish to save memory. As instead of every object having its own copy of that particular function, all of them are sharing one copy of it defined as a prototype.`,
            `JS provides a method called Object.create() for inheriting a prototype. This method returns a new object of the prototype mentioned in the parenthesis as an argument and if you check the prototype of this new object created using obj.__proto__, you would see the properties of the parent object or the (prototype). Once you have this object, you can add more properties to it.`,
            `I hope this was enough to give you an initial idea about the prototypes. You can always delve into more details for which I would recommend starting with the implementation of above in your web console.`,    
        ], 
        
    },
]

export default blogs