import express from "express";

const app = express();

// comment

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
    if (error) { 
        console.log(error);
        return;
    }
    console.log('Server is running on port ', PORT);
});