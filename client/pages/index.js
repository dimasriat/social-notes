import Layout from "../components/Layout";

// export default function Home(props) {
// 	const logged = props.logged;
// 	const userData = props.userData;
// 	return (
// 		<Layout logged={logged} userData={userData}>
// 			{logged === false ? (
// 				<p>Silakan Login terlebih dahulu</p>
// 			) : (
// 				<p>Selamat datang {userData.username}!</p>
// 			)}
// 		</Layout>
// 	);
// }

import {
	Row,
	Col,
	Card,
	CardBody,
	CardText,
	Form,
	FormGroup,
	Label,
	Input,
} from "reactstrap";

export default function Home(props) {
	const colsize = {
		xs: 12,
		sm: 12,
		md: 6,
		lg: 6,
		xl: 6,
	};
	return (
		<Layout>
			<Row>
				<Col className="my-3" {...colsize}>
					<h1>Notes</h1>
					<Card className="shadow">
						<CardBody>
							<CardText>aiiii</CardText>
						</CardBody>
					</Card>
				</Col>
				<Col className="my-3" {...colsize}>
					<h1>Insert</h1>
					<Card className="shadow">
						<CardBody>
							<Form>
								<Input
									type="text"
									name="title"
									id="title"
									placeholder="Title..."
								/>
								<Input
									type="textarea"
									name="Note"
									id="note"
									placeholder="Note..."
									className="mt-3"
								/>
								<Input
									type="submit"
									value="Post!"
									className="btn btn-primary mt-3"
								/>
							</Form>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</Layout>
	);
}
