var React = require('react');


// Temlpate actually adds bootstrap css and js files to it 
function Template(props){
	return(
	<html>
      <head>
        <title>{props.name}</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossOrigin="anonymous"/>
        <link rel="stylesheet" href="/css/index_style.css"/>
      </head>
      <body>
          <nav className="navbar navbar-expand-lg navbar-dark bg-secondary rounded">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">MyHomeNetwork</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-link active" aria-current="page" href="/home">Home</a>
                  <a className="nav-link" href="/login">Login</a>
                  <a className="nav-link" href="#">About us</a>
                </div>
              </div>
            </div>
          </nav>
      	<center><h1> This is navbar</h1></center>
      	{props.children}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossOrigin="anonymous"></script>
      </body>
    </html>
	);
}

module.exports = Template ;