# [Tic-Tac-Toe](https://n4v1ds0n.github.io/tic-tac-toe/)
(Developer: Damian Droste)

[![GitHub commit activity](https://img.shields.io/github/commit-activity/t/n4v1ds0n/tic-tac-toe)](https://www.github.com/n4v1ds0n/tic-tac-toe/commits/main)
[![GitHub last commit](https://img.shields.io/github/last-commit/n4v1ds0n/tic-tac-toe)](https://www.github.com/n4v1ds0n/tic-tac-toe/commits/main)
[![GitHub repo size](https://img.shields.io/github/repo-size/n4v1ds0n/tic-tac-toe)](https://www.github.com/n4v1ds0n/tic-tac-toe)

![amiresponsive-screenshot](./docs/amiresponsive.png)
[Page on AmIResponsive](https://ui.dev/amiresponsive?url=https://n4v1ds0n.github.io/tic-tac-toe)

Welcome to a game of Tic Tac Toe! Whether you want to play alone or with a friend, you are in for a good time. Please enjoy yourself

This site provides a user-friendly game platform to play the commonly known and popular game of Tic Tac Toe. 

## Table of Content

1. [Project Goals](#project-goals)
    1. [User Goals](#user-goals)
    2. [Site Owner Goals](#site-owner-goals)
2. [User Experience](#user-experience)
    1. [Target Audience](#target-audience)
    2. [User Requrements and Expectations](#user-requrements-and-expectations)
    3. [User Stories](#user-stories)
3. [Design](#design)
    1. [Design Choices](#design-choices)
    2. [Colour](#colours)
    3. [Fonts](#fonts)
    4. [Structure](#structure)
    5. [Wireframes](#wireframes)
4. [Technologies Used](#technologies-used)
    1. [Languages](#languages)
    2. [Frameworks & Tools](#frameworks-&-tools)
5. [Features](#features)
6. [Testing](#validation)
   
8. [Bugs](#Bugs)
9. [Deployment](#deployment)
10. [Credits](#credits)
11. [Acknowledgements](#acknowledgements)

## Project Goals

Tic-tac-toe is a classic doodle game that can be played anywhere if pen and paper are available and now also on your phone or computer.

### User Goals

- Play a classic game of Tic Tac Toe either solo or with a friend.
- Enjoy a simple, intuitive, and visually pleasing interface.
- Get immediate feedback on game outcomes.
- Reset or return to mode selection easily.
- Understand game rules and strategy through a helpful guide.


### Site Owner Goals

- Create an engaging and accessible browser-based game. with a competitive touch
- Showcase front-end development skills using HTML, CSS, and JavaScript.
- Implement responsive design and basic game logic with animations and UI feedback.
- Provide a functional and visually consistent portfolio piece.
- ensure cross-device compatibility

## User Experience


### Target Audience
- casual web users and gamers
- users looking for a game with minimal commitment
- People learning about classic games or simple AI.
- Recruiters or instructors evaluating front-end development projects..


### User Requirements and Expectations

- Fast page load and responsiveness across devices.
- Clear interface with easy-to-understand navigation.
- Intuitive game mechanics and immediate response to interactions.
- Visually engaging yet minimal layout.
- No installation or sign-up needed.


### User Stories

#### User

1. As a user, I want to be able to choose a game mode.
2. As a user, I want to choose a difficulty level when playing alone.
3. As a user, I want to play with a friend.
4. As a user, I want to track my wins.
5. As a user, I want to know how to improve at the game.
6. As a user I want to learn about the premise of the game app.
7. As a user, I want to share feedback or contact the creator.

#### Site Owner

8. As the site owner, I want users to give feedback on the site
9. As the site owner, I want to provide my contact information to visitors interested in my work

## Design

### Design Choices

The design of the game prioritizes a clean, modern, and minimalistic aesthetic, using a high-contrast color palette to ensure readability and ease of interaction. The user interface is visually engaging with subtle animations for transitions, such as fade-ins for the game board and scoreboard, creating a smooth and dynamic experience. Responsive design ensures the game adapts seamlessly to different screen sizes, maintaining its visual appeal on both desktop and mobile devices.

### Colours
The color palette for the game features a combination of deep, muted blues and vibrant cyan highlights, creating a sleek, modern, and engaging user interface. The dark blues provide a strong, minimalist foundation for the background and overall structure, while the bright cyan highlights bring attention to interactive elements like buttons and winning cells. This balance between subtle tones and energetic accents enhances both usability and visual appeal, ensuring an immersive yet accessible gaming experience.

![color palette](./docs/color-palette.png)

### Fonts

- The **Roboto** typeface is used project-wide for a cohesive and modern appearance.
- Roboto provides excellent readability across all screen sizes and UI elements.
- Its various weights (regular, medium, bold) allow for clear text hierarchy without requiring additional font families.

### Structure

The game app is structured in a clear and user-friendly manner. The user starts on the **Home (index.html)** which is also the game entry point and interactive board. Via the collapsable navbar the user can access the other pages:
- **About** – Project purpose, technologies, and overview.
- **Strategy Guide** – Instructions and tips for playing.
A **404 Page** provides a custom not-found page with navigation back to anywhere in the app.
The contact us link in the footer provides **Contact form** To get in contact with questions or suggestions.

### Wireframes


<details><summary>index</summary>
<img src="docs/wireframes/index.png">
</details>
<details><summary>index-difficulty</summary>
<img src="docs/wireframes/index-2.png">
</details>
<details><summary>index-singleplayer</summary>
<img src="docs/wireframes/index-3.png">
</details>
<details><summary>index-multiplayer</summary>
<img src="docs/wireframes/index-4.png">
</details>
<details><summary>Contact</summary>
<img src="docs/wireframes/contact.png">
</details>
<details><summary>About</summary>
<img src="docs/wireframes/about.png">
</details>
<details><summary>Strategy Guide</summary>
<img src="docs/wireframes/strategy.png">
</details>
<details><summary>404</summary>
<img src="docs/wireframes/404.png">
</details>


## Technologies Used

### Languages
- HTML5 -Structure of the website.
- CSS3 - Styling and layout.
- JavaScript - Game logic and interactivity

### Frameworks & Tools
- Git (repo management)
- GitHub (storage and deployment)
- CorelDraw2024 (designing icons and logos, editing screenshots)
- Balsamiq (wireframing)
- Google Fonts 
- Favicon.io
- shields.io
- JSHint
- Lighthouse
- W3C Markup validation service
- W3C Jigsaw CSS validation service
- WAVE WebAIM web accessibility evaluation tool
- EmailJS
- Font Awesome (Social Media Icons)
- OpenAI (research and code review)

## Features

### Header
- Featured on all pages
- contains the navbar including a homing logo and the page title

<details><summary>Header</summary>
<img src="docs/feat/header-1.png">
<img src="docs/feat/header-2.png">
<img src="docs/feat/header-3.png">
</details>

### Footer
- Featured on all pages
- shows creator of page
- provides social links of site owner
- links to contact form
- User stories 7, 8, 9 covered

<details><summary>Footer</summary>
<img src="docs/feat/footer.png">
</details>

### Mode Selection Interface
- Choose between Single Player and Multiplayer.
- User story 1 covered

<details><summary>Mode Selection</summary>
<img src="docs/feat/mode-selection.png">
</details>

### Difficulty Levels for Single Player
- Select Easy, Medium, or Hard AI difficulty.
- User story 2 covered

<details><summary>Difficulty Selection</summary>
<img src="docs/feat/difficulty-selection.png">
</details>

### Multi Player with Turn-Based Gameplay 
- Real-time turn indication for players (e.g., "It's your turn, Player X").
- User story 3 covered

<details><summary>Turn Indicator</summary>
<img src="docs/feat/turn-indicator.png">
</details>

### Interactive Game Board
- 3x3 grid dynamically rendered and responsive to player input.

<details><summary>Game Board</summary>
<img src="docs/feat/game-board-1.png">
<img src="docs/feat/game-board-2.png">
</details>

### Game Outcome Feedback
- Custom alert box displays outcome (win/lose/draw).

<details><summary>Outcome Alerts</summary>
<img src="docs/feat/win-alert.png">
<img src="docs/feat/draw-alert.png">
</details>

### Score Tracking
- Scoreboard updates player scores after each round.
- User story 4 covered

<details><summary>Score Board</summary>
<img src="docs/feat/scoreboard-1.png">
<img src="docs/feat/scoreboard-2.png">
</details>

### Reset / Replay Options
- Automatic "New Game"
- "Back to Mode Selection" button for resetting the game setup.

<details><summary>Auto New and Back Button</summary>
<img src="docs/feat/auto-new-and-back-btn.png">
</details>

### About Page
- Provides background and purpose of the Tic Tac Toe project.
- User story 6 covered

<details><summary>About</summary>
<img src="docs/feat/about.png">
</details>

### Strategy Guide Page
- Offers tips and tactics for improving Tic Tac Toe gameplay.
- User story 5 covered

<details><summary>Strategy Guide</summary>
<img src="docs/feat/strategy.png">
</details>

### Contact Form
- Contact site owner to give feedback
- Feedback message for successful submission
- User story 8 covered

<details><summary>Contact Form</summary>
<img src="docs/feat/contact.png">
<img src="docs/feat/contact-success.png">
</details>

### 404 Page
- Informs the user of a bad link and offers navigation back to other pages.
(Relevant user stories: 8)

<details><summary>404</summary>
<img src="docs/feat/404.png">
</details>


## Validation

Please refer to [testing.md](testing.md) file.



## Bugs
| **Bug** | **Fix** |
| ----------- | ----------- |
| The score doesn't reset after returning to mode select | Add score reset to back to mode select button |
| page title doesn't stay centered on larger screens | Add media query |
| player names are not shown correctly for single player | Adjust render-board function for custom player naming  |
| Size of game-board exceeds screen size and scoreboard is pushed behind footer | Adjust max. grid size to make board responsive and descriptions stay visible |
| Player markers were not consistant in size over various screen sizes | Adjust font-size of markers to be responsive to card size of the grid  |
| On larger screens texts of about.html and strategy guide were stretched over screen width | Put text fields in a flexbox and adjusted max width and centered texts  |
| The mode and difficulty selection buttons returned a low contrast error | Change the button background-colour to a darker colour from the palette  |
| CSS code for roboto Google font had stylings that provoked errors in CSS validation | Remove stylings as they were redundant  |
| JShint flagged emailjs as an undefined variable because it came from an external script | Definine emailjs as a global variable  |


## Deployment
The website has been deployed on GitHub Pages. This can be done in the settings of the repository.
1. In settings choose Pages
2. Set the source to master
3. Refres the page and at the top it should say: "Your site is published at https://username.github.io/repo-name/"
- note that unless you're on a pro plan you can only publish on pages, if your repo is public.

If you are interested in forking the repository this can be done in the repo itself. There is a button in the top right corner resembling a forked road.

You can clone the repository by following these steps:

1. Go to the GitHub repository.
2. Locate and click on the green "Code" button at the very top, above the commits and files.
3. Select whether you prefer to clone using "HTTPS", "SSH", or "GitHub CLI", and click the "copy" button to copy the URL to your clipboard.
4. In your IDE open "Git Bash" or "Terminal".
5. Make sure the current working directory is the location where you want the cloned directory.
6. In your IDE Terminal, type the following command to clone the repository:
    git clone https://www.github.com/username/repo-name
7. Press "Enter" to create your local clone.

### EmailJS API
1. Go to https://www.emailjs.com and create an account.
2. After logging in:
    - Go to Email Services and connect an email provider (e.g., Gmail).
    - Go to Email Templates and create a new template with fields like from_name, reply_to, message.
    - Go to Integration > API Keys and copy your User/Public Key.
3. Update your contact form to provide the variables
4. At the bottom of your html, before </body>, add:
    ```
    "<script src="https://cdn.emailjs.com/dist/email.min.js"></script>
    <script>
    (function() {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual Public Key
    })();

    document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
      .then(function() {
        alert('Message sent successfully!');
      }, function(error) {
        alert('FAILED... ' + JSON.stringify(error));
      });

    this.reset();
    });
    </script>"
    ```
5. Replace:
    - YOUR_PUBLIC_KEY → your EmailJS Public Key
    - YOUR_SERVICE_ID → your connected email service
    - YOUR_TEMPLATE_ID → your created email template

## Credits

### Media
- The game is of course inspired by the classc Tic Tac Toe game.
- All images are owned and created by the developer.
- The inspiration to use the Minimax algorithm for a smartAI came from chatGPT as well as help with         implementation
- Icons used for social media links in footer: [Font Awesome](https://fontawesome.com/)



### Code
- The navbar code was taken from Bootstrap v5.0 library and adjusted to individual needs
- The code to create the 404 permalink in 404.md was created with the help of chatgpt
- Email sending JavaScript API code was written with instructions from chatgpt




## Acknowledgements

Last but not least I would like to thank :
- My mentor Mo Shami for his very helpful advice and guidance as well as feedback on my work.
- My wife for her design advice and testing the page now and then.