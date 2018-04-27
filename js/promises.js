'use strict';

//=========-------------------  PART 1

function wait(number) {
    const promise = new Promise((resolve => {
        setTimeout(() => {
            resolve();
        }, number);
    }));
    promise.then(() => console.log(`You'll see this after ${number/1000} seconds.`));
    promise.catch(() => console.log('rejected'));
    return promise;
}



//=========-------------------  PART 2




function userCommits(username) {
    const githubPromise = fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization' : 'YOUR_TOKEN_HERE'}});
    githubPromise
        .then((response) => response.json())
        .then(users => {
            $(".here").text(`${username}'s last commit was ${users[0].created_at}`);
        });
}

//=========-------------------  PART 3


$("button").click(function () {
    const value = $("input").val();
    userCommits(value);
});







//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

//=========-------------------  PART 2















//=========-------------------  PART 3
