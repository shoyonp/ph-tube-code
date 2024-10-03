console.log("video added");
// 1- Fetch, load and show categories on html

// creat loadCategories
const loadCategories = () => {
  //    fetch the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};

// {
//     "category_id": "1001",
//     "category": "Music"
// }

// creat displayCategories
const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("categories");

  categories.forEach((item) => {
    console.log(item);
    // creat a button
    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = item.category;

    // add button to category container
    categoryContainer.append(button);
  });
};

loadCategories();
