
var React=require('react');
var ReactDOM=require('react-dom');


import App from './app';

var Hollo=React.createClass({
    render:function () {
        return <div>12<App/></div>
    }
})


var div1=document.createElement('div');
document.body.appendChild(div1);


ReactDOM.render(<Hollo/>,div1)
