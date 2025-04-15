const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');

// Middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Session setup
app.use(session({
  secret: 'agromarket-secret',
  resave: false,
  saveUninitialized: true,
}));

// Dummy users (replace with DB later)
const USERS = [
  { email: 'farmer@example.com', password: 'password123', role: 'farmer' },
  { email: 'buyer@example.com', password: 'password456', role: 'buyer' }
];

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/loginfarmer.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/loginfarmer.html'));
});

app.get('/farmer-profile.html', (req, res) => {
  if (req.session.user && req.session.role === 'farmer') {
    res.sendFile(path.join(__dirname, 'public/farmer-profile.html'));
  } else {
    res.redirect('/loginfarmer.html');
  }
});

app.get('/buyer-profile.html', (req, res) => {
  if (req.session.user && req.session.role === 'buyer') {
    res.sendFile(path.join(__dirname, 'public/buyer-profile.html'));
  } else {
    res.redirect('/loginfarmer.html');
  }
});

// Login handler
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = USERS.find(u => u.email === email && u.password === password);

  if (user) {
    req.session.user = email;
    req.session.role = user.role;

    if (user.role === 'farmer') {
      res.redirect('/dashboardfarmer.html');
    } else if (user.role === 'buyer') {
      res.redirect('/buyer-profile.html');
    }
  } else {
    res.send('Invalid credentials. <a href="/loginfarmer.html">Try again</a>');
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

app.get('/auth-status', (req, res) => {
  if (req.session.user) {
    res.json({ loggedIn: true, user: req.session.user, role: req.session.role });
  } else {
    res.json({ loggedIn: false });
  }
});

// Registration (you can enhance this later)
app.post('/register', (req, res) => {
  // Registration logic here
  res.status(200).send("Registered!");
});

app.listen(5000, () => console.log('Server running on port 5000'));