import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import {
	Navbar,
	Nav,
} from "react-bootstrap";
import Home from "./Home";
import About from "./About";
import SinglePost from "./SinglePost";
import Post from "./Post";
import Project from "./Project";
import Resume from "../components/Amir_Ashtiany_Resume[915].pdf";


class Navbars extends React.Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-md-12">
						<Router>
							<Navbar bg="dark" variant="dark" expand="lg" sticky="top">
								<Navbar.Brand href="/">Ashtiany</Navbar.Brand>
								<Navbar.Toggle aria-controls="basic-navbar-nav" />
								<Navbar.Collapse id="basic-navbar-nav">
									<Nav className="mr-auto">
										<Nav.Link href="/post">Blog Post</Nav.Link>
										<Nav.Link href="/project">Projects</Nav.Link>
										<Nav.Link href="/about">About Me</Nav.Link>
										<Nav.Link target="_blank" href={Resume}>Resume</Nav.Link>
									</Nav>
									<Nav className="ml-auto">
										<Nav.Link href="/https://github.com/Alexfit4">
											<i className="fab fa-github text-3xl "></i>
										</Nav.Link>
										<Nav.Link href="/https://www.linkedin.com/in/amir-ashtiany-4a25421b9/">
											<i className="fab fa-linkedin text-3xl "></i>
										</Nav.Link>
										<Nav.Link href="/https://www.facebook.com/alex.ashtiany">
											<i className="fab fa-facebook-square text-3xl "></i>
										</Nav.Link>
									</Nav>
								</Navbar.Collapse>
							</Navbar>
							<Switch>
								<Route component={Home} exact path="/" />
								<Route component={About} path="/about" />
								<Route component={SinglePost} path="/post/:slug" />
								<Route component={Post} path="/post" />
								<Route component={Project} path="/project" />
							</Switch>
						</Router>
					</div>
				</div>
			</div>
		);
	}
}

export default Navbars;
