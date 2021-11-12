//to access firebase file
//need script type="module" on index pages when calling

  // Import the functions you need from the SDKs you need
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
 
 import {getDocs, collection, firestore, onSnapshot, doc,
 } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
 
 
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyCKGXhwgT1V8b2Wq_9bq8gc1i44DOAoLv0",
   authDomain: "recipe-ingredient-maker.firebaseapp.com",
   projectId: "recipe-ingredient-maker",
   storageBucket: "recipe-ingredient-maker.appspot.com",
   messagingSenderId: "757703325313",
   appId: "1:757703325313:web:f1f0c401d7a04920443f80",
   measurementId: "G-HB15C4EY7H"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 
 const db = firestore(app);


  async function getRecipes(db){
    const recipesCol = collection(db, "Recipes");
    const recipesSnapshot = await getDocs(recipesCol);
    const recipesList = recipesSnapshot.docs.map((doc) => doc.data());
    return recipesList;
}

const recipesList = document.querySelector('#recipes-list');
const form = document.querySelector('#add-recipes-form')





function renderRecipes(dc) {
  let li = document.createElement("li");
  let title = document.createElement("span");
  let website = document.createElement("span");
  let ingredients = document.createElement("span");
  let servingSize = document.createElement("span");
  let cross = document.createElement('div');

  li.setAttribute('data-id', dc.id);
  title.textContent = dc.data().title;
  website.textContent = dc.data().website;
  ingredients.textContent = dc.data().ingredients;
  servingSize.textContent = dc.data().servingSize;
  cross.textContent = 'x';

  li.appendChild(title);
  li.appendChild(website);
  li.appendChild(ingredients);
  li.appendChild(servingSize);
  li.appendChild(cross);

  recipesList.appendChild(li);

  cross.addEventListener('click', (e) => {
      e.stopPropagation();
      let id = e.target.parentElement.getAttribute('data-id');
      deleteDoc(doc(db, "Recipes", id))
  })
}
 
const recipes = getDocs(collection(db, "Recipes"))
.then((snapshot) => {
    snapshot.forEach((doc) => {
        renderRecipes(doc)
    })
})




form.addEventListener(('submit'), (e) => {
  e.preventDefault();
  const docRef = addDoc(collection(db, "Recipes"), {
      city: form.city.value,
      name: form.name.value
  })
})