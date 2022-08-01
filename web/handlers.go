package web

import (
	"fmt"
	"html/template"
	"net/http"
)

func home(w http.ResponseWriter, r *http.Request) {
	var tpl *template.Template

	tpl = template.Must(template.ParseGlob("templates/*.html"))

	if err := tpl.ExecuteTemplate(w, "homepage.html", nil); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

func addUserToDB (w http.ResponseWriter, r *http.Request){
	if r.URL.Path != "/addUserToDB"{
		http.Error(w, "404 not found", http.StatusNotFound)
		return
	}

	if r.Method == "POST"{
		a := r.FormValue(("a"))
		fmt.Println(a)


	}else{
		fmt.Println("error")
	}

}
