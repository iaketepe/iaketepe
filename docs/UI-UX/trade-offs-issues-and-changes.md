# UI/UX Trade Offs, Issues & Design Changes:

## Using Boilerplate vs Starting From the Ground Up

### Pros
- Templates (Boilerplates, etc) have been used by professionals in everyday work, so using one is reasonable.
- Using Templates mimics real world work
  - Companies/Clients will have their own aesthetic and basic web design. Working with boilerplates is similar to that.
  - Working with boilerplate would allow me to work with foreign ui; dealing with systems that I wouldn't initially be familiar with, learn what makes it work, and improve it while retaining what made the design good in the first place.
- Generative tools (AI) can make it easier to start from scratch, narrowing the percieved gap in skill.
### Cons
- Using a boilerplate, means that I wouldn't have started from the ground up.
### Result
Decision: I've decided to work with a boilerplate. 


#### Reference to Boilerplate:

/// Solid State by HTML5 UP
/// html5up.net | @ajlkn
/// Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)

## Dealing with Boilerplate
### Dealing with Boilerplate is Difficult
- The boilerplate I chose appears to be roughly 10-15 years old, containing vast amounts of legacy code
  - Issues include:
    - Over 4000+ lines of code in a single css file alone.
    - Depreciated vendor prefixes for common css properties
    - Outdated CSS Grid implementation
    - Legacy row system implementation
- Other than the CSS issues I mentioned previously, there also SCSS issues on top of that. It seems like the boilerplate was built from those SCSS files into one main.css file. So something I have to consider is whether or not I should remove the SCSS or try to modify it and then build from them as well.

## Deploying the Site
### Deploying before Completion
- When I was planning development, I wanted to start by completing the core aspects of the site first. Afterwards, I would deploy the site, adding more later on. However, as I actually started developing, I realized that I had already made great strides on the project. So it was better to showcase what I had done, gradually adding changes over time. Not only does this allow me to quickly present my work and thought process, it lets my workflow mimic actual development.

### Handling Email Submissions
- When it came to handling email submissions, I wanted to see if I could implement a contact form. It was possible to just remove the contact form segment, replace it with a :mailto hyperlink. However, I believed that actually realizing the contact form would be insightful.
#### Nodemailer vs Cloud Delivery Service (Postmark, etc)
  - The next issue came down to how I was planning on implementing the actual connection. I had two options:
    - Implement the submission myself via nodemailer
    - Try to find a cloud delivery service to connect to.
      - Postmark
      - SendGrid
      - MailGun
      - MessageBird (formerly SparkPost)
      - MailChimp Transactional (formerly Mandrill)
  - After doing some research, I believed the best choice was to use nodemailer. Most of the cloud services I looked at had no long-lasting free option. Those that did have a very low message sending limit compared to the results of just creating a completely seperate email and relying on the email provider's built-in message limits.
  - That said, as I improve the project over time, I may circle back to this idea.
#### Notable Bugs
- Dealing with FormBody Data being undefined
  - captcha failed because there was no token being sent from the form.
  - [removed overriding attributes from the tokens html element, ammended related code](https://github.com/iaketepe/iaketepe/commit/ae755cedbf38bfdc7004069dc64fbcf987e1b4ce).
- Invalid login credentials despite valid SMTP credentials
  - [explicitly added nodemailer's secure: true line to pass implicit provider rejection during submission](https://github.com/iaketepe/iaketepe/commit/4358823ea6a3b6066ad93476bf376b2e7f604662).

## Handling Site Reliability
### Adding Spam Protection
Since I was adding a contact form, I needed to deal with the possibility of spam. To combat this, I wanted to implement bot detection software. At first, when it came to trying to implement this, I believed that I should do this through Google Captcha as that was the only technology that I knew could work in this context. However after doing some research, I realized that there may or may not be GDPR compliance issues with Google Captcha as well as Google Fonts. Even though GDPR compliance specifically for the EU, since all nations are connected, trying to look for alternatives that work in line overseas will align well overall. This brings me to the other option, Cloudflare Turnstile.

#### [Google Captcha](https://cloud.google.com/security/products/recaptcha?hl=en)
##### Pros
- Google Captcha is a well known form of bot detection software
- It's very simple to use, and while most people understand how to interact with it
##### Cons
- May or may not be GDPR compliant
- - Will take time to implement

#### [Cloudflare Turnstile](https://www.cloudflare.com/en-ca/application-services/products/turnstile/)
##### Pros
- Cloudflare Turnstile is another form of bot detection software developed by a well known company
- Requires less effort to do, no user puzzles to solve
- It's very simple to use, most people who have dealt with Google Captcha will have a similar time with it
- [Aligned Policies with GDPR requirements](https://www.cloudflare.com/trust-hub/gdpr/)
- EU-US Data Privacy Framework Certified
##### Cons
- Will take time to implement

##### Result
Overall, I believed Cloudflare's Turnstile was the better decision.


