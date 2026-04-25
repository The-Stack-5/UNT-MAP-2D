# UNT MAP 2D Project

This project includes a Unity indoor navigation system and a React website that displays the Unity WebGL build.

---

## Project Structure

UNT-MAP-2D/
- Assets/
- Packages/
- ProjectSettings/
- Sprints/
- unt-map-website/
- README.md

---

## Unity Setup

Open the project in Unity Hub by selecting the main `UNT-MAP-2D` folder.

Unity version:

2022.3.62f3

---

## Website Setup

From the project root:

cd unt-map-website  
npm install  
npm run dev  

Open:

http://localhost:5173

---

## Electron Setup

From `unt-map-website`:

npm install  
npm run electron:dev  

To build the desktop app:

npm run electron:build

---

## MacBook Install Note

If `npm install` fails with an `esbuild` or macOS symbol error, try:

rm -rf node_modules package-lock.json  
npm install esbuild@0.17.19  
npm install  

Then run:

npm run dev  
npm run electron:dev  

---

## Updating the WebGL Build

After building WebGL in Unity, copy the updated build files into:

unt-map-website/public/map/

This folder should contain:

- Build/
- TemplateData/
- index.html

Then push the update:

git add .  
git commit -m "Update WebGL build"  
git push  

---

## Team Notes

- Unity handles navigation and pathfinding.
- The website displays the Unity WebGL build.
- Always pull before starting work.
- Do not commit `Library/` or `Temp/`.
- Avoid editing the same Unity scene at the same time.

---

## Common Issues

Missing dependency:

npm install <package-name>

No changes detected:

Make sure you are editing files inside the repo folder.

WebGL not updating:

Replace the files inside:

unt-map-website/public/map/

Electron not opening:

Make sure you are inside:

unt-map-website/

Then run:

npm install  
npm run electron:dev  

---

## Current Status

- Unity navigation working
- Website working
- WebGL integration working
- Electron setup added
