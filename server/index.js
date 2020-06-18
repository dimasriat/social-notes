const express = require("express");
const cors = require("cors");
const bp = require("body-parser");
const app = express();
const multer = require("multer");
const upload = multer({ dest: `${__dirname}/public/uploaded` });
const fs = require("fs");
const db = require("./utils/dbconfig");

app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));
app.use("/assets", express.static(`${__dirname}/public`));

app.get("/", (req, res) => {
	res.send("lapor bosq");
});

app.post("/login", (req, res) => {
	db.query(
		"select * from users where binary username=? and binary password=?",
		[req.body.username, req.body.password],
		(err, results) => {
			if (err) throw err;
			if (results.length > 0) {
				return res.send({ msg: "sukses" });
			} else {
				return res.send({ msg: "gagal" });
			}
		}
	);
});

app.get("/dbtest", (req, res) => {
	db.query("select * from users limit 1", (err, results) => {
		if (err) throw err;
		res.send(JSON.stringify(results));
	});
});

app.listen(8000, () =>
	console.log("The back-end is powered by express at http://localhost:8000/")
);
