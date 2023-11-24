




// const heading = React.createElement(
//     "h1",
//     {id:'heading'},
//     "Hello World from React !!"
//     );

//     console.log(heading); //object
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// React.createElement() does not creates a tag, it creates a React Element thta is object.
// it has props, props are children and attributes that we are passing
// "Hello World from React !!" is the children which will go inside h1 tag
// {id:'heading'} is the attributes
// h1 is not an tag it is an React Object
// render method is responsible to take the object and convert it into the tag and put it uopn the DOM


// const parent = React.createElement(
//     "h1",
//     {id:'parent'},
//     React.createElement("div",{id:"child"},[React.createElement("h1", {}, "i am h1 tag"),React.createElement("h2", {}, "i am h2 tag")])
// );

// console.log(parent); //object
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

const parent = React.createElement(
    "h1",
    {id:'parent'},
    React.createElement("div",{id:"child"},[React.createElement("h1", {}, "i am h1 tag"),React.createElement("h2", {}, "i am h2 tag")])
);

console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);