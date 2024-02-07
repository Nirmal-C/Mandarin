document.addEventListener('DOMContentLoaded', function () {
    var currentPage = location.pathname.split('/').pop();

    if (currentPage === '' || currentPage === 'index.html') {
        currentPage = 'home';
    }

    console.log('Current Page:', currentPage);

    var currentNavItem = document.getElementById(currentPage);
    
    if (!currentNavItem) {
        currentPage = currentPage.split('.')[0];
        currentNavItem = document.getElementById(currentPage);
    }

    console.log('Current Nav Item:', currentNavItem);

    if (currentNavItem) {
        currentNavItem.classList.add('active');
    }
});
