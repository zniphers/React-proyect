import Firebase from 'firebase';

const configPanelUsuarios ={
    apiKey: "AIzaSyAduQL5p8u4lXQ4HYmOaUCVdAWkcActKao",
    authDomain: "panel-personas-5852f.firebaseapp.com",
    databaseURL: "https://panel-personas-5852f.firebaseio.com",
    projectId: "panel-personas-5852f",
    storageBucket: "panel-personas-5852f.appspot.com",
    messagingSenderId: "464419791734",
    appId: "1:464419791734:web:09e30e017e798d64bf9057"
}
Firebase.initializeApp(configPanelUsuarios);

const firestore = Firebase.firestore();

export default firestore;