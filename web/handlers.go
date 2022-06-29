package web

import (
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
