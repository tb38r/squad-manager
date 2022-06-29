package main

import (
	"squad/web"

	_ "github.com/mattn/go-sqlite3"
)

func main() {

	web.OpenServer()

}
