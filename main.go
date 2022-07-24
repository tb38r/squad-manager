package main

import (
	"squad/database"
	"squad/web"

	_ "github.com/mattn/go-sqlite3"
)

func main() {

	database.CreateDB()
	web.OpenServer()

	//github

}
