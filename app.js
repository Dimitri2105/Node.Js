const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const Product = require('./models/product')
const UserInfo = require('./models/user')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next) =>{

  UserInfo.findByPk(1)
  .then(user =>{
    req.user = user
    next();

  })
  .catch(error=> console.log(error))

})

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(UserInfo,{constraints:true, onDelete:'CASCADE'})
UserInfo.hasMany(Product)

sequelize
  .sync()
  .then(result => {
    return UserInfo.findByPk(1)
  })
  .then( user =>{
    if(!user){
      UserInfo.create({name:"karan Thakur" , email:"karanthakur577@gmail.com"})
    }
    return user
  })
  .then( user =>{
    // console.log(user)
    app.listen(3000)
  })
  .catch(err => {
    console.log(err);
  });
