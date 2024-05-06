//dependencies
const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const mysql=require('mysql')

//define the express operation
const app=express();
const port=4000;

//define the cors
app.use(cors());
app.use(bodyParser.json())


//establish the connect with the dB

const db=mysql.createConnection({
    host:'localhost',
    user:'root',  //db mysql username
    password:'Ramroom_mysql2',//db mysql password
    database:'db3'  
    });


    db.connect(err=>{
        if(err){
            console.error('connect is not established with the db ', err);
        }
        else{
            console.log('connect to db')
        }
        });
        app.listen(port,()=>{console.log('server connection established on 4000')})        
    
//get
        app.get('/getClient',(req,res)=>{
            const id=req.params.id;
            const sql="select * from client";
            db.query(sql,(err,result)=>{
        if(err){
            console.error('Error in fetching the client',err);
            res.status(500).json({error:'An error occured '});
        }
        else{
        res.status(200).json(result);
        }
        });
        });
        
//insert 
app.post('/addClient',(req,res)=>{
    const {name,email,address}=req.body;
    const sql='insert into client values(?,?,?)';
    db.query(sql,[name,email,address],(err,result)=>{
    if(err){
        console.error('Error in adding the client',err);
        res.status(500).json({error:'An error occured '});
    }
    else{
        res.status(200).json({message:'client added successfully'});
    }
    });
    });


    //updation of client
app.put('/updateClient',(req,res)=>{
    const {name,email,address}=req.body;
    const sql='update cilent set name=?,email=?, where address=?';
    db.query(sql,[name,email,address],(err,result)=>{
    if(err){
        console.error('Error in updating the client',err);
        res.status(500).json({error:'An error occured '});
    }
    else{
        res.status(200).json({message:'client updated successfully'});
        res.status(200).json(result);
    }
    });
    });

    //deletion of client
app.delete('/deleteClient/:name',(req,res)=>{
    const id=req.params.id;
    const sql='delete from client where name=?'
    db.query(sql,[id],(err,result)=>{
    if(err){
        console.error('Error in deleting the client',err);
        res.status(500).json({error:'An error occured '});
    }
    else{
        res.status(200).json({message:'client deleted successfully'});
        res.status(200).json(result);
    }
    });
    });

    //get a client with id
// app.get('/getClient/:id',(req,res)=>{
//     const id=req.params.id;
//     const sql='select * from client where id=?'
//     db.query(sql,[id],(err,result)=>{
//     if(err){
//         console.error('Error in deleting the client',err);
//         res.status(500).json({error:'An error occured '});
//     }
//     else{
//         res.status(200).json(result);
//     }
//     });
//     });


//===========================================================================


    //get
    app.get('/getMeeting',(req,res)=>{
        const sql="select * from meeting";
        db.query(sql,(err,result)=>{
    if(err){
        console.error('Error in fetching the meeting',err);
        res.status(500).json({error:'An error occured '});
    }
    else{
    res.status(200).json(result);
    }
    });
    });


    //insert 
app.post('/addMeeting',(req,res)=>{
    const {meetingtopic,number,starttime}=req.body;
    const sql='insert into meeting values(?,?,?)';
    db.query(sql,[meetingtopic,number,starttime],(err,result)=>{
    if(err){
        console.error('Error in adding the meeting',err);
        res.status(500).json({error:'An error occured '});
    }
    else{
        res.status(200).json({message:'meeting added successfully'});
    }
    });
    });


     //updation of meeting
app.put('/updateMeeting',(req,res)=>{
    const {meetingtopic,number,starttime}=req.body;
    const sql='update meeting set meetingtopic=?,starttime=?, where number=?';
    db.query(sql,[meetingtopic,number,starttime],(err,result)=>{
    if(err){
        console.error('Error in updating the meeting',err);
        res.status(500).json({error:'An error occured '});
    }
    else{
        res.status(200).json({message:'meeting updated successfully'});
        res.status(200).json(result);
    }
    });
    });



     //deletion of meeting
app.delete('/deleteMeeting/:id',(req,res)=>{
    const id=req.params.id;
    const sql='delete from meeting where id=?'
    db.query(sql,[id],(err,result)=>{
    if(err){
        console.error('Error in deleting the meeting',err);
        res.status(500).json({error:'An error occured '});
    }
    else{
        res.status(200).json({message:'meeting deleted successfully'});
        res.status(200).json(result);
    }
    });
    });



    
    //get a meeting with id
app.get('/getMeeting/:id',(req,res)=>{
    const id=req.params.id;
    const sql='select * from meeting where id=?'
    db.query(sql,[id],(err,result)=>{
    if(err){
        console.error('Error in deleting the meeting',err);
        res.status(500).json({error:'An error occured '});
    }
    else{
        res.status(200).json(result);
    }
    });
    });


     //get a meeting with id
app.get('/getMeeting/:id',(req,res)=>{
    const id=req.params.id;
    const sql='select * from meeting where id=?'
    db.query(sql,[id],(err,result)=>{
    if(err){
        console.error('Error in deleting the meeting',err);
        res.status(500).json({error:'An error occured '});
    }
    else{
        res.status(200).json(result);
    }
    });
    });