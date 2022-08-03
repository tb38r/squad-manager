package web

import (
	"encoding/json"
	"fmt"
	"html/template"
	"io/ioutil"
	"log"
	"net/http"
)

type User struct {
	Name     string `json:"name"`
	Position string `json:"position"`
	Email    string `json:"email"`
	Age      string `json:"age"`
	Contact  string `json:"contact"`
	Nickname string `json:"nickname"`
}

func home(w http.ResponseWriter, r *http.Request) {
	var tpl *template.Template

	tpl = template.Must(template.ParseGlob("templates/*.html"))

	if err := tpl.ExecuteTemplate(w, "homepage.html", nil); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

func addUserToDB(w http.ResponseWriter, r *http.Request) {
	log.Println(r.URL.Path, r.Method)
	if r.URL.Path != "/addUserToDB" {
		http.Error(w, "404 not found", http.StatusNotFound)
		return
	}

	if r.Method == "POST" {
		//a := r.FormValue(("a"))

		var demo User

		body, err := ioutil.ReadAll(r.Body) // response body is []byte
		if err != nil {
			fmt.Println("ERROR", err)
		}
		// r.Body.Close()

		fmt.Println("stringbody", string(body))

		json.Unmarshal([]byte(body), &demo)

		fmt.Println("Unmarshalled", demo.Name, demo.Age, demo.Contact, demo.Nickname)

		w.WriteHeader(http.StatusOK)
		
		// if err := json.Unmarshal(body, &demo); err != nil { // Parse []byte to go struct pointer
		// 	fmt.Println("Can not unmarshal JSON")
		// }
		// fmt.Println((demo))

	} else {
		fmt.Println("error")
	}

}
