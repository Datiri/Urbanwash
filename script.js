function loadComponent(id, url) {
    fetch(url)
    .then(res => res.text())
    .then(html => document.getElementById(id).innerHTML = html);
}
loadComponent('header', 'components/header.html');
loadComponent('footer', 'components/footer.html');

const pageTitles = {
  '': 'Urbanwash | Your Clothes our care',
  '/index.html': 'Urbanwash | Your Clothes our care',
  '/about.html': 'About Us | Urbanwash',
  '/services.html': 'Our Services | Urbanwash',
  '/contact.html': 'Contact Us | Urbanwash'
}, path = window.location.pathname;

if (pageTitles[path]) {
  document.title = pageTitles[path];
}

// Set favicon
function setFavicon(url) {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    link.href = url;
}
setFavicon('assets/img/logo.svg');