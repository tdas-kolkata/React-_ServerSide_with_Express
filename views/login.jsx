var React = require('React');
var Template = require('./template')

function Login(props){
	return (
		<Template name="login">
		{/*style={{width:"500px"}}*/}	
			<div className="container-fluid mx-auto text-center mt-3 mb-5">
				<h2 className="text-primary">Please Enter Details</h2>
			</div>
			<div className="container col-sm-4 col-xs-8 mx-auto">
				<form action="" method="">
				  <div className="mb-2">
				    <label htmlFor="username" className="form-label">Username</label>
				    <input type="text" className="form-control" id="username"/>
				  </div>
				  <div className="mb-2">
				    <label htmlFor="InputPassword1" className="form-label">Password</label>
				    <input type="password" className="form-control" id="InputPassword1"/>
				  </div>
				  <div className="mb-3 form-check">
				    <input type="checkbox" className="form-check-input" id="Check1"/>
				    <label className="form-check-lebel" htmlFor="Check1">
				    	Keep me logged in
				  	</label>
				  	<div className="mt-3 text-center">
				  		<button type="submit" className="btn btn-primary">Submit</button>
				  	</div>
				  </div>
				</form>
			</div>
		</Template>
	);
}

module.exports = Login;