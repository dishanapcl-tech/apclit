# APCL Multi-page Company Website

React + Vite + Tailwind CSS website based on the supplied 29-page APCL company profile.

## Pages
Home, About Us, Our Team, Design Division, Testing Division, Projects, Instruments, Clients, Contact.

## Run locally
1. Install Node.js LTS from https://nodejs.org/
2. Extract this ZIP and open the `apcl-multipage-website` folder in VS Code.
3. Open Terminal > New Terminal.
4. Run `npm install`
5. Run `npm run dev`
6. Open the localhost URL Vite shows, commonly http://localhost:5173.

## Build for existing hosting
Run `npm run build`. Upload the **contents** of `dist/` to the document root for `www.apcl.lk` (often `public_html` in cPanel). Back up the old website before replacing anything.

React Router sub-pages need a server fallback to `index.html`. For Apache/cPanel, place the included `.htaccess` in the document root. If hosting is not Apache, ask the hosting provider for an SPA fallback/rewrite rule.

Do not change DNS or email records just to upload the files.

## Team photographs
The company profile provides portraits for the founder and one senior leader. Other team members use initials until approved headshots are provided. Put each approved photo in `public/images/` and add its path in `src/data.js`.

## Verify before publication
Confirm current team roles, qualifications, contact details, certification status, project status, client-name permissions and instrument inventory. The form uses `mailto:` and does not store enquiries or submit directly to a server.
