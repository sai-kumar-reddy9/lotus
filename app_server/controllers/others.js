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

   module.exports = {
    menu,
    about,
    login,
    contact
   };