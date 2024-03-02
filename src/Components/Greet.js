import React from 'react';

// function Greet(){
//     return <h1>Hello Dinith Welcome</h1>;
// }

// const Greet = ()=> <h1>Hi I'm Dinith</h1>

const Greet = (props) => {
    console.log(props);

    return (
        <div>
            <h1>Hello {props.name} a.k.a {props.heroName}</h1> 
            <h4>{props.children}</h4>
        </div>
    );
}

export default Greet;