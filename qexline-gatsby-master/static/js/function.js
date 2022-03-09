(function (d) {

function hamburger() {
    document.getElementById('sp__menu').classList.toggle('active');
    document.getElementById('sp__toggle').classList.toggle('active');
}
document.getElementById('sp__toggle').addEventListener('click' , function () {
    hamburger();
} );
const spLink = document.querySelectorAll('.sp__link');
for (let i = 0; i < spLink.length; i++) {
    spLink[i].addEventListener('click', () => {
        hamburger();
    });
}
})(document);
