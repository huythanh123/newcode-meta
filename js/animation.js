const toggleButton = document.getElementById("toggle-filters-btn");
const filtersPanel = document.getElementById("filters-panel");
const jobListings = document.getElementById("job-listings");
const techList = ["Facebook", "Messenger", "Instagram", "WhatsApp", "Meta Quest", "Threads"];
const selected = new Set();

const container = document.getElementById("tech-tags");
let isFiltersVisible = true; // Filters start as visible

toggleButton.addEventListener("click", () => {
isFiltersVisible = !isFiltersVisible;

if (isFiltersVisible) {
toggleButton.innerHTML = 'Hide filters <i class="fas fa-sliders-h ps-2"></i>';
filtersPanel.classList.remove("hidden");
jobListings.classList.remove("w-full");
jobListings.classList.add("w-4/4");
} else {
toggleButton.innerHTML = 'Show filters <i class="fas fa-sliders-h ps-2"></i>';
filtersPanel.classList.add("hidden");
jobListings.classList.remove("w-4/4");
jobListings.classList.add("w-full");
}
});

function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("hidden");
}

// Thêm sự kiện cho nút hamburger
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.querySelector("button svg");
  hamburgerBtn.parentElement.addEventListener("click", toggleMenu);
});


function renderTags() {
  container.innerHTML = "";
  techList.forEach((tech) => {
    const isSelected = selected.has(tech);

    const btn = document.createElement("button");
    btn.className =
    "flex items-center rounded-full px-3 py-1 text-xs mr-2 mb-2 transition " +
    (isSelected
      ? "bg-gray-300 text-white font-medium"
      : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100");
  

      btn.innerHTML = `
       <span class="flex items-center">${tech}
        ${
          isSelected
            ? '<svg class="ml-1 text-sm cursor-pointer font-bold" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="currentColor"><path d="M256-213.85 213.85-256l224-224-224-224L256-746.15l224 224 224-224L746.15-704l-224 224 224 224L704-213.85l-224-224-224 224Z"/></svg>'
            : ""
        }
        </span>
      `;
    btn.addEventListener("click", () => {
      if (isSelected) {
        selected.delete(tech);
      } else {
        selected.add(tech);
      }
      renderTags();
    });

    container.appendChild(btn);
  });
}

renderTags();


  const categoryList = [
    "Advertising Technology",
    "AR/VR",
    "Artificial Intelligence",
    "Business Development & Partnerships",
    "Communications & Public Policy"
  ];

  const selectedCategories = new Set();
  const categoryContainer = document.getElementById("category-tags2");

  function renderTags2() {
    categoryContainer.innerHTML = "";
    categoryList.forEach((category) => {
      const isSelected = selectedCategories.has(category);

      const btn = document.createElement("button");
      btn.className =
      "flex items-center justify-between rounded-full px-3 py-1 text-xs mr-2 mb-2 border transition " +
      (isSelected
        ? "bg-gray-300 text-white font-medium"
        : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100");
    
        btn.innerHTML = `
       <span class="flex items-center">${category}
        ${
          isSelected
            ? '<svg class="ml-1 text-sm cursor-pointer font-bold" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="currentColor"><path d="M256-213.85 213.85-256l224-224-224-224L256-746.15l224 224 224-224L746.15-704l-224 224 224 224L704-213.85l-224-224-224 224Z"/></svg>'
            : ""
        }
        </span>
      `;

      btn.addEventListener("click", () => {
        if (isSelected) {
          selectedCategories.delete(category);
        } else {
          selectedCategories.add(category);
        }
        renderTags2();
      });

      categoryContainer.appendChild(btn);
    });
  }

  renderTags2();


  const categoryList1 = [
    "United States",
    "France",
    "Spain",
    "Germany",
    "Italy"
  ];
  
  const selectedCategories1 = new Set();
  const categoryContainer1 = document.getElementById("category-tags3");
  
  function renderTags3() {
    categoryContainer1.innerHTML = "";
    categoryList1.forEach((category3) => {
      const isSelected = selectedCategories1.has(category3);
  
      const btn = document.createElement("button");
      btn.className =
        "flex items-center justify-between rounded-full px-3 py-1 text-xs mr-2 mb-2 border transition " +
        (isSelected
          ? "bg-gray-300 text-white font-medium"
          : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100");
  
      btn.innerHTML = `
       <span class="flex items-center">${category3}
        ${
          isSelected
            ? '<svg class="ml-1 text-sm cursor-pointer font-bold" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="currentColor"><path d="M256-213.85 213.85-256l224-224-224-224L256-746.15l224 224 224-224L746.15-704l-224 224 224 224L704-213.85l-224-224-224 224Z"/></svg>'
            : ""
        }
        </span>
      `;
  
      btn.addEventListener("click", () => {
        if (isSelected) {
          selectedCategories1.delete(category3);
        } else {
          selectedCategories1.add(category3);
        }
        renderTags3();
      });
  
      categoryContainer1.appendChild(btn);
    });
  }
  
  renderTags3();
  