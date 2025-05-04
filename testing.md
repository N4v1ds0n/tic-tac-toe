# Testing

 1. [HTML Validation](#HTML-validation)
 2. [CSS Validation](#CSS-validation)
 3. [JS Validation](#JS-Validation)
 4. [Accessibility](#accessibility)
 5. [Performance](#performance)
 6. [Device testing](#performing-tests-on-various-devices)
 7. [Browser compatibility](#browser-compatability)
 8. [Testing user stories](#testing-user-stories)

> Return back to the [README.md](readme.md) file.

## Code Validation

### HTML-validation

[HTML W3C Validator](https://validator.w3.org) was used to validate html pages:

| Directory | File | URL | Screenshot |
| --- | --- | --- | --- |
| root | [404.html](https://github.com/n4v1ds0n/tic-tac-toe/blob/main/404.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https://n4v1ds0n.github.io/tic-tac-toe/404.html) | ![screenshot](docs/testing/html/404.png) |
| root | [about.html](https://github.com/n4v1ds0n/tic-tac-toe/blob/main/about.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https://n4v1ds0n.github.io/tic-tac-toe/about.html) | ![screenshot](docs/testing/html/about.png) |
| root | [contact.html](https://github.com/n4v1ds0n/tic-tac-toe/blob/main/contact.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https://n4v1ds0n.github.io/tic-tac-toe/contact.html) | ![screenshot](docs/testing/html/contact.png) |
| root | [index.html](https://github.com/n4v1ds0n/tic-tac-toe/blob/main/index.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https://n4v1ds0n.github.io/tic-tac-toe/index.html) | ![screenshot](docs/testing/html/index.png) |
| root | [strategy.html](https://github.com/n4v1ds0n/tic-tac-toe/blob/main/strategy.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https://n4v1ds0n.github.io/tic-tac-toe/strategy.html) | ![screenshot](docs/testing/html/strategy.png) |


### CSS-validation

[CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) was used to validate the custom stylesheet.

| Directory | File | URL | Screenshot |
| --- | --- | --- | --- |
| assets | [style.css](https://github.com/n4v1ds0n/tic-tac-toe/blob/main/assets/css/style.css) | [CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https://n4v1ds0n.github.io/tic-tac-toe) | ![screenshot](docs/testing/css/style.png) |

### JS-validation

[JShint Validator](https://jshint.com/) was used to validate JavaScript scripts.

| Directory | File | Screenshot |
| --- | --- | --- |
| assets | [contact.js](https://github.com/n4v1ds0n/tic-tac-toe/blob/main/assets/js/contact.js) | ![screenshot](docs/testing/js/contact.png) |
| assets | [game.js](https://github.com/n4v1ds0n/tic-tac-toe/blob/main/assets/js/game.js) | ![screenshot_1](docs/testing/js/game-1.png), ![screenshot_2](docs/testing/js/game-2.png), ![screenshot_3](docs/testing/js/game-3.png) |


## Accessibility

| Page | File | URL | Screenshot |
| --- | --- | --- | --- |
| 404 | [404.html](https://github.com/n4v1ds0n/tic-tac-toe/blob/main/404.html)| [WAVE Report](https://wave.webaim.org/report#/https://n4v1ds0n.github.io/tic-tac-toe/404)| ![screenshot](docs/testing/access/404.png) |
| about | [about.html](https://github.com/n4v1ds0n/tic-tac-toe/blob/main/about.html)| [WAVE Report](https://wave.webaim.org/report#/https://n4v1ds0n.github.io/tic-tac-toe/about.html)| ![screenshot](docs/testing/access/about.png) |
| contact| [contact.html](https://github.com/n4v1ds0n/tic-tac-toe/blob/main/contact.html)| [WAVE Report](https://wave.webaim.org/report#/https://n4v1ds0n.github.io/tic-tac-toe/contact.html)| ![screenshot](docs/testing/access/contact.png) |
| index | [index.html](https://github.com/n4v1ds0n/tic-tac-toe/blob/main/index.html)| [WAVE Report](https://wave.webaim.org/report#/https://n4v1ds0n.github.io/tic-tac-toe/index.html)| ![screenshot](docs/testing/access/index.png) |
| strategy | [strategy.html](https://github.com/n4v1ds0n/tic-tac-toe/blob/main/strategy.html)| [WAVE Report](https://wave.webaim.org/report#/https://n4v1ds0n.github.io/tic-tac-toe/strategy.html)| ![screenshot](docs/testing/access/strategy.png) |


## Performance

| Page | File | Screenshot |
| --- | --- | --- |
| 404 | [404.html](https://github.com/n4v1ds0n/tic-tac-toe/blob/main/404.html)| ![screenshot](docs/testing/perf/404.png) |
| about | [about.html](https://github.com/n4v1ds0n/tic-tac-toe/blob/main/about.html)| ![screenshot](docs/testing/perf/about.png) |
| contact | [contact.html](https://github.com/n4v1ds0n/tic-tac-toe/blob/main/contact.html)| ![screenshot](docs/testing/perf/contact.png) |
| index | [index.html](https://github.com/n4v1ds0n/tic-tac-toe/blob/main/index.html)| ![screenshot](docs/testing/perf/index.png) |
| strategy | [strategy.html](https://github.com/n4v1ds0n/tic-tac-toe/blob/main/strategy.html)| ![screenshot](docs/testing/perf/strategy.png) |

### Performing tests on various devices
The pages were testet on:
- Desktop pc
- Samsung Galaxy A52
- Samsung Galaxy A...
- Kindle fire tablet

### Browser compatibility

- Mozilla Firefox
- Google Chrome
- Microsoft Edge

### Testing user stories

1. As a user, I want to be able to choose a game mode.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Mode Selection | On home page, click on single- or multiplayer button | Reach difficulty selection for singleplayer or start a multiplayer game | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-stories/userstory-1-1of3.png">
<img src="docs/user-stories/userstory-1-2of3.png">
<img src="docs/user-stories/userstory-1-3of3.png">
</details>

2. As a user, I want to choose a difficulty level when playing alone.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Difficulty Selection | After choosing single player mode, click easy medium or hard button | start a game with respective difficulty | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-stories/userstory-2-1of2.png">
<img src="docs/user-stories/userstory-2-2of2.png">
</details>

3. As a user, I want to play with a friend.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Multi Player with Turn-Based Gameplay | In mode selection click multiplayer | start a multiplayer game | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-stories/userstory-3-1of2.png">
<img src="docs/user-stories/userstory-3-2of2.png">
</details>

4. As a user, I want to track my wins.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Game Outcome Feedback | Play a game until its over | Receive an outcome alert and the score is updated | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-stories/userstory-4-1of2.png">
<img src="docs/user-stories/userstory-4-2of2.png">
</details>

5. As a user, I want to know how to improve at the game.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Strategy Guide Page | Go to page via navigation | Receive a number of strategy hints and tips | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-stories/userstory-5.png">
</details>

6. As a user I want to learn about the premise of the game app.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| About page| Go to page via navigation| Receive a short text explainig the project scope and game logic | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-stories/userstory-6.png">
</details>

7. As a user, I want to share feedback or contact the creator.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Footer | click Contact us | Get to contact form | Works as expected |
| Contact Form | Enter information and click submit | receive confirmation message | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-stories/userstory-7-1of3.png">
<img src="docs/user-stories/userstory-7-2of3.png">
<img src="docs/user-stories/userstory-7-3of3.png">
</details>

8. As the site owner, I want users to give feedback on the site

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Contact Form| User submits information | emailjs sends message to site owner | Works as expected |

<details><summary>Screenshots</summary>
No screenshots available. But emails are received by site owner.
</details>

9. As the site owner, I want to provide my contact information to visitors interested in my work

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Footer | Click github or linkedin icon| Get to site owners profiles | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-stories/userstory-9.png">
</details>