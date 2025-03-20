class user {
    constructor(name, password) {
        this.name = name;
        this.password = password;
    }
}
const user1 = new user('Teste', '123456');

const divs = [];
for (let i = 0; i < 5; i++) {
    const div = document.createElement('div');
    div.innerText = `Div ${i}`;
    divs.push(div);
}


divs.map(div => 
    document.body.classList.add('container'),
    document.body.appendChild(div)
);

const root = document.getElementById('root');


root.innerText = 'Hello, World!';

