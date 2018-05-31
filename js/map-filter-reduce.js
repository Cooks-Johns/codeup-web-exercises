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

const threeLang = users.filter(function(user) {
    return user.languages.length > 2;
});

const userEmail = users.map(function(user) {
    return user.email;
});

const userId = users.reduce(function(id, user) {
    id[user.id] = user.name;
    return id;
}, {});

console.log(threeLang);
console.log(userEmail);
console.log(userId);
