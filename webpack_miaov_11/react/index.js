
var React=require('react');
var ReactDOM=require('react-dom');

var Hollo=React.createClass({
    render:function () {
        return <h1>hellkkkkkk</h1>
    }
})


var div1=document.createElement('div');
document.body.appendChild(div1);


ReactDOM.render(<Hollo/>,div1)
