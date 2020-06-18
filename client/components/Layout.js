import Link from "next/link";
import { useState } from "react";
import {
	Navbar,
	NavbarBrand,
	NavbarToggler,
	Collapse,
	Nav,
	NavItem,
	NavLink,
	Container,
	Row,
	Col,
} from "reactstrap";

export default function Layout(props) {
	const [toggle, setToggle] = useState(false);
	return (
		<div>
			<Navbar color="primary" dark expand="md">
				<Container>
					<NavbarBrand>Social Notes!</NavbarBrand>
					<NavbarToggler
						onClick={() => setToggle((state) => !state)}
					/>
					<Collapse navbar isOpen={toggle}>
						<Nav navbar className="ml-auto">
							<NavItem>
								<Link href="/">
									<a><NavLink>Home</NavLink></a>
								</Link>
							</NavItem>
							<NavItem>
								<Link href="/login">
									<a><NavLink>Login</NavLink></a>
								</Link>
							</NavItem>
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
			<Container>
				<Row>
					<Col>{props.children}</Col>
				</Row>
			</Container>
		</div>
	);
}
