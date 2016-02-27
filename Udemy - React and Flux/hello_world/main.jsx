// Define a react component class
var HelloWorld = React.createClass({
    render: function() {
        return <div>
            Hello World
        </div>
    }
});

// Ask react to render this class
var element = React.createElement(HelloWorld);

// When we ask react to render this class, we will tell it
// where to place the rendered element in the dom
ReactDOM.render(element, document.body);
