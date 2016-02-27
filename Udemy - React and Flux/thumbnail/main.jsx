// Define a react component class
var Badge = React.createClass({
    render: function() {    
        return <button className="btn btn-primary" type="button">
            {this.props.title} <span className="badge">{this.props.number}</span>
        </button>
    }
});

var Thumbnail = React.createClass({
   render: function() {
        return <div className="thumbnail">
            <img src={this.props.imageUrl} />
            <div className="caption">
                <h3>{this.props.header}</h3>
                <p>{this.props.description}</p>
                <p>
                    <Badge title={this.props.title} number={this.props.number}/>
                </p>
            </div>
        </div>
   }
});

var options = {
    title: 'See Tutorials',
    number: 32,
    imageUrl: 'http://formatjs.io/img/react.svg',
    header: 'Learn React',
    description: 'React is fantastic new library for making fast, dynamic pages. React is fantastic new library for making fast, dynamic pages.'
};

// Ask react to render this class
var element = React.createElement(Thumbnail, options);

// When we ask react to render this class, we will tell it
// where to place the rendered element in the dom
ReactDOM.render(element, document.querySelector('.target'));
