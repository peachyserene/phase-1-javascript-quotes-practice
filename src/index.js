document.addEventListener("DOMContentLoaded", () => {
  fetch(`http://localhost:3000/quotes?_embed=likes`)
    .then((resp) => resp.json())
    .then((data) => pullIfno(data));

  let quoteBin = document.getElementById("quote-list");
  //places each quote group into a new list item
  function pullIfno(data) {
    data.forEach((quoteGruop) => {
      let quoteCard = document.createElement("li");
      quoteCard.className = "quote-card";
      let quote = document.createElement("p");
      quote.textContent = `Quote: ${quoteGruop.quote}`;
      let author = document.createElement("p");
      author.textContent = `Author: ${quoteGruop.author}`;
      let btn = document.createElement("button");
      btn.addEventListener("click", () => {
        liker();
      });
      btn.className = "btn-success";
      btn.textContent = "Likes: ";
      let count = document.createElement("span");
      count.id = "likes";
      count.textContent = 0;

      function liker() {
        count.textContent++;
      }
      quoteBin.appendChild(quoteCard);
      quoteCard.appendChild(quote);
      quoteCard.appendChild(author);
      quoteCard.appendChild(btn);
      btn.appendChild(count);
    });
  }

  //gives the submit form functionality
  let submitForm = document.getElementById("new-quote-form");
  submitForm.addEventListener("submit", (event) => {
    event.preventDefault();
    submitted(event);
  });
  let newQuote = document.getElementById("new-quote");
  let newAuthor = document.getElementById("author");

  //creates new containers for new subission and posts it to the top
  function submitted(event) {
    let quoteCard = document.createElement("li");
    quoteCard.className = "quote-card";

    let quote = document.createElement("p");
    quote.textContent = `Quote: ${newQuote.value}`;

    let author = document.createElement("p");
    author.textContent = `Author: ${newAuthor.value}`;

    let btn = document.createElement("button");
    btn.className = "btn-success";
    btn.textContent = "Likes: ";

    let count = document.createElement("span");
    count.id = "likes";
    count.textContent = 0;

    quoteBin.prepend(quoteCard);
    quoteCard.appendChild(quote);
    quoteCard.appendChild(author);
    quoteCard.appendChild(btn);
    btn.appendChild(count);
  }
  //let likeButton = document.getElementsByClassName("btn-sucess");
});
