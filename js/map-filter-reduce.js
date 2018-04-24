'use strict';


const users = [
    {
        id: 1,
        name: 'ryan',
        eamil: 'ryan@codeup.com',
        languages: ['coljure', 'jacascript']
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];

const result = users.filter(users => users.languages.length > 2);


console.log((result));



// Use .filter to create an array of user objects where each user object
// // has at least 3 languages in the languages array.
//
// const userObjects = [
//     {
//         id: 1,
//         languages: ['coljure', 'jacascript', 'php', 'sql', 'java', 'scala']
//     },
//     {
//         id: 2,
//         languages: ['java', 'scala','coljure', 'jacascript', 'php', 'sql'],
//     },
//     {
//         id: 3,
//         languages: ['javascript','coljure', 'php', 'sql', 'java', 'scala', 'bash'],
//     },
//
// ];



