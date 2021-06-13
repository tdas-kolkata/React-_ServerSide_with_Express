var React = require('react');
var Template = require('./template');


function DefaultLayout(props) {
  return (
    <Template name={props.title}>
    <div className="container">
      {
        props.name!=null && <h1 className="container mt-2"> Hi {props.name}....Welcome</h1>
      }
    </div>

      <div className="container border border-2">
          <ul>
            {
              props.data.map((val,index) => {
               return <li>{val.sub}</li>
             })
            }
          </ul>
      </div>
    </Template>
  );
}



module.exports = DefaultLayout;