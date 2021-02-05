(function () {
    const reviewsBtn = document.querySelector('.reviews__btn')

    if (!reviewsBtn) return

    reviewsBtn.addEventListener('click', () => {
        let reviewsInnerBottom = document.querySelector('.reviews__inner-bottom')
        let addReview = document.querySelector('.add-review')
        let reviewsInnerHead = document.querySelector('.reviews__inner-head')
        reviewsInnerBottom.classList.add('d-none')
        reviewsInnerHead.classList.add('d-none')
        addReview.classList.remove('d-none')
    })

})();
(function () {
    const btn = document.querySelector('.burger')
    if(!btn) return
    const menuMobile = document.querySelector('.menu-mobile')
    const menuMobileClose = document.querySelector('.menu-mobile__close')
    const burger = document.querySelector('.header__content-burger')

    btn.addEventListener('click', (e)=>  {
        menuMobile.classList.add('_active')
        burger.classList.add('_active')
        document.body.classList.add('_scroll-lock')
    })

    menuMobileClose.addEventListener('click', (e)=> {
        menuMobile.classList.remove('_active')
        document.body.classList.remove   ('_scroll-lock')
        burger.classList.remove('_active')
    })

    menuMobile.addEventListener('click', (e)=> {
        if(e.target.classList.contains('menu-mobile')) {
            menuMobile.classList.remove('_active')
            document.body.classList.remove   ('_scroll-lock')

        }
    })

})();


window.addEventListener('load', () => {

    (function () {
        const cargoSlider = document.querySelector('.ware')
        if (!cargoSlider) return
        const container = cargoSlider.querySelector('.ware__slider')
        const wareSliderItem = Array.from(cargoSlider.querySelectorAll('.ware__slider-item'))
        const wareImg = cargoSlider.querySelector('.ware__img img')

        new Swiper(container, {
            wrapperClass: 'ware__slider-list',
            slideClass: 'ware__slider-item',
            slidesPerView: 'auto',
            speed: 800,
            watchOverflow: true,
            centerInsufficientSlides: true,
            watchSlidesVisibility: true,
        })

        wareSliderItem.forEach((element) => {
            element.addEventListener('click', () => {

                if (element.classList.contains('_active')) {
                    return
                }

                let src = element.getAttribute('data-img')

                wareImg.setAttribute('src', src)

                wareSliderItem.forEach(el => el.classList.remove('_active'))
                element.classList.add('_active')

            })
        })
    })();


    /*-------------------------------------------------------------------------------------*/

    const reviews = Array.from(document.querySelectorAll('.reviews'))


    reviews.forEach((item) => {
        let container = item.querySelector('.reviews__slider')
        let navPrev = item.querySelector('.reviews__carousel-nav._prev')
        let navNext = item.querySelector('.reviews__carousel-nav._next')
        let pagination = item.querySelector('.pagination')

        let main = new Swiper(container, {
            wrapperClass: 'reviews__slider-wrap',
            slideClass: 'reviews__slider-slide',
            slidesPerView: 'auto',
            speed: 800,
            centerInsufficientSlides: true,
            watchSlidesVisibility: true,
            watchOverflow: true,
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            navigation: {
                prevEl: navPrev,
                nextEl: navNext,
                lockClass: '_lock',
                disabledClass: '_disabled'
            },
            pagination: {
                el: pagination,
                lockClass: '_lock',
                clickable: true
            }
        })
    })

    /*-------------------------------------------------------------------------------------*/

    const productTabsInner = Array.from(document.querySelectorAll('.product-tabs__slider'))


    productTabsInner.forEach((item) => {

        let main = new Swiper(item, {
            wrapperClass: 'product-tabs__items',
            slideClass: 'product-tabs__item',
            slidesPerView: 'auto',
            speed: 800,
            watchOverflow: true,
            
        })
    })

    /*-------------------------------------------------------------------------------------*/

    const togetherCheaper = Array.from(document.querySelectorAll('.together-cheaper'))


    togetherCheaper.forEach((item) => {
        let container = item.querySelector('.together-cheaper__wrap')
        let pagination = item.querySelector('.pagination')

        let main = new Swiper(container, {
            wrapperClass: 'together-cheaper__list',
            slideClass: 'together-cheaper__item',
            slidesPerView: 'auto',
            speed: 800,
            centerInsufficientSlides: true,
            watchSlidesVisibility: true,
            watchOverflow: true,
            pagination: {
                el: pagination,
                lockClass: '_lock',
                clickable: true
            }
        })
    })

    /*-------------------------------------------------------------------------------------*/

    const popular = Array.from(document.querySelectorAll('.popular'))


    popular.forEach((item) => {
        let container = item.querySelector('.popular__wrap-slider')
        let navPrev = item.querySelector('.popular__carousel-nav._prev')
        let navNext = item.querySelector('.popular__carousel-nav._next')
        let pagination = item.querySelector('.pagination')

        let main = new Swiper(container, {
            wrapperClass: 'popular__list',
            slideClass: 'popular__item',
            slidesPerView: 'auto',
            loop: true,
            speed: 1000,
            watchOverflow: true,
            centerInsufficientSlides: true,
            watchSlidesVisibility: true,
            //slidesPerGroup: 4,
            navigation: {
                prevEl: navPrev,
                nextEl: navNext,
                lockClass: '_lock',
                disabledClass: '_disabled'
            },
            pagination: {
                el: pagination,
                lockClass: '_lock',
                clickable: true
            }
        })
    })

})
const catalog = document.querySelectorAll('.catalog');

