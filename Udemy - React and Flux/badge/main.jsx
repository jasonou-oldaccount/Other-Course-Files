// Define a react component class
var Badge = React.createClass({
    render: function() {    
        return <button className="btn btn-primary" type="button">
            {this.props.title} <span className="badge">{this.props.number}</span>
        </button>
    }
});

var options = {
    title: 'Sent',
    number: 12
};

// Ask react to render this class
var element = React.createElement(Badge, options);

// When we ask react to render this class, we will tell it
// where to place the rendered element in the dom
ReactDOM.render(element, document.body);
