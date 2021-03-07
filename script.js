class HeroSlider {
    constructor() {
        this.slides = [
            { id: 0, controlPath: "./assets/hero_slider_1.png", previewPath: "./assets/hero_slider_preview_1.png" },
            { id: 1, controlPath: "./assets/hero_slider_2.png", previewPath: "./assets/hero_slider_preview_2.png" },
            { id: 2, controlPath: "./assets/hero_slider_3.png", previewPath: "./assets/hero_slider_preview_3.png" },
            { id: 3, controlPath: "./assets/hero_slider_4.png", previewPath: "./assets/hero_slider_preview_4.png" },
            { id: 4, controlPath: "./assets/hero_slider_5.png", previewPath: "./assets/hero_slider_preview_5.png" },
        ];
        this.currentSlide = this.slides[0];
        document.getElementById("heroSliderList").innerHTML = this.slides.map(slide => {
            return `
                <div class="heroSectionSliderListItem" data-id="${slide.id}">
                    <img src="${slide.controlPath}">
                </div>
            `;
        }).join("");
        document.querySelectorAll('.heroSectionSliderListItem').forEach(sliderControl => sliderControl.addEventListener('click', (e) => {
            this.gotoSlide(e.target.parentElement.getAttribute("data-id"));
        }));
    }

    gotoSlide(id) {
        // remove --active from existing and add to new
        if (this.currentSlide)
            document.querySelector(`.heroSectionSliderListItem[data-id='${this.currentSlide.id}']`).classList.remove("--active");
        document.querySelector(`.heroSectionSliderListItem[data-id='${id}']`).classList.add("--active");

        this.currentSlide = this.slides.find(s => s.id == id);
        // set image at both preview (mobile + desktop)
        document.querySelectorAll(".heroSectionSliderPreview").forEach(elem => {
            let previewElem = elem.children[0];
            previewElem.setAttribute("src", this.currentSlide.previewPath);
        })
    }
}

let heroSlider = new HeroSlider();
setInterval(() => {
    let nextId = (heroSlider.currentSlide.id + 1) % 5;
    heroSlider.gotoSlide(nextId);
}, 10000);

