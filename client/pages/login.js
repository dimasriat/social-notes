import Layout from "../components/Layout";
import {
	Row,
	Col,
	Card,
	CardTitle,
	CardBody,
	CardText,
	Label,
	FormGroup,
	Form,
	Input,
	Alert,
} from "reactstrap";

export default function Login(props) {
	return (
		<Layout>
			<Row className="justify-content-center">
				<Col className="my-3" md={12} lg={6}>
					<Card>
						<CardBody>
							<CardTitle>
								<h1>Login</h1>
							</CardTitle>
							<Form>
								<FormGroup>
									<Label for="username">Username</Label>
									<Input
										type="text"
										name="username"
										id="username"
										placeholder="username"
									/>
								</FormGroup>
								<FormGroup>
									<Label for="password">Password</Label>
									<Input
										type="password"
										name="password"
										id="password"
										placeholder="password"
									/>
								</FormGroup>
								<Input
									type="submit"
									value="Login"
									className="btn btn-outline-primary"
								/>
							</Form>
						</CardBody>
					</Card>
					{/* <Alert color="danger" className="mt-3">Akun tidak ditemukan</Alert> */}
				</Col>
			</Row>
		</Layout>
	);
}
