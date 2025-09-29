/*
Creating a function that aids in the maintenance of a musical album collection. The collection is organized as an object that contains multiple albums which are also objects. Each album is represented in the collection with a unique id as the property name. Within each album object, there are various properties describing information about the album. Not all albums have complete information.
The updateRecords function takes 4 arguments represented by the following function parameters:
- records: an object containing several individual albums
- id: a number representing a specific album in the records object
- prop: a string representing the name of the album's property to update
- value: a string containing the information used to update the album's property
*/

// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };


const recordCollection = {
    101 : {
        artist: "Sauti Sol",
        album_title: "Afrikan Sauce",
        tracks: ["Melanin", "Short N Sweet", "African Star", "Rewind", "Tujiangalie", "Girl Next Door"]
    },
    
    102 : {
        artist: "Diamond Platnumz",
        album_title: "A Boy From Tandale",
        tracks: [
            "Hallelujah (ft. Morgan Heritage)",
            "Waka (ft. Rick Ross)",
            "Eneka",
            "Fire (ft. Tiwa Savage)",
            "African Beauty (ft. Omarion)",
            "Marry You (ft. Ne-Yo)",
        ]
    },

    103: {
        artist: "", //Beyonce
        album_title: "Lemonade",
        tracks: ["Hold up", "Sorry", "Formation", "Freedom"]
    },

    104: {
        artist: "Kendrick Lamar",
        album_title: "", //damn
        tracks: [], //["DNA", "Humble", "Love", "Loyalty"]
    },

    105: {
        artist: "Adele",
        album_title: "",// 25
        tracks: ["Hello", "Send my Love To Your New Lover", "When We Were Young", "Water Under The Bridge"]
    }, 

    106: {
        artist: "Jaguar",
        album_title: "", // Matapeli
        //tracks: [] // ["Kigeugeu", "Matapeli", "One Centimeter", "Huu Mwaka"]
    },

    107: {
        artist: "Jua Cali",
        album_title: "Ngeli Ya Genge", 
        tracks: ["Ngeli ya Genge"], // ["Kwaheri", "Bidii Yangu", "Kuna Sheng"]
    },
    
    5439: {
    albumTitle: 'ABBA Gold'
  },
};


// create the function that updates the records

const updateRecords = (records, id, prop, value) => {
    const album = records[id];
    if (value === ""){ 
        console.log("logic gate no. 1")
        delete album[prop]; // delete the property if the value is empty string
        return records;
        } 
    if (prop !== "tracks" & value !== "") { 
        console.log("logic gate no. 2")
        album[prop] = value // add value to prop 
        return records;
    }

    if (prop === "tracks" & value !== "" & album[prop] === undefined){
        album[prop] = [value]; // value to prop as array
        console.log("logic gate no. 3")
        return records;
    }
    
    if (prop === "tracks" & value !== "" & album[prop] !== undefined){
        console.log("logic gate no. 4")
        album[prop] = album[prop].concat(value); // concatenate the tracks without nesting
        return records;
    }

};

// console.log(updateRecords(records = recordCollection, id="106", prop="tracks", value=["DNA", "Humble", "Love", "Loyalty"]));
// console.log(updateRecords(records = recordCollection, id="107", prop="tracks", value=["Kwaheri", "Bidii Yangu", "Kuna Sheng"]));
console.log(updateRecords(recordCollection, "5439", "tracks", "Take a Chance on Me"));

// house = {
//     chair: 5,
//     windows: 3,
//     // tables: 5
// };

// console.log(house.kitchen === undefined);