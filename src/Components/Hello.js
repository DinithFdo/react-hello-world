import React from "react";

function Hello(){
    // return (
    //     <div className="dummyClass">
    //         <h1>Hello, this is Dinith</h1>
    //     </div>
    // )

    return React.createElement(
        'div',
        {className:"dummyClass",id:"hello"},
        React.createElement('h1',null,"Hello, this is not Dinith"))
}

export default Hello;