// Getting Initials

document.addEventListener("DOMContentLoaded", function () {
    const fullName = "John Doe"; 
    const nameArray = fullName.split(" ");
    let initials = "";
    nameArray.forEach((word) => {
      if (word[0]) initials += word[0];
    });
  
    document.getElementById("initials-circle").innerText = initials.toUpperCase();
  });

//   For the select option
  
  function selectCard(card) {
    // Remove 'active' class from all cards
    const allCards = document.querySelectorAll('.metric-card');
    allCards.forEach(item => item.classList.remove('active'));

    // Add 'active' class to the selected card
    card.classList.add('active');
}

// Action Coloumn

// Function to toggle the visibility of the action buttons
function toggleActions(iconElement) {
    
    const actionButtons = iconElement.nextElementSibling;
    actionButtons.classList.toggle("hidden");
  }
  