# Elbagoury Portfolio

This repository contains a Vite + React portfolio.

Quick start

```bash
npm install
npm run start
# build
npm run build
# preview built site
npm run preview
```

Deploying to GitHub Pages

This project is configured for GitHub Pages deployment. The repository is already set up at: `https://github.com/MohamedElbagoury11/portfolio`

**To enable GitHub Pages:**

1. Go to your repository on GitHub: `https://github.com/MohamedElbagoury11/portfolio`
2. Click on **Settings** (in the repository menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - **Deploy from a branch**: `gh-pages` branch, `/ (root)` folder
   - OR **GitHub Actions** (if you prefer using the workflow directly)
5. Click **Save**

**Automatic Deployment:**
- The included GitHub Actions workflow (`deploy-gh-pages.yml`) automatically builds and deploys your site to the `gh-pages` branch whenever you push to `main`
- Your site will be available at: `https://mohamedelbagoury11.github.io/portfolio/`
- The first deployment may take a few minutes. You can check the progress in the **Actions** tab

**Note:** The project is configured with base path `/portfolio/` to match the repository name. If you change the repository name, update `vite.config.ts` accordingly.

If you want me to archive duplicates (root `src/`, root `index.html`, `dist/`, `assets` build files, `server/`, `script/`), reply and I'll move them into `important_files/archive/` (non-destructive).

Image consolidation

- Copy generated images into the public folder before building so Vite includes them:

	- Source: `attached_assets/generated_images/`
	- Destination: `client/public/images/`

	Example (PowerShell):

	```powershell
	mkdir client\public\images -ErrorAction Ignore
	Copy-Item attached_assets\generated_images\* client\public\images\
	```

	Example (cmd):

	```cmd
	if not exist client\public\images mkdir client\public\images
	xcopy /Y attached_assets\generated_images\* client\public\images\
	```

- Remove duplicate PNGs from `assets/` (optional) after verifying images are in `client/public/images/`:

	```powershell
	Remove-Item assets\* -Include *-DsZJKbuG.png,*-Dre2xKjy.png,*-BEDEhpX8.png,*-CA03lXeU.png
	```

	Or in `cmd`:

	```cmd
	del assets\e-commerce_mobile_app_mockup-DsZJKbuG.png
	del assets\fitness_app_mockup-Dre2xKjy.png
	del assets\soft_abstract_glassmorphism_background-BEDEhpX8.png
	del assets\task_management_app_mockup-CA03lXeU.png
	```
