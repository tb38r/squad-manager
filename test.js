var axios = require("axios");
var data = JSON.stringify({
  query: `{
  books{
    name
  }
}`,
  variables: {},
});

var config = {
  method: "get",
  url: "http://localhost:8080/graphql?",
  headers: {
    "Content-Type": "application/json",
  },
  data: data,
};

axios(config)
  .then(function (response) {
    const res = response.data;
    const books = res.data.books;
    const newBook = books.map((book) => {
      let p = 0;
      return {
        id: p++,
        boookName: book.name,
      };
    });

    console.log(newBook);
  })
  .catch(function (error) {
    console.log(error);
  });
