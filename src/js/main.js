import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { caseStudies } from './data/case-studies';
import '../sass/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#realization-container');
  
  if (!container) return;

  caseStudies.forEach(study => {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');
    slide.innerHTML = `
      <div class="tile">
        <h2>${study.title}</h2>
        <p class="description">${study.description}</p>
        <a href="#" class="btn">${study.buttonText}</a>
      </div>
    `;
    container.appendChild(slide);
  });

  const swiper = new Swiper('.realization-swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'fraction',
      formatFractionCurrent: function(number) {
        return number;
      },
      formatFractionTotal: function(number) {
        return number;
      },
      renderFraction: function(currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' + '/' + '<span class="' + totalClass + '"></span>';
      }
    },
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
