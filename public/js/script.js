// Get modal element
const modal = document.getElementById("taskModal");

// Get the <span> element that closes the modal
const closeButton = document.querySelector(".close-button");

// Function to open the modal
function openModal(title, description, dueDate) {
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalDescription").innerText = description;
  document.getElementById("modalDueDate").innerText = dueDate;

  modal.style.display = "block";
}

// Function to close the modal
closeButton.onclick = function() {
  modal.style.display = "none";
}

// Close the modal when clicking anywhere outside of the modal content
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

// Assuming you have tiles with the class 'task-tile', add click events
const taskTiles = document.querySelectorAll(".task-tile");
taskTiles.forEach(tile => {
  tile.addEventListener("click", () => {
    const title = tile.querySelector("h3").innerText; // Get title from tile
    const description = tile.querySelector("p").innerText; // Get description from tile
    const dueDate = tile.querySelector("small").innerText; // Get due date from tile

    openModal(title, description, dueDate); // Open modal with tile data
  });
});
