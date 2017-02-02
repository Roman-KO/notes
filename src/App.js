import React, { Component } from 'react';
import './App.css';

class App extends Component {
    // Blueprint (features, parts, pieces)
    constructor() {
        super();
        
        this.state = {
            resources: [{title: "Thinking in React",
                            url: "https://facebook.github.io/react/docs/thinking-in-react.html"},
                        {title: "ReactJS Basics",
                            url: "https://www.youtube.com/watch?v=JPT3bFIwJYA&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS"},
                        {title: "REACT JS TUTORIAL #2 - Reactjs Components & Rendering",
                            url: "https://youtu.be/fd2Cayhez58"}]
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
