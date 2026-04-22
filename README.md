# UNT MAP 2D Project

This project includes a Unity-based indoor navigation system and a React website that displays the Unity WebGL build.

---

## Project Structure

UNT-MAP-2D/
- Assets/
- Packages/
- ProjectSettings/
- unt-map-website/
- Sprints/
- README.md

---

## Setup

### Clone the repo
git clone https://github.com/The-Stack-5/UNT-MAP-2D.git  
cd UNT-MAP-2D

---

## Unity

1. Open Unity Hub  
2. Add project → select UNT-MAP-2D  

Unity version:
2022.3.62f3

---

## Website

cd unt-map-website  

Install dependencies:
npm install  
npm install lucide-react  

Run:
npm run dev  

Open:
http://localhost:5173

---

## Updating the WebGL Build

After building in Unity, copy the following into:

unt-map-website/public/map/

- Build/
- TemplateData/
- index.html

Then run:
git add .  
git commit -m "Update WebGL build"  
git push  

---

## Notes

- Unity handles navigation and pathfinding  
- The website only displays the WebGL build  
- Always pull before starting work  

---

## Common Issues

Missing dependency:
npm install <package-name>

No changes detected:
Make sure you're editing files inside the repo

WebGL not updating:
Replace everything in public/map/
