document.getElementById('loadMore').addEventListener('click', function() {
    let hiddenItems = document.querySelectorAll('#portfolio .hidden');
    
    // Show only the first 3 hidden items (you can adjust this number)
    for (let i = 0; i < 3 && i < hiddenItems.length; i++) {
        hiddenItems[i].classList.remove('hidden');
    }

    // If there are no more hidden items, hide the Load More button
    if (document.querySelectorAll('#portfolio .hidden').length === 0) {
        this.style.display = 'none';
    }
});