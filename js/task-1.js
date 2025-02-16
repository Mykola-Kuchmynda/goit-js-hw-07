const categories = document.querySelectorAll("#categories .item");
console.log("Number of categories:", categories.length);

categories.forEach(category => {
    const name = category.querySelector("h2").textContent;
    const elements = category.querySelectorAll("li").length;
    console.log("Category:", name);
    console.log("Elements:", elements);
});