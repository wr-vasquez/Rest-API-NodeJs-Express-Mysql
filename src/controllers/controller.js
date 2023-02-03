import {getConnection} from "./../database/database";

const getLenguaje =  async (req, res) => {
     try {
        const connection = await getConnection();
      const result = await connection.query("SELECT * FROM Lenguajes");
      res.json(result);
        
     } catch (error) {
        res.status(500);
        res.send(error.message)
         
     }
};

const addLenguaje =  async (req, res) => {
    try {
        const {Lenguaje, Ranking} = req.body;
        const Len = { Lenguaje, Ranking}

     const connection = await getConnection();
     const result = await connection.query("INSERT INTO Lenguajes SET ? ", Len);
     res.json(result);
       
    } catch (error) {
       res.status(500);
       res.send(error.message) 
       
    }
};



export const methods = {
    getLenguaje,
    addLenguaje
};