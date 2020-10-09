# Notes-App
Notes-App is an application used to take notes by the user and manage them, using the Command Line. The application is developed in **Node.js**

## Installation
Just download the **"notes-app-win.exe"** and you are good to go.

## Usage
To use the Notes-App, use the following commands:

#### Adding a note
```
notes-app-win.exe add --title="Shopping List" --body="T-shirt, Shorts and Shoes"
```
![add](https://user-images.githubusercontent.com/26012311/95576769-9f396e00-0a4e-11eb-937e-add2457fc9e8.JPG)

#### Removing a note
```
notes-app-win.exe remove --title="Shopping List"
```
![remove](https://user-images.githubusercontent.com/26012311/95576814-b5dfc500-0a4e-11eb-9174-11680227509c.JPG)

#### Listing all notes
```
notes-app-win.exe list
```
![list](https://user-images.githubusercontent.com/26012311/95576819-b9734c00-0a4e-11eb-8599-7eb83ee5633f.JPG)

#### Reading a particular note
```
notes-app-win.exe read --title="Shopping List"
```
![read](https://user-images.githubusercontent.com/26012311/95576822-ba0be280-0a4e-11eb-9525-34d8eeffc835.JPG)

## Important
All the notes of the user will be stored in JSON form in **notes.json** file
