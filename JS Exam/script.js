const recipeForm = document.getElementById("recipeForm");
const recipeList = document.getElementById("recipeList");

let recipes = JSON.parse(localStorage.getItem("recipes")) || [];

function saveToLocal() {
  localStorage.setItem("recipes", JSON.stringify(recipes));
}

function displayRecipes() {
  recipeList.innerHTML = "";
  recipes.forEach((recipe, index) => {
    const card = document.createElement("div");
    card.className = "recipe-card";

    card.innerHTML = `
        <img src="${
          recipe.image || "https://via.placeholder.com/300x200"
        }" alt="${recipe.title}">
        <h3>${recipe.title}</h3>
        <p><strong>Cuisine:</strong> ${recipe.cuisine}</p>
        <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
        <p><strong>Instructions:</strong> ${recipe.instructions}</p>
        <button onclick="editRecipe(${index})">✏️ Edit</button>
        <button onclick="deleteRecipe(${index})">🗑️ Delete</button>
      `;

    recipeList.appendChild(card);
  });
}

function deleteRecipe(index) {
  recipes.splice(index, 1);
  saveToLocal();
  displayRecipes();
}

function editRecipe(index) {
  const recipe = recipes[index];
  document.getElementById("title").value = recipe.title;
  document.getElementById("cuisine").value = recipe.cuisine;
  document.getElementById("image").value = recipe.image;
  document.getElementById("ingredients").value = recipe.ingredients;
  document.getElementById("instructions").value = recipe.instructions;
  recipes.splice(index, 1);
  saveToLocal();
  displayRecipes();
}

recipeForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const newRecipe = {
    title: document.getElementById("title").value.trim(),
    cuisine: document.getElementById("cuisine").value,
    image: document.getElementById("image").value,
    ingredients: document.getElementById("ingredients").value,
    instructions: document.getElementById("instructions").value,
  };

  recipes.push(newRecipe);
  saveToLocal();
  recipeForm.reset();
  displayRecipes();
});

displayRecipes();
