document.addEventListener('DOMContentLoaded', function () {
    loadEntries();
});

function loadEntries() {
    const entriesContainer = document.getElementById('entries');
    const savedEntries = localStorage.getItem('journalEntries');

    if (savedEntries) {
        entriesContainer.innerHTML = savedEntries;
    }
}