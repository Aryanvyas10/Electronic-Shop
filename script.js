const searchInput = document.getElementById("searchInput");
const productBoxes = document.querySelectorAll(".product-box");

searchInput.addEventListener("keyup", function () {
  const keyword = searchInput.value.toLowerCase().trim();

  productBoxes.forEach(box => {
    const category = box.getAttribute("data-category").toLowerCase();
    if (category.includes(keyword)) {
      box.style.display = "flex";
    } else {
      box.style.display = "none";
    }
  });
});
