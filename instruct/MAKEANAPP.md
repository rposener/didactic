# Make an App

Great! You've read this far into the didact instructions!  At this point, I'm going to describe how we will put all this together to make a custom library that I will call 'core'.  I will then use core to show how we can create components that are declarative, reactive (to observability), maintain shared state and interact with data.

## Pulling it together 

Just to Recap what we've gone over, and how I'm going to piece it all together into a workable Web Component Example Project.

* Create Web Components from a Base Class
* Create Observable / Computed Properties
* Within our Base Class include `applyBindings` and `unapplyBindings` to manage declarative bindings used in our template syntax
* Add Data Helper Class as a means to standardize Data access
* Do all this within typescript files with complete JSDoc documentation so that our self-made application is easy to understand.

> Note: Not everyone is sold on Typescript. Personally I like it because I can define interfaces and better describe my project.  This prevents many errors.  It's also natively transpilable to JS and webpack, which I will be using to package my application has great support for it as well.

## Packaging it
The last thing I'm going to do is use webpack to package the solution.  Finally I'll use lite-server to host it with active reload so I can create the same experience you get from the large frameworks with their custom CLI's.

Setting up the Project
----------------------
1. Setup the Project the following way - this has been done on this repo already:
    - Run this command to prep npm `npm init`
    - Run this command to install some npm packages: `npm i webpack webpack-cli typescript ts-loader css-loader html-loader lite-server --save-dev`
    - Run this command to create typescript config: `tsc --init`
    - Create the following Edits to the files created here:

Create a scripts section in the **package.json** file like this:

```json
"scripts": {
    "devserver": "lite-server",
    "webpack-watch": "npx webpack --watch --mode=development",
    "webpack-prod": "npx webpack --mode=production"
}
```

Modify my tsconfig.json as follows: 

```json
{
    "compilerOptions": {
        "target":"ES2017",
        "module":"ES2015",
        "sourceMap":true
    },
    "include:[
        "src/ts/**/*"
    ], 
    "exclude":[
        "node_modules"
    ]
}
```

Building the Application
------------------------

1. Create the following files from the code that we've reviewed in this didact walk-through.
    - /src/didact/data.ts - this will be my Data Helper Class
    - /src/didact/observable.ts - this will be my Observable classes
    - /src/didact/bindings.ts - this will hold binding logic
    - /src/didact/componentbase.ts - this will be my Web Component base class

1. Next I will create the application files
    - /src/index.html - this will be my root HTML
    - /src/app.ts - this will be my root application file which will mostly contain my component imports.
    - /src/component/calculator.ts - a calculator component
    - /src/component/calculator.html - the markup for calculator component 
    - /src/component/tictactoe.ts - a tic-tac-toe game
    - /src/component/tictactoe.html - the markup for tictactoe game 
    - /src/component/todo.ts - a todo app backed by http://jsonplaceholder.typicode.com/
    - /src/component/todo.html - the markup for todo app