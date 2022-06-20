function getName() {
    let userName = prompt('What is your name?');   
    sayHello(userName);
}
function sayHello(name) {

    alert('Hello ' + name + '!');
    console.log('Alert sent!');
}