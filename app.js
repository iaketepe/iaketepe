const express = require('express');
const path = require("path"); 
const app = express();
const port = 3000

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.post('/submit', async (req, res) => {
  const { name, email, message, token } = req.body;

  // is cloudflare check done?
  validateTurnstile(token);
  // is data validated and correct?
    //name and the message are not null
    //email is valid email
  //validateEmailContent(name, email, message);
  // verify submission via node mailer
  // send submission via node mailer
  //verifyEmail();
  //sendEmail();
})



async function validateTurnstile(token) {
    try {
        const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                secret: process.env.TEST_KEY, //process.env.CFTOKEN_SECRET_KEY
                response: token,
            })
        });

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Turnstile validation error:', error);
        return { success: false, 'error-codes': ['internal-error'] };
    }
}

function validateEmailContent(name, email, message) {
  // const validator = require("validator");
}

function verifyEmail() {

}

function sendEmail() {

}