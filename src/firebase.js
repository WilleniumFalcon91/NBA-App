import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBMRoi54RHoFZN6nWiMLLOWWcwh7xg1gBw",
    authDomain: "nba-full-8d9aa.firebaseapp.com",
    databaseURL: "https://nba-full-8d9aa.firebaseio.com",
    projectId: "nba-full-8d9aa",
    storageBucket: "nba-full-8d9aa.appspot.com",
    messagingSenderId: "91504278906"
  };

  firebase.initializeApp(config);

  const firebaseDB = firebase.database();
  const firebaseArticles = firebaseDB.ref('articles');
  const firebaseTeams = firebaseDB.ref('teams');
  const firebaseVideos = firebaseDB.ref('videos');

  const firebaseLooper = (snapshot) => {
    const data = [];
    snapshot.forEach((childSnapshot)=>{
        data.push({
            ...childSnapshot.val(),
            id:childSnapshot.key,
        })
    });
    return data;
  }

  export {
      firebase, 
      firebaseDB,
      firebaseArticles,
      firebaseTeams,
      firebaseVideos,
      firebaseLooper
  }