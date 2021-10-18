// Starts Tooltips

document.addEventListener('DOMContentLoaded', function() {
    var tooltipElems = document.querySelectorAll('.tooltipped');
    var tooltipInstances = M.Tooltip.init(tooltipElems, {});
});

// Add Icons to offers elements

if (window.location.pathname === '/') {
    document.getElementById('Think').innerText = 'lightbulb_outline'
    document.getElementById('Engineer').innerText = 'developer_board'
    document.getElementById('Hire').innerText = 'assignment_ind'
    document.getElementById('Consult').innerText = 'explore'
}

// Floating Action Button toggles on vertical scrolling

document.addEventListener('scroll', function(e) {
    const lastKnownScrollPosition = window.scrollY;
    const fixedActionBtn = document.querySelector('.fixed-action-btn')

    if (lastKnownScrollPosition > 300) {
      fixedActionBtn.style.display = 'block'
    } else {
        fixedActionBtn.style.display = 'none'
    }
});
