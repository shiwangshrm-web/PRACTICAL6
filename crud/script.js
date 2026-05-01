let books = JSON.parse(localStorage.getItem("books")) || [];

function addBook() {
    let bookName = document.getElementById("bookName").value;
    let author = document.getElementById("authorName").value;
    let category = document.getElementById("category").value;
    let quantity = document.getElementById("quantity").value;

    if (bookName === "" || author === "" || category === "" || quantity === "") {
        alert("Please fill all fields");
        return;
    }

    let book = {
        bookName,
        author,
        category,
        quantity
    };

    books.push(book);

    localStorage.setItem("books", JSON.stringify(books));

    displayBooks();

    clearForm();
}

function displayBooks() {

    let table = document.getElementById("bookList");

    table.innerHTML = "";

    books.forEach((book, index) => {

        table.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${book.bookName}</td>
            <td>${book.author}</td>
            <td>${book.category}</td>
            <td>${book.quantity}</td>
            <td>
                <button class="btn-warning" onclick="editBook(${index})">Edit</button>
                <button class="btn-danger" onclick="deleteBook(${index})">Delete</button>
            </td>
        </tr>
        `;
    });
}

function deleteBook(index) {

    books.splice(index, 1);

    localStorage.setItem("books", JSON.stringify(books));

    displayBooks();
}

function editBook(index) {

    let book = books[index];

    document.getElementById("bookName").value = book.bookName;
    document.getElementById("authorName").value = book.author;
    document.getElementById("category").value = book.category;
    document.getElementById("quantity").value = book.quantity;

    deleteBook(index);
}

function clearForm() {

    document.getElementById("bookName").value = "";
    document.getElementById("authorName").value = "";
    document.getElementById("category").value = "";
    document.getElementById("quantity").value = "";
}

displayBooks();