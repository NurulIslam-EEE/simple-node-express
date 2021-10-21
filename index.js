const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello from node and express an canada');
})
const users = [
    { id: 0, name: 'sabana', email: '@gmail.con', phone: '018487467834' },
    { id: 1, name: 'shabnoor', email: '@gmail.con', phone: '018487467834' },
    { id: 2, name: 'shbranti', email: '@gmail.con', phone: '018487467834' },
    { id: 3, name: 'suchorita', email: '@gmail.con', phone: '018487467834' },
    { id: 4, name: 'soniya', email: '@gmail.con', phone: '018487467834' },
    { id: 5, name: 'susmita', email: '@gmail.con', phone: '018487467834' }
]
app.get('/users', (req, res) => {
    const search = (req.query.search);
    ///use query parameter 
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }

});

//app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post ', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})
//dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'orange', 'banana', 'apple'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('yummy yummy tok marka fazli')
})

app.listen(port, () => {
    console.log('listening to port', port);
});