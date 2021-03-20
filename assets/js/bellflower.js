document.onreadystatechange = function () {
    if (document.readyState === 'complete') {

        function toggle(el, value) {
            var display = (window.getComputedStyle ? getComputedStyle(el, null) : el.currentStyle).display;
            if (display == 'none') el.style.display = value;
            else el.style.display = 'none';
        }

        const navItems = document.querySelectorAll('.nav-item > a');
        const trigger = document.querySelector('.js-trigger');
        const triggerSiblings = Array.from(trigger.parentNode.children);

        navItems.forEach(item => (item.href == window.location.href) ? item.classList.add('isActive') : null)

        trigger.addEventListener('mousedown', () => {
            trigger.closest('.nav').classList.toggle('isExpanded')
            triggerSiblings.forEach(item => {
                if (!item.className.includes('js-trigger')) {
                    item.classList.toggle('isVisible');
                }
            });

            return false;
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 640) {
                trigger.closest('.nav').classList.remove('isExpanded')
                triggerSiblings.forEach(item => item.classList.remove('isVisible'));
            }
        });
    }
}