const container = document.querySelector('.swiper-container')
const test = document.querySelector('.test')
const testBox = document.querySelector('.testBox')
const h = document.querySelector('h2')

console.log(test.src)
console.log(test.naturalHeight)
console.log('dont load', test.height)
console.log('complete', test.complete)
window.addEventListener('load', () => {
	const swiperLazy = document.querySelector('.swiper-lazy-loaded')
	console.log(swiperLazy)
	console.log('load', swiperLazy.height)
	console.log('ofset', test.height)
	const swipeSlide = document.querySelectorAll('.swiper-slide')
	swipeSlide.forEach(e => {
		e.style.minHeight = swiperLazy.height + 'px'
		console.log(e)
	})
})
test.addEventListener('load', () => {
})

// window.addEventListener('scroll', () => {
//   console.log(window.scrollY)
// })