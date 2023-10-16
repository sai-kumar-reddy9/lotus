const models = require('../../app_api/models/user')
/* GET 'menu' page */
const menu = (req, res) => {
    res.render('menu', { title: 'Menu' });
   };
/* GET 'about' page */
const about = (req, res) => {
    res.render('generic-text', { title: 'About' });
   };
 /* GET 'login' page */
const login = (req, res) => {
    res.render('login', { title: 'Login' });
   };
 /* GET 'contact' page */
 const contact = (req, res) => {
    res.render('contact', { title: 'Contact' });
       };

  //post send message
  const sai = (req,res) =>{
    
  }
  const review = (req,res) =>{
    console.log("fine");
     
    models.review.create({
      author:req.body.name,
      rating:req.body.rating,
      reviewText:req.body.review
    });
    res.render('index',{title:'Thank you'});
  }
    //contact page
  const contacts = (req,res) =>{
    console.log("contacts");

    models.Contact.create({
      name:req.body.name,
      email:req.body.email,
      message:req.body.message
    })

    res.render('index', {title:'thank you'});
  }
   module.exports = {
    menu,
    about,
    login,
    contact,
    sai,
    review,
    contacts
   };