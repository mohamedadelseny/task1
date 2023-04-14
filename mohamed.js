import  express  from 'express';


const app = express();
const students =[
    {
        id:1,
        name:"mohamed",
        city:"shibin"
    },
    {
        id:2,
        name:"ahmed",
        city:"tanta"
    },
    {
        id:3,
        name:"samy",
        city:"cairo"
    },
    {
        id:4,
        name:"magdy",
        city:"paris"
    },

];

const studentsFunction = (request, response) =>{
    let output = "<ul>";

    for(let i =0; i < students.length; i++)
    {
        const student = students[i];
        output += "<li>"+ student.name + "</li>";
    }




    output += "</ul>";
    response.send(output);

  

};



app.get("/students", studentsFunction);

app.listen(5000);



