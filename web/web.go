package web

import (
	"log"
	"net/http"
)

//tpl = template.Must(template.ParseGlob("templates/*.html"))


func OpenServer() {

	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal("Error starting the server, package web", err)
	}

}
