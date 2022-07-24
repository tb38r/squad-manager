package database

import (
	"database/sql"
	"log"

	_ "github.com/mattn/go-sqlite3"
)

const dbName = "squad.db"

func CreateDB() {

	var db *sql.DB

	db, err := sql.Open("sqlite3", dbName)
	if err != nil {
		log.Fatal(err)
	}

	db.Exec(`create table if not exists members(
		memberID integer primary key AUTOINCREMENT, 
		name text, 
		position text, 
		email text, 
		alias text, 
		availabilty integer);`)

	db.Exec(`create table if not exists monies (
		feeID integer primary key AUTOINCREMENT,
	    memberID REFERENCES members(memberID),
		amount integer,
		date text);`)

}
