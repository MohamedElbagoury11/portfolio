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

- Push this repo to GitHub (create a repo named e.g. `elbagoury-portfolio`).
- The included GitHub Actions workflow builds and deploys `dist/` to GitHub Pages on `main`.

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
