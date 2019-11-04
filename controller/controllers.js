const getRoot = (req, res) => { 
    res.json({ 
        status: 'Success', 
        message: 'Hello World' 
    }) 
} 

const getUser = (req, res) => { 
    res.json({
        message: 'All user', 
        user: [
            {name: 'Rijwan Hossain', isGraduate: true},
            {name: 'Rabia Akter Shima', isGraduate: false},
        ]
    })
} 

const login = (req, res) => { 
    res.json({ 
        message: 'Hello', 
        email: req.body.email, 
        password: req.body.password
    }) 
} 

const singleUser = (req, res) => { 
    console.log('ID: ' + req.params.id);
    let users = [
        {id: 1, name: 'Rabia'},
        {id: 2, name: 'Korim'},
        {id: 3, name: 'Rohim'},
        {id: 4, name: 'Supti'} 
    ] 

    let user = users.filter(function(user) {
        if(user.id == + req.params.id) {
            return user
        }
    })
    
    res.json({ 
        message: 'Hello', 
        user: user
    }) 
} 



module.exports = {
    getRoot, 
    getUser, 
    login, 
    singleUser
} 


// 