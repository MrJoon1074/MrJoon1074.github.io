var title = document.getElementById("title").value;
var author = document.getElementById("author").value;
var edition = document.getElementById("edition").value;
var price = document.getElementById("price").value;

var submitButton = document.getElementById("submit");

var listedBooks = [];

function submit() {
    listedBooks.push([title, author, edition, price]);
    console.log(listedBooks);
    window.location.href='profile.html';
}

// submitButton.addEventListener('click', submit());