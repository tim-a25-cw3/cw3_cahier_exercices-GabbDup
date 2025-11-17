import Icons from './utils/Icons.js';
import Swiper from 'swiper/bundle';

class Main {
  constructor() {
    this.init();
  }

  initSwiper() {
    const target = document.querySelector('.js-swiper');
    const swiper = new Swiper(target, {
      speed: 400,
      loop: true,
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }

  init() {
    Icons.load();
    this.initSwiper();
  }
}
new Main();
