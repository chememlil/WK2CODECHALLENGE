// Wait for the HTML document to fully load before executing the script
document.addEventListener('DOMContentLoaded', function() {

    // References to DOM elements
    const shoppingList = document.getElementById('shoppingList'); // The <ol> element where items are displayed
    const itemInput = document.getElementById('itemInput'); // Input field for adding new items
    const addButton = document.getElementById('addButton'); // Button to add new items
    const markButton = document.getElementById('markButton'); // Button to mark all items as purchased
    const clearButton = document.getElementById('clearButton'); // Button to clear the entire list

    let items = []; // Array to store shopping list items [{ name: 'Item name', purchased: false }]

    // Event listener for the Add button
    addButton.addEventListener('click', function() {
        const newItem = itemInput.value.trim(); // Get the trimmed value from the input field
        if (newItem !== '') { // Ensure input is not empty
            items.push({ name: newItem, purchased: false }); // Add new item to the items array
            renderItems(); // Update the displayed shopping list
            itemInput.value = ''; // Clear the input field after adding item
        }
    });

    // Function to render (display) items in the shopping list
    function renderItems() {
        shoppingList.innerHTML = ''; // Clear the current items in the shopping list
        items.forEach((item, index) => {
            const li = document.createElement('li'); // Create a new <li> element for each item
            li.textContent = item.name; // Set the text content of the <li> to the item's name
            if (item.purchased) {
                li.classList.add('purchased'); // Add 'purchased' class if item is marked as purchased
            }
            // Toggle the purchased status when clicking on an item
            li.addEventListener('click', () => {
                items[index].purchased = !items[index].purchased; // Toggle purchased property
                renderItems(); // Update the displayed shopping list
            });
            shoppingList.appendChild(li); // Append the <li> to the shoppingList <ol> element
        });
    }

    // Event listener for the Mark All button
    markButton.addEventListener('click', function() {
        items.forEach(item => {
            item.purchased = true; // Mark all items as purchased
        });
        renderItems(); // Update the displayed shopping list
    });

    // Event listener for the Clear All button
    clearButton.addEventListener('click', function() {
        items = []; // Clear all items from the items array
        renderItems(); // Update the displayed shopping list
    });
});
