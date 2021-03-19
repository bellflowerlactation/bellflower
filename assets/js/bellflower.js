document.onreadystatechange = function () {
    if (document.readyState === 'complete') {

        function toggle(el, value) {
            var display = (window.getComputedStyle ? getComputedStyle(el, null) : el.currentStyle).display;
            if (display == 'none') el.style.display = value;
            else el.style.display = 'none';
        }

        const trigger = document.querySelector('.js-trigger');
        const triggerSiblings = Array.from(trigger.parentNode.children);


        trigger.addEventListener('mousedown', () => {
            trigger.closest('.nav').classList.toggle('isExpanded')
            triggerSiblings.forEach(item => {
                if (!item.className.includes('js-trigger')) {
                    item.classList.toggle('isVisible');
                }
            });

        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 640) {
                trigger.closest('.nav').classList.remove('isExpanded')
                triggerSiblings.forEach(item => item.classList.remove('isVisible'));
            }
        });
    }
}