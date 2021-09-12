const init = () => {
    const slides = new Slideshow(
        document.getElementById('prevButton'),
        document.getElementById('nextButton'),
        document.querySelector('.slides .slide-item-resource-content'),
        document.querySelector('.slides .resource.is-active'),
        document.getElementById('page'),
        document.getElementById('count'),
        1,
        document.querySelector('.slides .slide-item-resource-content').childElementCount
    );
    slides.ready();

    const drawer = new Drawer(
        document.getElementById('drawerOpenButton'),
        document.getElementById('drawerCloseElement'),
        document.querySelector('.drawer-cover'),
        document.querySelector('.drawer-navigation')
    );
    drawer.ready();

    if(screen.lockOrientation) screen.lockOrientation('portrait');
};

window.addEventListener('load', init);