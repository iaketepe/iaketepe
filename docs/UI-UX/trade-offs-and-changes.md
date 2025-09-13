# UI/UX Trade Offs & Design Changes:

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
    - Depreciated vendor prefixes for common css attributes
    - Outdated CSS Grid implementation
    - Legacy row system implementation


## Handling Site Reliability
### Adding Spam Protection
Since I was considering adding a contact form, I would need to deal with the possibility of spam. To combat this, I wanted to implement bot detection software. At first, when it came to trying to implement this, I believed that I should do this through Google Captcha as that was the only technology that I knew could work in this context.
### Pros
- Google Captcha is a well known form of bot detection software
- It's very simple to use, and while most people understand how to interact with it
### Cons
