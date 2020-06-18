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

app.post("/add", upload.single("foto"), (req, res) => {
	if (req.file) {
		const newfilename = `${req.body.nama}_${req.body.whatsapp}_${req.file.originalname}`;
		fs.rename(
			`${req.file.destination}/${req.file.filename}`,
			`${req.file.destination}/${newfilename}`,
			(err) => {
				db.query(
					`insert into panitia (nama, whatsapp, bidang, foto) values (?)`,
					[
						[
							req.body.nama,
							req.body.whatsapp,
							req.body.bidang,
							newfilename,
						],
					],
					(err) => {
						if (err) throw err;
						res.send("suksesss dengan gambar");
					}
				);
			}
		);
	} else {
		db.query(
			`insert into panitia (nama, whatsapp, bidang) values (?)`,
			[[req.body.nama, req.body.whatsapp, req.body.bidang]],
			(err) => {
				if (err) throw err;
				res.send("suksesss tanpa gambar");
			}
		);
	}
});

app.get("/data", (req,res) => {
	db.query(`SELECT * FROM panitia`, (err, result) => {
		if (err) throw err;
		res.send(result);
	})
})

/*
app.post("/upload", upload.single("avatar"), (req, res) => {
	console.log(req.file);
	if (req.file) {
		fs.rename(
			`${req.file.destination}/${req.file.filename}`,
			`${req.file.destination}/${req.body.desc}_${req.file.originalname}`,
			(err) => {
				res.send({
					req_body: req.body,
					req_file: req.file,
				});
			}
		);
	} else {
		res.send({
			req_body: req.body
		});
	}
});
//ini buat berkomunikasi ke react
app.post("/", (req, res) => {
	const sender = req.body.chatForm.split(" ")[0].split(",")[0]; //ga penting cuma biar lucu aja ada sendernya
	setTimeout(() => res.send(`${sender}: iya dimm sama-sama yaa..`), 3000);
});*/

app.listen(8000, () =>
	console.log("The back-end is powered by express at http://localhost:8000/")
);