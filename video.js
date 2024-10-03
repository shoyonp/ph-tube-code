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
// creat displayCategories
const displayCategories = (data) => {
  //    add Data in html
  console.log(data);
};

loadCategories();
