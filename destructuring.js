/*
const obj = {first: 'Jane', last: 'Doe', address: {street: 's1', city: 'c1',country:'us'}};
const {first: f, last: l} = obj;
const {city, street, country:ctry='india'} = obj.address;
console.log(f, l);
console.log(city, street, ctry);
*/


/*
var members = ['ram', 'sam', 'jim', 'kim'];
const [m1, m2, ...team] = members;
console.log(m3);*/

/*
let name = 'Bala Krishna Ragala';
let [...chars] = [...name];
console.log(chars);*/


function wish({wish='Hello',name}) {
    console.log(`${wish},${name}`)
}

wish({name:'bala'});
