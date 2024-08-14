const fs = require('fs').promises;
const filePath  = ('./database.json');

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
         await fs.writeFile( filePath, JSON.stringify(data,null,2));

    }catch (error){
        console.log(error);
    }
}

module.exports = {
    readData,
    writeData
}