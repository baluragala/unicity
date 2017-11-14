/*function gen() {
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
}*/

function* gen1() {
    let i = yield 1;
    console.log(i);
    let j = yield 2;
    console.log(j);
    let k = yield 3;
    console.log(k);
}

let iter = gen1();
iter.next();
iter.next();

//iter.next();

function* github(username) {
    let user = yield fetch('https://api.github.com/users/baluragala');
    let repos = yield fetch(user.repos_url);
}

