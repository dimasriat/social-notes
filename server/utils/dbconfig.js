const mysql = require("mysql");

const resetTable = () => {
	db.query(`DROP TABLE IF EXISTS Users`, (err) => {
		if (err) throw err;
		console.log("table dihapus");
	});
};

const addAdmin = () => {
	db.query(
		"INSERT INTO Users (UserName, PassWord) VALUES (?)",
		[["Admin", "AiceLarasati"]],
		(err) => {
			if (err) throw err;
			console.log("admin sudah ditambahkan");
		}
	);
};

const dropTableUsers = (callback) => {
	db.query("DROP TABLE IF EXISTS Users", (err) => {
		if (err) throw err;
		console.log("Table users dihapus");
		callback();
	});
};

const dropTablePosts = (callback) => {
	db.query("DROP TABLE IF EXISTS Posts", (err) => {
		if (err) throw err;
		console.log("Table posts dihapus");
		callback();
	});
};

const createTable = (callback) => {
	db.query(
		`create table Users (
				UserID int auto_increment,
				UserName varchar(45) not null,
				Password varchar(45) not null,
				primary key (UserId)
			)`,
		(err) => {
			if (err) throw err;
			console.log("tabel Users dibuat");
			db.query(
				`create table Posts (
						PostID int auto_increment,
						UserID int,
						Title varchar(45) not null,
						Content text,
						primary key (PostId),
						foreign key (UserID) references Users(UserID)
					)`,
				(err) => {
					if (err) throw err;
					console.log("tabel Posts dibuat");
					callback();
				}
			);
		}
	);
};

const db = mysql.createConnection({
	user: "root",
	password: "",
	host: "localhost",
	database: "social_notes",
});

db.connect((err) => {
	if (err) throw err;
	console.log("connected!");
	dropTablePosts(() => dropTableUsers(() => createTable(() => addAdmin())));
});

module.exports = db;
