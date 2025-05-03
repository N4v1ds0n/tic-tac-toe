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
| assets | [game.js](https://github.com/n4v1ds0n/tic-tac-toe/blob/main/assets/js/game.js) | ![screenshot](docs/testing/js/contact.png) |
| assets | [contact.js](https://github.com/n4v1ds0n/tic-tac-toe/blob/main/assets/js/game.js) | ![screenshot_1](docs/testing/js/game-1.png), ![screenshot_2](docs/testing/js/game-2.png), ![screenshot_3](docs/testing/js/game-3.png) |


## Accessibility

| Page | File |  Screenshot |
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
| Luthier-section | On home page, scroll down to luthier-section | I learn about luthier story and background | Works as expected |
| navbar | Toggle navbar, go to gallery section | get to gallery section | Works as expected |
| Gallery | view gallery pictures | see luthiers previous work | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-stories/userstory-2-1of4.png">
<img src="docs/user-stories/userstory-2-2of4.png">
<img src="docs/user-stories/userstory-2-3of4.png">
<img src="docs/user-stories/userstory-2-4of4.png">
</details>

3. As a user, I want to play with a friend.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| navbar | Toggle navbar, go to gallery section | get to gallery section | Works as expected |
| Gallery | view gallery pictures | see luthiers previous work | Works as expected |
| Gallery | listen to sound samples | hear guitar quality | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-stories/userstory-3-1of4.png">
<img src="docs/user-stories/userstory-3-2of4.png">
<img src="docs/user-stories/userstory-3-3of4.png">
<img src="docs/user-stories/userstory-3-4of4.png">
</details>

4. As a user, I want to track my wins.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Custom-guitar-section | On home page, scroll down to custom-guitar-section | I learn about custom-guitar-service | Works as expected |
| Customization-section | On home page, scroll down to customization-section | I learn about customization-service | Works as expected |
| navbar | Toggle navbar, go to "Our Workshop" | get to workshop section | Works as expected |
| Wood-section | On workshop page, scroll down to woods-section | I learn about woods | Works as expected |
| Pickup-section | On workshop page, scroll down to pickups-section | I learn about pickups | Works as expected |
| Hardware-section | On workshop page, scroll down to hardware-section | I learn about hardware | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-stories/userstory-4-1of6.png">
<img src="docs/user-stories/userstory-4-2of6.png">
<img src="docs/user-stories/userstory-4-3of6.png">
<img src="docs/user-stories/userstory-4-4of6.png">
<img src="docs/user-stories/userstory-4-5of6.png">
<img src="docs/user-stories/userstory-4-6of6.png">
</details>

5. As a user, I want to know how to improve at the game.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| navbar | Toggle navbar, go to any page| get to workshop section | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-stories/userstory-5-1of1.png">
</details>

6. As a user I want to learn about the premise of the game app.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Footer | Click contact form| get to contact form | Works as expected |
| form | use form for data input| data submitted | Works as expected |
| strategy | Success page pops up | data has been submitted | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-stories/userstory-6-1of4.png">
<img src="docs/user-stories/userstory-6-2of4.png">
<img src="docs/user-stories/userstory-6-3of4.png">
<img src="docs/user-stories/userstory-6-4of4.png">
</details>

7. As a user, I want to share feedback or contact the creator.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Footer | scroll to footer | get to contact information | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-stories/userstory-7-1of1.png">
</details>

8. As the site owner, I want users to give feedback on the site

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Footer | Click contact form | get redirected to 404 page | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-stories/userstory-8-1of1.png">
</details>

9. As the site owner, I want to provide my contact information to visitors interested in my work

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Footer | Click contact form| get to contact form | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-stories/userstory-9-1of1.png">
</details>