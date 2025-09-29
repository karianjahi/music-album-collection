# 🎵 Music Album Collection

A practice project to **hone JavaScript object manipulation skills** using a simulated music album collection.  
The project revolves around a single function, `updateRecords`, which updates records in an object-based album collection following specific rules.

---

## 📂 Project Structure
```bash
music-album-collection/
├── .gitignore
├── README.md
└── source.js
```


---

## 🎯 Goal of the Project

The aim is to **practice updating nested JavaScript objects** by creating a function that:  

- Updates album information  
- Adds new properties when needed  
- Deletes properties when values are empty  
- Handles special cases for arrays (`tracks`)  

---

## 📝 The Record Collection

The album collection is represented as a **JavaScript object of objects**.  
- Each album has a unique **id** (e.g., `101`, `102`, …).  
- Each album contains properties such as:  
  - `artist` 🎤  
  - `album_title` 💿  
  - `tracks` 🎶 (array of strings)  

Some albums have **incomplete data** to simulate real-world data inconsistencies.

---

## ⚙️ The `updateRecords` Function

The function `updateRecords(records, id, prop, value)` accepts four parameters:

- **records** → the object containing all albums  
- **id** → the album identifier (number)  
- **prop** → the property name to update (string)  
- **value** → the new information to add/update (string)  

### 📌 User Stories Implemented

1. ✅ The function always returns the entire records object.  
2. ✅ If `value` is an empty string, delete the given `prop` from the album.  
3. ✅ If `prop` isn’t `tracks` and `value` isn’t an empty string, assign `value` to the album’s `prop`.  
4. ✅ If `prop` is `tracks` and the album doesn’t have a `tracks` property, create it as an empty array and add `value`.  
5. ✅ If `prop` is `tracks` and `value` isn’t an empty string, append `value` to the existing `tracks` array.  

---

## 🚀 Example Usage

```js
// Example: Add a missing artist name to album 103
updateRecords(recordCollection, 103, "artist", "Beyoncé");

// Example: Add a track to album 104
updateRecords(recordCollection, 104, "tracks", "DNA");

// Example: Delete the album title of album 105
updateRecords(recordCollection, 105, "album_title", "");
```

## 💡 Key Learnings
- Deepened understanding of object property manipulation in JavaScript

- Worked with conditional logic to handle different update cases

- Practiced handling arrays within objects

- Improved debugging through console logs to trace logic gates

## 🛠️ Tools & Technologies
- JavaScript (ES6+)

- `Node.js` (optional, for running locally)

## 🌟 Future Improvements
- Add more albums and metadata (year, genre, awards 🏆)

- Extend functionality to search albums by artist or track

- Implement a frontend interface for easier interaction

## 🤝 Contributing
This project is for practice, but suggestions are welcome!

If you’d like to improve it:

- Fork the repo

- Create a feature branch

- Submit a pull request 🎉

## 📜 License
This project is released under the MIT License.

✨ Happy coding and keep the music playing! 🎧🎶
