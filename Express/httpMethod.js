const express = require('express');
const app = express();

app.get('/',(req, res)=>{
    res.status(200).json({message: "Welcome!"});
})

app.all('/test', (req, res) => {
    res.send('ALL: Request received');
});

app.post('/students', (req, res) => {
    res.send('Add a student');
});

app.put('/students/:id', (req, res) => {
    res.send('Replace student details');
});

app.patch('/students/:id', (req, res) => {
    res.send('Update student details');
});

app.delete('/students/:id', (req, res) => {
    res.send('Delete a student');
});

app.listen(3000, ()=>{
    console.log("Server is listening at http://localhost:3000");
})