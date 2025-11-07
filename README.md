# Bed Bath & Beyond Canada Landing Page

A modern landing page for Bed Bath & Beyond Canada, built with React and Vite.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd bb
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## 📦 Build

To build for production:
```bash
npm run build
```

The built files will be in the `dist` directory.

## 🌐 Deploy to GitHub Pages

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

### Setup Instructions:

1. **Create a GitHub repository** (if you haven't already)

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

3. **Update the base path** (if needed):
   - If your repository name is different from `bb`, update the `base` path in `vite.config.js`
   - For a repository named `my-repo`, the base should be `/my-repo/`
   - For a user/organization page (`username.github.io`), the base should be `/`

4. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

5. **Automatic Deployment**:
   - The GitHub Actions workflow will automatically build and deploy your site
   - After pushing to the `main` branch, check the **Actions** tab in your repository
   - Once the workflow completes, your site will be available at:
     - `https://<username>.github.io/<repo-name>/` (for project pages)
     - `https://<username>.github.io/` (for user/organization pages)

### Manual Deployment

If you prefer to deploy manually, you can use the `gh-pages` package:

```bash
npm install --save-dev gh-pages
```

Then add to `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

And run:
```bash
npm run deploy
```

## 📝 Notes

- Image assets are currently using Figma API URLs (valid for 7 days). For production, download and host these images locally or use a CDN.
- The site is fully responsive and works on mobile, tablet, and desktop devices.

## 🛠️ Technologies

- React 18
- Vite
- CSS3

## 📄 License

This project is for Bed Bath & Beyond Canada.

