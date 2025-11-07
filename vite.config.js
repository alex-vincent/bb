import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Get the repository name from environment or use default
// For GitHub Pages: if repo is "username/repo-name", base should be "/repo-name/"
// For user/organization pages (username.github.io), base should be "/"
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'bb'
const base = process.env.GITHUB_PAGES === 'true' ? `/${repoName}/` : '/'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: base,
  build: {
    outDir: 'dist',
  },
})

