const markdown = `
# React and SEO

02-Dec-2021

&nbsp;

This blog is about all the things I learnt while updating my portfolio site and most of it has to do with client side rendering. Initially, all I had in my mind was updating the color pallette but as i started i kept adding more things to it. Here are the changes that i have made:

&nbsp;

First of all, this site is made using react. It doesn’t have any backend for now to make any API calls to. It’s a static site and the reason I have used client side rendering and not a static site generator is simply to get my portfolio out as soon as possible because I'm familiar with React. I have shared more on this towards the end of the blog.

&nbsp;

First of all, i made changes to the formatting and styling of the blogs. I chose markdown for the simple reason that blogs look and feel good if the alignment and formatting is simple and intuitive, like a text book. The most I would be doing in blogs for now is adding code snippets in between paragraphs which can be done using markdown. Before this i was using JSX which was only increasing the build time because of more number of html tags. React povides react-markdown library for this and i have used the same. Earlier, i was mapping over the blogs array and passing each blog as a prop to the same component. Due to this every blog had the same style including the number of paras.LOL. Here's a look at the updated code:

![library import](./assets/markdown2.png)

&nbsp;

I decided to add the light and dark theme switch and also to change the color palette. I have used a state variable, based on which I change the css module classes for all the elements. The setState is attached to the button onClick event. I have used contextAPI to let the components access this state. Here is the code:

- insert theme classname logic and state usecontext

Here’s an example of css classes:

- css variables too.

&nbsp;

I have added meta tags for Twitter and Open Graph protocol. These tags would help the user get the link preview of the page. Here's an example:

- insert card validator screenshot

This meta tags helps googlebot in indexing the page and also shows the same description in search results.

- show description meta tag

I wanted to have different meta tags for different blogs and the homepage. In create-react-app, one cannot have different html pages with their own meta tags. There is one index.html and all the other components are updating this index.html throughout the use of application during the runtime using javascript. There is no way of adding meta tags exclusive to a component. For this issue, i have used react-helmet library. This library allows the use of meta tags with the JSX. But this works only if I pre-render the page. Till now, the site is rendered only when the ReactDOM updates it after the fetching it, during the runtime. To make the meta tags work for different components, i had to serve pre-rendered pages to the client. For this i have used react-snap. Another library which enables pre-rendering. Now, the tags work. Here's how the react-helmet works:

- insert helment tag

Here's the changes after installing react-snap:

-postbuild script and hydrate vs render

&nbsp;

I have added a resume page too which uses react-pdf library as pdf viewer and this is how it works. 

-insert code here

Pretty simple, a document is a collection of pages here and my pdf has only 1 page. 

&nbsp;

I have added a sitemap too which is not necessary for indexing but Google recommends as it helps the googlebot to accurately index your site. Make sure to update your robots file to allow googlebot crawl your site. I have added my site to google search console and it shows crawling is allowed but indexing is not. I'm still trying to fix it. Here's a link for the sitemap: 

- link to sitemap.
- robots file

&nbsp;

Now, doing all the above seems like going against the grain of client side rendering. Although the use of libraries is letting me do what i had planned but this is not the use case of client side rendering. 

For the last one week, my recent tabs in browser have been about "Gatsby vs NextJS" and i haven't been able to accurately rationalise their respective use cases. 

I'm thinking of using NextJS which suits the current use case of static generation and also allows SSR. I think it's a good skill to have as a web developer. I know NextJS is not just about SSR and Gatsby is not just about SSG but to really understand both i would have to start with one. So for now, it's NextJS.   

`

export default markdown