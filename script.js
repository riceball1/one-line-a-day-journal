/**
 * Features:
 * - Each month/day should be separated by years
 * - One one entry allowed per day
 * - Themes: light, dark, and sepia
 */


document.addEventListener('DOMContentLoaded', function () {
    loadEntries();
});

function saveEntry() {
    const entryText = document.getElementById('journalEntry').value.trim();
    
    if (entryText === '') {
        alert('Please write something before saving.');
        return;
    }

    const currentDate = new Date();
    const entryDate = currentDate.toDateString();
    const entryHTML = `<p><strong>${entryDate}:</strong> ${entryText}</p>`;

    const entriesContainer = document.getElementById('entries');
    entriesContainer.insertAdjacentHTML('beforeend', entryHTML);

    // Clear the textarea
    document.getElementById('journalEntry').value = '';

    // Save the entries to localStorage
    saveEntries();
}

function saveEntries() {
    const entriesContainer = document.getElementById('entries');
    localStorage.setItem('journalEntries', entriesContainer.innerHTML);
}

function loadEntries() {
    const entriesContainer = document.getElementById('entries');
    const savedEntries = localStorage.getItem('journalEntries');

    if (savedEntries) {
        entriesContainer.innerHTML = savedEntries;
    }
}