catalog.forEach(item => {

    const catalogLinks = item.querySelectorAll('.catalog__link');

    catalogLinks.forEach(el => {
        // console.log(el)
        el.addEventListener('click', (e) => {
            const catalogSubItem = el.nextElementSibling;
            if(!catalogSubItem || !catalogSubItem.classList.contains('catalog__sub-menu')) return
            e.preventDefault();
            const activationItem = item.querySelector('.catalog__link._active');
            if(activationItem) {
                activationItem.classList.remove('_active');
                activationItem.nextElementSibling.style.maxHeight = null;
            }
            if (!activationItem || activationItem !== el) {
                el.classList.add('_active');
                catalogSubItem.style.maxHeight = catalogSubItem.scrollHeight + 'px';
            }
        })
    })
});

document.addEventListener('click', function (e) {
  let target = e.target
  let trigger = target.closest('.select-dropdown__trigger, [data-dropdown-trigger]')
  if (!trigger) return
  e.preventDefault()

  let wrap = trigger.closest('.select-dropdown')
  let block = wrap.querySelector('.select-dropdown__dropdown')
  let corner = wrap.querySelector('.select-dropdown__dropdown-corner')
  let offset = 10

  if (!wrap.classList.contains('_active')) {
    document.addEventListener('click', onClickOut)
    wrap.addEventListener('click', onClose)
    open()
  }

  function open() {
    block.style.display = 'flex'
    corner.style = null
    let list = wrap.querySelector('.select-dropdown__dropdown-list')
    if (list) {
      list.style.width = `${list.scrollWidth}px`
    }

    setTimeout(() => {
      let blockRect = block.getBoundingClientRect()
      let offsetRight = Math.round((window.innerWidth - blockRect.right))
      let offsetLeft = Math.round((blockRect.left))

      if (offsetRight <= offset) {
        offsetRight = offsetRight - offset
        block.style.marginLeft = `${offsetRight}px`
        corner.style.marginLeft = `${offsetRight * -1}px`
      } else if (offsetLeft <= offset) {
        offsetLeft = offsetLeft - offset
        block.style.marginLeft = `${offsetLeft * -1}px`
        corner.style.marginLeft = `${offsetLeft}px`
      }

      wrap.classList.add('_active')
    })
  }

  function onClose(e) {
    let btn = e.target.closest('a, .select-dropdown__dropdown-close')
    if (btn) {
      close()
      wrap.removeEventListener('click', onClose)
    }
  }

  function close() {
    block.addEventListener('transitionend', onTransitionEnd, false)

    setTimeout(() => {
      wrap.classList.remove('_active')
      document.removeEventListener('click', onClickOut)
      wrap.removeEventListener('click', onClose)
    })

    function onTransitionEnd() {
      block.style = null
      block.removeEventListener('transitionend', onTransitionEnd, false)
    }
  }

  function onClickOut(e) {
    if (!wrap.classList.contains('_active')) return
    const isElement = e.target === block || block.contains(e.target)
    if (!isElement) {
      close()
    }
  }
})
;(function () {

    const mainCarousel = document.querySelector('.main-carousel')
    if (!mainCarousel) return

    const mainBtnClose = mainCarousel.querySelector('.main-carousel__btn-close')

    if (localStorage.getItem('mainCarouselHidden')) return

    mainCarousel.classList.remove('d-none')

    let container = mainCarousel.querySelector('.main-carousel__wrap')
    let pagination = mainCarousel.querySelector('.main-carousel__navs-wrap')
    // const mainBtnClose = document.querySelector('.main-carousel__btn-close')


    let main = new Swiper(container, {
        wrapperClass: 'main-carousel__list',
        slideClass: 'main-carousel__item',
        slidesPerView: 'auto',
        watchOverflow: true,
        speed: 800,
        loop: true,
        roundLengths: true,
        pagination: {
            el: pagination,
            lockClass: '_lock',
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
    })

    mainBtnClose.addEventListener('click', () => {
        mainCarousel.classList.add('d-none')
        //  localStorage.setItem('mainCarouselHidden', new Date().toISOString())
    })

})();
(function (){
    const menuElements = document.querySelectorAll('.product-tabs__item')
    const productContentTabsItem = document.querySelectorAll('.product-tabs__content-item')

    menuElements.forEach((item) => {
        item.addEventListener('click', change)
    })

    function clear() {
        productContentTabsItem.forEach(e => {
            e.classList.remove('_active')
        })
        menuElements.forEach(e => {
            e.classList.remove('_active')
        })
    }

    function change(e) {
        e.preventDefault();
        clear()
        e.target.classList.add('_active');
        let data = e.currentTarget.getAttribute('data-tab');
        document.getElementById(data).classList.add('_active');
    }
})();


(function () {
    const quantity = Array.from(document.querySelectorAll('.quantity'));

    quantity.forEach(item => {
        const max = 150
        const quantityMinus = item.querySelector('.quantity__number._minus');
        const quantityPlus = item.querySelector('.quantity__number._plus');
        const quantityInput = item.querySelector('.quantity__input');

        if (quantityInput.value > 100) {
            quantityInput.style = "max-width: 8.5rem"
        }

        quantityMinus.addEventListener('click', increaseValue)

        quantityPlus.addEventListener('click', decreaseValue)

        quantityInput.addEventListener('input', () => {
            let value = parseInt(quantityInput.value, 10)

            value = isNaN(value) ? 0 : value;

            if (value < 0) {
                value = 0
            }

            if (value > max) {
                value = max
            }
            if (quantityInput.value > 98) {
                quantityInput.style.maxWidth = '8.5rem'
            } else {
                quantityInput.style.maxWidth = ''
            }

            quantityInput.value = value;
        })


        function increaseValue() {
            let value = parseInt(quantityInput.value, 10)
            value = isNaN(value) ? 0 : value;
            if (value > 1) value--;
            quantityInput.value = value;
        }

        function decreaseValue() {
            let value = parseInt(quantityInput.value, 10)

            value = isNaN(value) ? 0 : value;

            if (quantityInput.value > 98) {
                quantityInput.style = "max-width: 8.5rem"
            }
            value++;

            if (value > max) {
                value = max
            }

            quantityInput.value = value
        }

    })
})();