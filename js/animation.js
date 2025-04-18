const toggleButton = document.getElementById("toggle-filters-btn");
const filtersPanel = document.getElementById("filters-panel");
const jobListings = document.getElementById("job-listings");

let isFiltersVisible = true; // Filters start as visible

toggleButton.addEventListener("click", () => {
isFiltersVisible = !isFiltersVisible;

if (isFiltersVisible) {
toggleButton.innerHTML = 'Hide filters <i class="fas fa-sliders-h ps-2"></i>';
filtersPanel.classList.remove("hidden");
jobListings.classList.remove("w-full");
jobListings.classList.add("w-3/4");
} else {
toggleButton.innerHTML = 'Show filters <i class="fas fa-sliders-h ps-2"></i>';
filtersPanel.classList.add("hidden");
jobListings.classList.remove("w-3/4");
jobListings.classList.add("w-full");
}
});