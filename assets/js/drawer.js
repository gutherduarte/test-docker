class Drawer {

    classIsActive = 'is-active';

    constructor(
        drawerButton,
        drawerCloseElement,
        drawerCover,
        drawerNavigation
    ) {
        this.drawerButton = drawerButton;
        this.drawerCloseElement = drawerCloseElement;
        this.drawerCover = drawerCover;
        this.drawerNavigation = drawerNavigation;
    }

    handleOpenDrawer = () => {
        this.drawerCover.classList.add(this.classIsActive);
        this.drawerNavigation.classList.add(this.classIsActive);
    };

    handleCloseDrawer = () => {
        this.drawerNavigation.classList.remove(this.classIsActive);
        this.drawerCover.classList.remove(this.classIsActive);
    };

    setEventDrawer = () => {
        this.drawerButton.addEventListener('click', this.handleOpenDrawer);
        this.drawerCloseElement.addEventListener('click', this.handleCloseDrawer);
    };

    ready = () => {
        this.setEventDrawer();
    };

    destroy = () => {
        this.drawerButton.removeEventListener('click', this.handleOpenDrawer);
        this.drawerCloseElement.removeEventListener('click', this.handleCloseDrawer);
    };
    
}