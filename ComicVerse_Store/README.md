# ComicVerse — Comic Book Store

A responsive comic-book store demo built with HTML, CSS and JavaScript, plus a basic Node.js HTTP server using the built-in `http` module.

## 1. Run locally with Node.js

1. Install Node.js from https://nodejs.org.
2. Open this folder in Visual Studio Code.
3. Open the terminal in this folder.
4. Run:

   ```bash
   node server.js
   ```

   Or run `npm start`.

5. Open http://localhost:3000 in your browser.

The Node.js server serves `index.html`, `style.css` and `script.js`. It returns HTTP 200 for available files and HTTP 404 for missing files.

## 2. Publish the website on GitHub Pages

**Important:** GitHub Pages hosts static websites. It does not run a Node.js server. The public GitHub Pages link will run the ComicVerse storefront, while `server.js` is run locally for the Node.js lab requirement.

1. Create or open your GitHub repository.
2. Upload the contents of this ZIP (the files inside `ComicVerse_Store`, not the outer folder) to the repository's root.
3. Commit the files to the `main` branch.
4. In GitHub, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch **main** and folder **/(root)**, then click **Save**.
7. Wait for deployment, then open the Pages URL shown in Settings → Pages.

For a repository named `ComicVerse9`, the URL will normally be:
`https://YOUR-USERNAME.github.io/ComicVerse9/`

Replace `YOUR-USERNAME` with your GitHub username.

## 3. Features

- Responsive comic-book storefront layout
- Eight sample comic titles with demo prices
- Category filters: Superhero, Sci-Fi and Fantasy
- Live comic search
- Add-to-cart counter and feedback message
- Node.js HTTP server on port 3000
- HTTP status codes and content-type response headers

## 4. Lab record summary

**Objective:** To develop a basic server-side application using Node.js and implement HTTP request handling.

**Result:** A ComicVerse comic-book store webpage was developed. The Node.js HTTP server serves the storefront files to browser clients through HTTP requests.

**Note:** Product listings, prices and cart interactions are demonstration data. No payment or real order processing is connected.
