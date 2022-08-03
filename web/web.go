package web

import (
	"log"
	"net/http"
)

//tpl = template.Must(template.ParseGlob("templates/*.html"))

func OpenServer() {

	cssPath := http.FileServer(http.Dir("./templates"))
	http.Handle("/templates/", http.StripPrefix("/templates/", cssPath))

	http.HandleFunc("/", home)
	http.HandleFunc("/addUserToDB", addUserToDB)

	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal("Error starting the server, package web", err)
	}

}
