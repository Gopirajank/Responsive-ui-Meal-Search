function searchMeal() {
    const searchInput = document.getElementById("searchInput");
    const query = searchInput.value;
  
    if (query.trim() !== "") {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        .then(response => response.json())
        .then(data => {
          const mealList = document.getElementById("mealList");
          mealList.innerHTML = "";
  
          if (data.meals === null) {
            mealList.innerHTML = "<p>No meals found.</p>";
          } else {
            data.meals.forEach(meal => {
              const mealCard = document.createElement("div");
              mealCard.classList.add("meal-card");
  
              const mealImage = document.createElement("img");
              mealImage.src = meal.strMealThumb;
              mealImage.alt = meal.strMeal;
  
              const mealName = document.createElement("h3");
              mealName.textContent = meal.strMeal;
  
              const mealCategory = document.createElement("p");
              mealCategory.textContent = `Category: ${meal.strCategory}`;
  
              const mealInstructions = document.createElement("p");
              mealInstructions.textContent = meal.strInstructions;
  
              mealCard.appendChild(mealImage);
              mealCard.appendChild(mealName);
              mealCard.appendChild(mealCategory);
              mealCard.appendChild(mealInstructions);
  
              mealList.appendChild(mealCard);
            });
          }
        })
        .catch(error => {
          console.log("Error:", error);
        });
    }
  }