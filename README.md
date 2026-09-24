# Kaushik Kumar Mohanta | Portfolio

A personal developer portfolio with a dark, code-editor-inspired interface. It introduces who I am, what I know, and what I have built, using a typewriter intro, animated editor windows, and a looping video background.

**Live site:** https://kaushik00101.github.io/Portfolio/

<!-- Add a screenshot of your site here:
![Portfolio preview](preview.png)
-->

## Features

- **Animated hero:** my name is typed out letter by letter next to a mini code editor that types out a Python-style profile with syntax highlighting.
- **Video background:** a muted, looping background video slowed down to half speed so it stays calm behind the content.
- **Editor-style About section:** my introduction is presented as an `about_me.txt` file, complete with line numbers and a status bar.
- **Skills section:** each skill is shown as a card with a progress bar that animates when it scrolls into view.
- **LeetCode card:** a profile screenshot and a link to my LeetCode profile.
- **Project cards:** each card shows a description and language tags, links to the GitHub repository, and opens the live project when clicked. Cards also work with the keyboard (Enter or Space).
- **Contact form:** messages are sent to my email through [FormSubmit](https://formsubmit.co), with a honeypot field to reduce spam.
- **Scroll animations:** sections fade in as you scroll using AOS.
- **Go-to-top button:** scrolls back up and replays the typing animations.
- **Responsive layout:** adapts to tablet and mobile screens.

## Sections

| Section | What it contains |
| --- | --- |
| Home | Typewriter greeting and animated code editor |
| About | Who I am, what drives me, and quick facts |
| Skills | HTML & CSS, JavaScript, Django, MySQL, Git & GitHub, DSA, Python, C++, LeetCode |
| Projects | Vatavaranam, Calculator, Baripada-Portal, Portfolio |
| Contact | Email, GitHub, LeetCode, LinkedIn, and a message form |

## Featured Projects

- **[Vatavaranam](https://github.com/kaushik00101/Vatavaranam):** a responsive weather app that shows real-time atmospheric data and forecasts.
- **[Calculator](https://github.com/kaushik00101/Calculator):** a responsive web calculator with real-time input parsing and a clean grid layout.
- **[Baripada-Portal](https://github.com/kaushik00101/Baripada-Portal):** a city information platform covering local news, events, attractions, businesses, and public services.
- **[Portfolio](https://github.com/kaushik00101/KKM-Portfolio):** this website.

## Built With

- **HTML5**, **CSS3**, and **vanilla JavaScript**
- [AOS](https://michalsnik.github.io/aos/) (Animate On Scroll) v2.3.1
- [csshake](https://elrumordelaluz.github.io/csshake/) for the logo shake effect
- [Google Fonts](https://fonts.google.com/): Space Mono and Silkscreen
- [FormSubmit](https://formsubmit.co) for the contact form

## Project Structure

```
Portfolio/
├── index.html                       # Page structure and content
├── style.css                        # All styling and responsive rules
├── script.js                        # Typewriter, code editor, and scroll animations
├── 315602_medium.mp4                # Background video
├── Kitty.jpeg                       # Logo image
├── night-mode.png                   # Theme icon
├── brightness (2).png               # Theme icon
├── upload.png                       # Icon
├── Screenshot 2026-08-25 210715.png # LeetCode profile screenshot
└── README.md
```

## Run Locally

No build step or dependencies are needed.

```bash
# 1. Clone the repository
git clone https://github.com/kaushik00101/KKM-Portfolio.git

# 2. Open the folder
cd KKM-Portfolio

# 3. Open index.html in your browser
```

You can also use the **Live Server** extension in VS Code for automatic reloading while you edit.

> An internet connection is needed for the fonts, AOS, and the contact form.

## Customize It

- **Name and intro text:** edit `nameText` and `editorLines` in `script.js`.
- **About text:** edit the lines inside the `#about` section of `index.html`.
- **Skills:** edit the `data-width` value on each `.skill-bar-fill` (and the matching percentage label).
- **Projects:** duplicate a `.project-card` block, then update its title, description, tags, and links.
- **Contact form:** replace the email address in the form `action` URL with your own.
- **Colors and layout:** edit `style.css`.

## Contact

- **Email:** kaushikkumarmohanta369@gmail.com
- **GitHub:** [@kaushik00101](https://github.com/kaushik00101)
- **LinkedIn:** [kaushik-kumar-mohanta](https://www.linkedin.com/in/kaushik-kumar-mohanta/)
- **LeetCode:** [kaushikkumarmohanta](https://leetcode.com/u/kaushikkumarmohanta/)

## License

&copy; 2026 Kaushik Kumar Mohanta. All rights reserved.
