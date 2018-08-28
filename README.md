# Infomentum Coding Test 

## The Little Zebra Charity 
But everyone really loves Giraffes. And Rhinos. And Tigers.

## Setup :boom:

```
git clone git@github.com:JakeMusichDev/Little-Zebra-Fund.git
yarn install 
yarn start 
```

```
yarn build
```

## Workflow :shower:

I had a great time working on this project - I appreciate the altruistic tone to it! :) 

I decided to use the React Javascript framework to structure the app for several reasons: 
1. Given the lack of complex animations and a relatively conservative DOM structure, I decided against Angular 5.
2. I find React's form handling / internal state management more clear than Vue's
3. React is more widely used in new projects and would most likely be the best candidate for client-facing projects and working with other dev-teams - general literacy is higher
4. CRA is a great way to simplify the Webpack configuration - I use ParcelJS sparingly for small projects  given its agnostic setup and Webpack, again IMHO, is just a wonderful tool. 

I generated the basic React structure with Create-React-App and added a couple dependencies I enjoy working with, namely the library AphroditeJs, a CSS-in-JS inline style tool that simplifies the overall folder hierachy (IMHO).

https://github.com/Khan/aphrodite

With my focus on building out the HTML structure before adding logic, I worked from the largest modularized containers down to smaller resuable compnents that may reappear (buttons, logos, etc). I styled during this step and worked to refine the responsiveness as I built up each section of CSS - I find this saves time and lessens stress than doing a single-view mockup and going back to introduce responsivity.

After the skeleton was complete, I implemented the logic in the React style, focusing on state management and the widget form as I decided Redux was an overkill.

Give it a look, I'm excited to hear what you think! 

## Contact 

makejusich@gmail.com 


### Thanks!!
