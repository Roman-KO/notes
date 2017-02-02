import React, { Component } from 'react';
import './App.css';

class App extends Component {
    // Blueprint (features, parts, pieces)
    constructor() {
        super();
        
        this.state = {
            resources: [
                        {title: "Higher-order functions - Part 1 of Functional Programming in JavaScript",
                            url: "https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84"},
                        {title: "var, let and const - What, why and how - ES6 JavaScript Features",
                            url: "https://www.youtube.com/watch?v=sjyJBL5fkp8"},
                        {title: "Arrow functions in JavaScript - What, Why and How - FunFunFunction #32",
                            url: "https://www.youtube.com/watch?v=6sQDTgOqh-I"},
                        {title: "var, let and const - What, why and how - ES6 JavaScript Features",
                            url: "https://www.youtube.com/watch?v=sjyJBL5fkp8"},
                        {title: "Arrow functions in JavaScript - What, Why and How - FunFunFunction #32",
                            url: "https://www.youtube.com/watch?v=6sQDTgOqh-I"},

                        {title: "Essential ES6 / ES2015 JavaScript",
                            url: "https://www.youtube.com/watch?v=CozSF5abcTA"},
                        {title: "JavaScript ES6+: var, let, or const?",
                            url: "https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75#.ak68hz8j5"},
                        {title: "Interactive ES5 to ES6 conversion guide:",
                            url: "http://stack.formidable.com/es6-interactive-guide/#/"},
                        {title: "Javascript ES6 Cheatsheet - the best of JS ES6",
                            url: "https://www.youtube.com/watch?v=AfWYO8t7ed4"},
                            
                        {title: "Javascript ES6 Cheatsheet #2 - the best of JS ES6",
                            url: "https://www.youtube.com/watch?v=LmL0Gh193M0"},
                        {title: "ECMAScript 6 / ES6 New Features - Tutorial 1 - Let",
                            url: "https://www.youtube.com/watch?v=ZJZfIw3P8No&list=PL6gx4Cwl9DGBhgcpA8eTYYWg7im72LgLt"},
                        {title: "Learn ES6 (ECMAScript 2015)",
                            url: "https://egghead.io/courses/learn-es6-ecmascript-2015"},
                        {title: "ES6 JavaScript - The Basics",
                            url: "https://www.youtube.com/watch?v=IEf1KAcK6A8"},
                            
                        {title: "Thinking in React",
                            url: "https://facebook.github.io/react/docs/thinking-in-react.html"},
                        {title: "ReactJS Basics",
                            url: "https://www.youtube.com/watch?v=JPT3bFIwJYA&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS"},
                        {title: "REACT JS TUTORIAL #2 - Reactjs Components & Rendering",
                            url: "https://youtu.be/fd2Cayhez58"}, 
                        {title: "ReactJS Basics - #1 What is React?",
                            url: "https://www.youtube.com/watch?v=JPT3bFIwJYA"},
                        {title: "REACT JS TUTORIAL #2 - Reactjs Components & Rendering",
                            url: "https://www.youtube.com/watch?v=fd2Cayhez58&feature=youtu.be"},
                        ]
        };
    }
    
    // Event handlers (not every component will need this, choose wisely)

    render() {
        return (
            <div>
                A Title
                <ol>
                {this.state.resources.map((resource) => {
                    return <li><a href={resource.url} target="_blank">{resource.title}</a></li>
                })}
                </ol>
            </div>
        );
    }
}

export default App;
