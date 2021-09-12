class Slideshow {
    classIsActive = 'is-active';

    constructor(
        prevButton,
        nextButton,
        slideList,
        slideCurrent,
        pageLabel,
        countLabel,
        page,
        count,
    ) {
        this.prevButton = prevButton;
        this.nextButton = nextButton;
        this.slideList = slideList;
        this.slideCurrent = slideCurrent;
        this.pageLabel = pageLabel;
        this.countLabel = countLabel;

        this.page = page;
        this.count = count;

        this.countLabel.innerHTML = this.count;
    }

    setEventButtonSlides = () => {
        this.prevButton.addEventListener('click', () => this.handleSlideButtonClick('prev'));
        this.nextButton.addEventListener('click', () => this.handleSlideButtonClick());
    };

    setPageLabel = (direction) => {
        if(direction === 'next') {
            this.page < this.count ? this.page++ : this.page = 1;
        }
        else {
            this.page > 1 ? this.page-- : this.page = this.count;
        }
        this.pageLabel.innerHTML = this.page;
    };

    handleSlideButtonClick = (direction = 'next') => {
        this.slideCurrent.classList.remove(this.classIsActive);
        if(direction === 'next') {
            this.slideCurrent = this.slideCurrent.nextElementSibling
                ? this.slideCurrent.nextElementSibling
                : this.slideList.firstElementChild;
        }
        else {
            this.slideCurrent = this.slideCurrent.previousElementSibling
                ? this.slideCurrent.previousElementSibling
                : this.slideList.lastElementChild;
        }
        this.slideCurrent.classList.add(this.classIsActive);
        this.setPageLabel(direction);
    };

    ready = () => {
        this.setEventButtonSlides();
    }

}