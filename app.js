const express = require('express');
const crypto = require('crypto');
const path = require("path"); 
const app = express();
const port = 3000

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public"));

app.use((_, res, next) => {
  const nonce = crypto.randomBytes(16).toString("base64");
  res.locals.nonce = nonce;
  next();
});

// Setting CSP Header
app.use((_, res, next) => {
  const nonce = res.locals.nonce;
  res.setHeader(
    "Content-Security-Policy",
    `default-src 'self'; base-uri 'self'; script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https://challenges.cloudflare.com; frame-src https://challenges.cloudflare.com; img-src 'self' data:; style-src 'self' 'nonce-${nonce}';`
  );
  next();
});

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`); //127.0.0.1
});

app.get('/', (_, res) => {
  res.render('index', { nonce: res.locals.nonce });
});

const nodemailer = require("nodemailer");

app.post('/submit', async (req, res) => {
  const { name, email, message, 'cf-turnstile-response': token } = req.body;
  //validation (cloudflare and email content)
  console.log(name, email, message, token);

  try {
    await validateTurnstile(token);
    validateEmailContent(name, email, message);
    //email submission process
    const carrier = initializeEmailCarrier();
    await verifyEmailConnection(carrier);
    await sendEmail(name, email, message, carrier);

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }

})



async function validateTurnstile(token) {
    try {
        const params = new URLSearchParams();
        params.append('secret', process.env.CFTOKEN_SECRET_KEY);
        params.append('response', token);
        const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: params.toString()
            /*body: JSON.stringify({
                secret: process.env.CFTOKEN_SECRET_KEY, //process.env.CFTOKEN_SECRET_KEY
                response: token,
            })*/
        });

        const result = await response.json();
        if (!result.success) {
          throw new Error("Turnstile verification failed");
        }
        return result;
    } catch (err) {
      // 3️⃣ Network or unexpected error
      console.error("Turnstile validation error: ", err);
      throw new Error("Failed Cloudflare Turnstile CAPTCHA");
    }
}

function validateEmailContent(name, email, message) {
  if (!name || !name.trim()) throw new Error("Name is required");
  if (!email || !/\S+@\S+\.\S+/.test(email)) throw new Error("Invalid email");
  if (!message || !message.trim()) throw new Error("Message is required");
  return true;
}

function initializeEmailCarrier() {
  const transporter = nodemailer.createTransport({
    service: process.env.SERVICE,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    secure: true,
  });

  return transporter;
}

async function verifyEmailConnection(carrier) {
  try {
    await carrier.verify();
  } catch (err) {
    console.error("Host connection failed. ", err);
    throw new Error("Could not connect to destination.");
  }
}

async function sendEmail(name, email, message, carrier) {
  try {
      const emailInTransit = await carrier.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `${name} sent you an email`,
      text: message
    });
  } catch (err) {
    console.error("Email couldn't be sent", err);
    throw new Error("Email couldn't be sent");
  }
}