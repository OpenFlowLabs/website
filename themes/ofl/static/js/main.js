// Starts Parallaxes

document.addEventListener('DOMContentLoaded', function() {
    var parallaxeElems = document.querySelectorAll('.parallax');
    var parallaxesInstances = M.Parallax.init(parallaxeElems, {});
});

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
