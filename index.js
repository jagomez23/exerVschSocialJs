var bookClubPresident = {
    firstname: "April",
    lastname: "Smith",
    age: 36,
    favoriteBook: ["The Hunger Games"],
    address:{
        street: "456 libro way",
        city: "Somewhere",
        state: "Nowhere",
    },
    fullname: function(){
        return this.firstname + " " + this.lastname;
    },
    bookClubMembers: [
        {
            firstname: "Amy",
            lastname: "Johnson",
            age: 33,
            favoritefood: "Popcorn",
            favoriteBook:[
                {
                    bookname: "Harry Potter and the Chamber of Secrets",
                    genre: "fantasy"
                }
            ]
        },
        {
            firstname: "Shan",
            lastname: "Vanek",
            age: 45,
            favoritefood: "M & M's",
            favoriteBook:[
                {
                    bookname: "To Kill a Mockingbird",
                    genre: "Southern Gothic"
                }
            ]
        },
        {
            firstname: "Joy",
            lastname: "Brown",
            age: 30,
            favoritefood: "wine",
            favoriteBook:[
                {
                    bookname: "Harry Potter and the Half-Blood Prince",
                    genre: "fantasy"
                }
            ]
        },
    ],
}


bookClubPresident.host = true
bookClubPresident.favoritefood = "chips"

bookClubPresident.bookClubMembers.push({
    firstname: "Katie",
    lastname: "Gibson",
    age: 29,
    favoritefood: "cheese",
    favoriteBook:[
        {
            bookname: "Twlight",
            genre: "fantasy",
        }
    ],
})


console.log(bookClubPresident)

    
