const blogs_list = [
    {
        id: 0,
        title: 'factory functions',
        url: 'factory-functions',
        date: new Date('2021-09-26'),
        description: 'Factory functions, some say is a better design pattern than constructors. To understand more about this, let’s imagine a scenario. When you create an object using the new keyword followed by a constructor’s name what happens is you, in return, get all the properties and functions declared inside the constructor, in a variable which is on the lhs of the initialization expression. Now, let’s say that you cannot use the new keyword but have to make the code behave exactly the same as before when the new keyword was used.',
            
    },
    {
        id: 1,
        title: 'prototypal inheritance',
        url: 'prototypal-inheritance',
        date: new Date('2021-09-23'),
        description: 'Before we start with this concept, lets understand the meaning of prototype and inheritance.'
        
    },
    {
        id: 2,
        title: 'React and SEO',
        url: 'react-and-seo',
        date: new Date('2021-12-02'),
        description: 'This blog is about all the things I learnt while updating my portfolio.'
        
    },
]

export default blogs_list