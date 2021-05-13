document.querySelector('.logo').addEventListener('click', function (e) {
    location.href = '../about/index.html';
});

var navs = document.querySelectorAll('.top-nav .nav')

navs.forEach(function(nav){
    nav.addEventListener('click', function (e) {
        var t = e.target;
        var t_get = t.getAttribute('data-link');
    
        return location.href = '../' + t_get + '/index.html';
    });
})

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}