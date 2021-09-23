const blogs = [
    {
        id: 0,
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
        ], 
        
    },
]

export default blogs