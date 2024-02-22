console.log( `====== Class exercise ======` );

//The Dice Object

// Create a Dice object
// create a "side" property that can be changed on definition
// create a method that rolls the dice and returns a number between 1 and the side.
// create 2 instances of dice, one with 6 sides and one with 12 sides and run the methods on each.

console.log( `\nDice:` );

class Dice {
	constructor(side = 6) {
		this.side = side;
	}
	rollDice() { 
		return ( Math.ceil(Math.random() * this.side ) )
	}
  };

let dice6 = new Dice();
let dice12 = new Dice(12);

console.log( `You rolled a ${dice6.rollDice()} ` );
console.log( `You rolled a ${dice12.rollDice()} ` );


console.log( `\nMovie:` );

//The Movie Object

// Create a few Movie objects using a constructor.
// Create some properties to describe each movie. eg.

// Access and modify individual movie information.
// Create a method that returns that movie's information in a formatted string. (e.g., "Title: The Shawshank Redemption, Year: 1994, Director: Frank Darabont, Genre: Drama").
// Use a loop to iterate through the movies array and print the formatted summary for each movie.

class Movie {
	constructor( Title = "", Year = "", Director = "", Genre = "" ) {
		this.Title = Title;
		this.Year = Year;
		this.Director = Director;
		this.Genre = Genre;
	}
	movieInfo() {
		return( `Title: ${this.Title}, \nYear: ${this.Year}, \nDirector: ${this.Director}, \nGenre: ${this.Genre}` )
	}
	exportInfo() {
		let output = "";
		for ( let item of Object.entries( this ) ) {
			output += `${item[0]}: ${item[1]}\n`;
		}
		console.log(output);
	}
}

let movie1 = new Movie ( "The Shawshank Redemption", 1994, "Frank Darabont", "Drama");

let movie2 = new Movie ( "The Lord of the Rings: The Fellowship of the Ring", 2001, "Peter Jackson", "Fantasy");

let movie3 = new Movie ( "Spirited Away", 2001, "Hayao Miyazaki", "Animation");

movie3.Director = "Ghibli Studio";

// console.log( movie1.movieInfo() );
// console.log( movie2.movieInfo() );
// console.log( movie3.movieInfo() );

//movie1.exportInfo();

// function exportInfo() {
// 	for ( let key in movie1 ) {
// 		console.log( movie1[key] );
// 	}
// }

// function exportInfo() {
// 	let output = "";
// 	for ( let item of Object.entries( movie1 ) ) {
// 		output += `${item[0]}: ${item[1]}\n`;
// 	}
// 	console.log(output);
// }

movie1.exportInfo();
movie2.exportInfo();
movie3.exportInfo();


console.log( `\n====== Homework ======` );

const catBot = {
    name: "My cat is called SUSU.",
    SUSU: "In Chinese, SUSU means crispy cake.",
    age: "He is about 5 years old.",
    gender: "He is a boy.",
    weight: "He is currently 7kg! A heavy boy.",

    answer: function(){
        // console.log(Object.keys(this))

        let question = prompt('Ask about my cat');

        for (let keyWord of Object.keys(this)) {
            // console.log(keyWord);

            // if (question.includes(keyWord)) { 
            //     return catBot[keyWord];
            // }

            let regEx = new RegExp(keyWord, "i");

            if ( question.match(regEx) ) { 
                return catBot[keyWord];
            }
        }
    }
}

console.log(catBot.answer());