'use strict';

/*
 * Complete the TODO items below
 */
const users = [
    {
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash']
    },
    {
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript']
    },
    {
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php']
    },
    {
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql']
    },
    {
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php']
    },


// TODO: fill in your name and email and add some programming languages you know



// var myContactInfo =
    {
        name: 'johnathon',
        email: 'cooks.johns@codeup.com',
        languages: ['javaScript', 'html', 'css', 'bootStrap', 'jQuery']
    }
];

console.log(users[5]);


// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`



const name = 'johnathon';
const email = 'cooks.johns@gmail.com';
const languages = ['javaScript', 'html', 'css', 'bootStrap', 'jQuery'];








// TODO: rewrite the object literal using object property shorthand
users.push({
    name: name,
    email: email,
    languages: languages
});







let emails = [];
let names = [];






// TODO: rewrite the following using arrow functions
users.forEach(user => {
    emails.push(user.email);
    names.push(user.name);
});

// users.forEach(user => {
//     names.push(user.name);
// });







// TODO: replace `var` with `let` in the following declaration
let developers = [];
users.forEach(users => {


    // TODO: rewrite the code below to use object destructuring assignment
    //       note that you can also use destructuring assignment in the function
    //       parameter definition
   // const name = user.name;
   // const email = user.email;
    const languages = users.languages;





    // TODO: rewrite the assignment below to use template strings
    developers.push(`${name} '\'s email is ' ${email}.${name} ' knows ' ${languages.join(', ')}`);
});




// TODO: Use `let` for the following variable
let list = '<ul>';




// TODO: rewrite the following loop to use a for..of loop
for (const developer of developers) {


    // TODO: rewrite the assignment below to use template strings
    list += `'<li> ${developer} </li>`;
}
list += '</ul>';