const fs = require('fs').promises;
const filePath  = ('../database.json');

async function readData() {
    try{
        const data = await fs.readFile( filePath, 'utf8');
        return JSON.parse(data);

    }catch (error){
        console.log(error);
    }
}

async function writeData(data) {
    try{
        const data = await fs.writeFile( filePath, JSON.stringify(data,null,2));

    }catch (error){
        console.log(error);
    }
}

//route handler controller
async function createUser(req, res) {
    try{
        const data = await readData();
        const lastUser = data.users[data.users.length - 1];
        const nextId = lastUser? lastUser.id + 1 : 1;

        const newUser = {
            id: nextId,
            username: req.body.username,
            first_name: req.body.first_name,
            email: req.body.email,
        }

        data.users.push(newUser);
        await writeData(data);

        res.send('User created successfully');

    }catch (error){

    }
}

module.exports = {
    createUser,
    
}







