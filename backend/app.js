
const express=require("express");
const mysql = require("mysql");
const Pool = require('pg').Pool;
const cors=require("cors");
const fileUpload = require('express-fileupload');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const PORT=process.env.PORT || 3001;
const app = express();




app.use(cors({
    origin: ["http://localhost:3000"],
    method: ['GET', 'POST', 'DELETE'],
    credentials: true
}));
app.use(express.json())
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(session({
    key: "userId",
    secret: "cospas",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 24,
    },
}))

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'cospa'
})

// const db = new Pool({
//     host:'localhost',
//     user:'postgres',
//     password:'1996',
//     database:'cospa'
// })

//open db connection
db.connect(error => {
    
    if (!error) {
        console.log("Conneced to database");
    }
    else {
        throw error;
    }
});

//simple route
app.get('/', (req, res) => {
    res.send("<h1>Welcome to cospa malawi server</h1>");
});

app.post('/api/addActivity', (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    let targetFile = req.files.imgfile;
    let extName = path.extname(targetFile.name);

     let uploadDir = path.join(__dirname, '../cospa-organisation','public','uploads', targetFile.name);
     
    let imgList = ['.png','.jpg','.jpeg', '.PNG', '.JPG', '.webp'];
    // Checking the file type
    if(!imgList.includes(extName)  ){
      
        return res.json({submit:false,msg:"Only jpg ,jpeg and png"})
    }
   

    if(targetFile.size > 2000000 ){
       
       return res.json({submit:false,msg:"File should be less then 2 MB "})
    }
    
    targetFile.mv(uploadDir, (err) => {
        if (err) {
            return res.status(500).send(err);
        }
        else {
            const imgname = targetFile.name       
            const data = {                       
                title: req.body.title,               
                description: req.body.description,
                                    
                image: imgname,                
            };
            
            let sql = "INSERT INTO `activities` SET ?";
            db.query(sql, data, (err, result) => {             
                if (err){
                    console.log(err);                
                }           
                else {              
                    console.log("inserted");                
                            //  res.send(result);                   
                            // // res.send()               
                    res.json({ submit: true, fliname: targetFile.name, title: data.title, description: data.description })              
                }               
            })          
        }
    });

  
});


app.post('/api/addNews', (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    let targetFile = req.files.imgfile;
    let extName = path.extname(targetFile.name);

     let uploadDir = path.join(__dirname, '../cospa-organisation','public','uploads', targetFile.name);
     
    let imgList = ['.png','.jpg','.jpeg', '.PNG', '.JPG', '.webp'];
    // Checking the file type
    if(!imgList.includes(extName)  ){
      
        return res.json({submit:false,msg:"Only jpg ,jpeg and png"})
    }
   

    if(targetFile.size > 200000000 ){
       
       return res.json({submit:false,msg:"File should be less then 2 MB "})
    }
    
    targetFile.mv(uploadDir, (err) => {
        if (err) {
            return res.status(500).send(err);
        }
        else {
            const imgname = targetFile.name       
            const data = {                       
                title: req.body.title,               
                description: req.body.description,
                                    
                image: imgname,                
            };
            
            let sql = "INSERT INTO `news` SET ?";
            db.query(sql, data, (err, result) => {             
                if (err){
                    console.log(err);                
                }           
                else {              
                    console.log("inserted");                
                            //  res.send(result);                   
                            // // res.send()               
                    res.json({ submit: true, fliname: targetFile.name, title: data.title, description: data.description })              
                }               
            })          
        }
    });

  
});

// post admin route
app.post('/api/addAdmin', (req, res) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    db.query("INSERT INTO admins (fname, lname, email, username, password) VALUES(?,?,?,?,?)",
        [fname, lname, email, username, password],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send("Succesfully added admin")
        }
    })
})

//get admins route
app.post('/api/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query("SELECT * FROM admins WHERE username = ? AND password = ? ",
        [username, password],
        
        (err, result) => {
            
            if (err) {
                res.send({ err: err });
               
            }
            if (result.length > 0) {
                req.session.user = result;
                res.send(result);
            }
            else {
                res.send({ massage: "wrong username/password" });
            }
        });

});

app.get('/api/login', (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user });
    } else {
        res.send({ loggedIn: false });
    }
})

//get news route
app.get('/api/getNews', (req, res) => {

    db.query("SELECT * FROM news", (err, result) => {
        if (err) {
            res.send({err: err})
        } else {
            res.send(result);
        }
    })
})

//get activities route
app.get('/api/getActivities', (req, res) => {

    db.query("SELECT * FROM activities", (err, result) => {
        if (err) {
            res.send({ err: err })
        } else {
            res.send(result);
        }
    })
});

//delete activity route
app.delete('/api/delete/activity/:id', (req, res) => {
    const id = req.params.id
    db.query("DELETE FROM activities WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
        
    })
})


app.get('/api/getAdmis', (req, res) => {
    db.query("SELECT * from admins", (err, result) => {
        if (err) {
            console.log({err: err})
        } else {
            res.sed(result)
        }
    })
})

//delete news route
app.delete('/api/delete/news/:id', (req, res) => {
    const id = req.params.id
    db.query("DELETE FROM news WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
        
    })
})
app.listen(PORT , ()=>{
    console.log("app running on port 3001");
})