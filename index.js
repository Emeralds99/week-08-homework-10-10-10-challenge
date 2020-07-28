/*
@Challenge 01 - Write a function named 'everyonesFavorites' where you will be tasked to traverse through nested objects 
within an array to get everyones favorite things.
@Example - Your terminal should show something like "George's favorite color is green, his favorite animal is a Buffalo and his favorite sport is Football".
You could take it a step further and have each persons favorites be listed as shown above.
@Test - Make a function call of everyonesFavorites().
let everyone = [{
    person: 'George',
    favorites: {
        color: 'Green',
        animal: 'Buffalo',
        sport: 'Football'
    }
}, {
    person: 'Kristi',
    favorites:{
        color: 'Blue',
        animal: 'Dog',
        sport: 'Hockey'
    }
}, {
    person: 'Tiffany',
    favorites: {
        color: 'Purple',
        animal: 'Cat',
        sport: 'Basketball'
    }
}
]
*/

/*
@Challenge 02 - Write a function named 'lottoWinner' Where if the numbers given match "05, 16, 28, 07, 54" you will get 
a notification that you have won. If it does not match you will get a notification saying you have lost.
@Example - If the numbers match you should see something like "Congrats! You're our next Lotto winner!!" and if they do not match "Better luck next time!"
@Test - Make a function call of lottoWinner().
*/

/*
@Challenge 03 - Write a function named 'characterCreation' Using our array from last weeks challenges this time you will be tasked with creating your own character.
Create your character and add it to the current array. Then have two players select who they want to play as.
@Example - After you add your new character you should get something like: Player one chose [New Character], Player two chose Dr Doof.
@Test - Make a function call characterCreation().
let player = [{
    character: {
        name: 'Mr Maximus',
        power: 'Psychic abilities'
    }
    }, {
    character: {
        name: 'Dr Doof',
        power: 'Mediocre tech skills'
    }
    }, {
        character: {
            name: 'Mad Margret',
            power: 'Super strength'
        }
    }
]
*/

/*
@Challenge 04 - Create a function called ‘stringToNumArray’ that takes in a single string of numbers and returns an array of numbers. 
@Example - A srting of '42, 03, 54, 10' should come back as [42, 03, 54, 10].
@Test - Make a function call stringToNumArray()
*/

/*
@Challenge 05 - Create a function called 'sumOfOnlyOdd' that takes an array and returns the sum of all the odd values.
@Example - An array of [10, 7, 5, 6, 3] should return 15.
@Test - Make a function call sumOfOnlyOdd()
*/

/*
@Challenge 06 - Create a function called 'oddBall' where you take an array of numbers and filters out the odd numbers, then squares those numbers.
@Example - An array of [2, 3] would take the 3 out of the array then square it to equal 9.
@Test - Make a function call oddBall().
*/

/*
@Challenge 07 - Crete a function called 'checkObjectForProperty' that takes two parameters, the first is an object the second is a string.  
The function should check to see if the object, first parameter, has a property with the name of the second parameter. If it does it returns the value of the value in that property. 
If it doesn't exist then add the second parameter, as a property, to the object and set its value to "new record" and then returns that new value.
@Example - let obj = {stringParam}, let stringParam = 'This is my string': since our "obj" variable has a property within it with the same name as our string variable,
we expect it to return "This is my string" within our terminal. but if let obj = {noMatch} then you must add "stringParam" to that obj variable.
@Test - Make a function call checkObjectForProperty(object, string).
*/


/*
@Challenge 08 - Create a 'numbers.js' file and create an array variable called 'numbers' within that file.
Then import the array 'numbers' from the file 'number.js' into the 'index.js' file. Then create a function called 'displayNumbers' that logs the "numbers" variable to the console.
@Example - in your numbers.js file you should have an array like [1,2,3,4] and after creating your function in your index.js file you should get 1, 2, 3, 4 to return in your terminal.
@Test - Make a function call displayNumbers() and be sure to set up your imports and exports between your two files.
*/

/* 
@Challenge 09 - Create a function called 'tigersOnTheFarm' where you are given an array of farm animals and you need to remove the ones that do not belong
using the .pop() method. The .pop() removes the last item in the array, so you will have to make sure the element that you have to remove is in the last spot of the array.
@Hint - You need to move 'Tiger' to the end of the array before performing the .pop method.
@Test - Make a function call tigersOnTheFarm()
*/
let farmAnimals = ['Cow', 'Tiger', 'Chicken', 'Pig']


/* 
@Challenge 10 - Create a function called 'ultimateReversal' where if a palindrome is sent through it it will return true, and will return false otherwise.
@Example - A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. So if a word like 'Racecar' is
sent through the function you should get a return of true because if you spell it backwards it still says Racecar, but a word like Orange should return false.
@Test - Make a function call ultimateReversal()
*/