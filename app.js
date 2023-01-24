const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views','./views');

app.use(express.static("public"));
app.use(express.urlencoded());


var todoData = [
    {
        WorkToDo : `Meeting with Tony Stark at Time Square`,
        Deadline  : '2023-02-27',
        ToDoCategory : 'Work'
    },
    {
        WorkToDo : `Ready for the Shimla Trip with Saurabh and Danish.`,
        Deadline  : '2023-01-27',
        ToDoCategory : 'Travel'
    },
    {
        WorkToDo : `Shopping for The Himachal Trip with friends.`,
        Deadline  : '2023-01-27',
        ToDoCategory : 'Shopping'
    }
];

app.get('/',function(req,res){
    return res.render("list",{
        page_title: `TODO APP | Shivam's ToDo`,
        todo_data: todoData
    });
});

app.post("/",function(req,res){
    // todoData.push({
    //     WorkToDo: req.body.WorkToDo,
    //     Deadline: req.body.Deadline,
    //     ToDoCategory: req.body.ToDoCategory
    // })
    todoData.push(req.body)
    return res.redirect('/')
})

app.get('/delete',function(req,res){
    console.log(req.query);
    let WorkToDo = req.query.WorkToDo;

    let todoIndex = todoData.findIndex(todo => todo.WorkToDo == WorkToDo);
    if(todoIndex!=-1){
        todoData.splice(todoIndex, 1);
    }
    return res.redirect('back');
})

app.listen(3000,function(){
    console.log("Listening to port: 3000"); 
}) 