const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";

const date = new Date();

const n = date.toDateString();

const time = date.toLocaleTimeString();

console.log('Date: ' + n);

console.log('Time: ' + time);

document.body.append(h2)