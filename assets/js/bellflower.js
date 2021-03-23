document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        const navItems = document.querySelectorAll('.nav-item > a');
        navItems.forEach(item => {
            let itemURL = new URL(item.href)
            itemURL.pathname == window.location.pathname ? item.classList.add('isActive') : null
        })
    }
}