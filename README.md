<div align="center">

# Roman Khan

**Digital Marketer · Video Creator · Computer Science Graduate**

A dark, motion-driven portfolio built on the Next.js App Router.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-20232a?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=0055FF)

</div>

<br>

<div align="center">

### Overview

</div>

A personal portfolio for Roman Khan, built as a single-page, section-based site covering his
introduction, project work, professional experience, education, and contact details. Rather than a
static page of blocks, the layout uses restrained motion and a consistent dark, gold-accented palette
so the interface responds to the visitor rather than sitting still.

<br>

<div align="center">

### How It Was Built

</div>

The site runs on the Next.js App Router, splitting work between Server and Client Components by what
each section actually needs — layout and static content render on the server, while interactive
pieces (the cursor, scroll-triggered animation, the contact modal) run on the client.

Content is separated from presentation entirely: every piece of copy, link, and structured list
(experience, education, skills) lives in one typed data module, so updating the site never means
touching component logic.

Motion is handled in two distinct layers. Framer Motion drives discrete animation — section entry
transitions, the experience timeline, card hover states — while a separate smooth-scroll layer governs
the page's overall scroll feel, independent of any single component. A custom cursor built on
spring-based motion values reacts to interactive elements, and disables itself automatically on touch
devices and when the visitor has reduced motion enabled at the OS level.

Styling runs on Tailwind's CSS-native theming — color, typography, and animation tokens are defined
once, in one place, rather than scattered across components or a separate config file.

<br>

<div align="center">

### Built With

| Layer | Technology |
|:--|:--|
| Framework | Next.js (App Router) |
| UI Library | React |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Smooth Scroll | Lenis |
| Icons | Lucide |

</div>

<br>

<div align="center">

### Project Structure

</div>

```
app/                 Page composition, layout, global styles
components/ui/        Section and interaction components
lib/                   Content data module and shared utilities
```

Each component owns a single section or a single interaction pattern — the cursor, the spotlight-card
effect, the smooth-scroll wrapper — rather than mixing several concerns into one file.

<br>

---

<br>

<div align="center">

### Contributing

</div>

Contributions are welcome.

- Fork the repository and work from a dedicated branch.
- Keep pull requests scoped to one change — a fix, a feature, or a refactor — rather than several
  unrelated changes at once.
- Match the existing structure: content stays in the data module, components stay single-purpose, and
  animations respect reduced-motion preferences.
- Explain what the change does and why in the pull request description.

Issues are welcome for bugs, accessibility gaps, or reasonable feature proposals. Please search
existing issues first to avoid duplicates.

<br>

---

<br>

<div align="center">

### License

Distributed under the MIT License. See `LICENSE` for details.

<br>

### Contact

**Roman Khan** · Peshawar, Pakistan

[Email](mailto:rk8128138@gmail.com) · [LinkedIn](https://linkedin.com/in/roman-khan-a28327290) · [YouTube](https://youtube.com/@romankhan-w4k)

</div>