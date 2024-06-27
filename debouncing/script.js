function debounce(func, delay) {
	let timeout;
	return function(...args) {
		const context = this
		clearTimeout(timeout);
		timeout = setTimeout(() => func.apply(context, args), delay);
	};
}

// Usage example:
// window.addEventListener('resize', debounce(() => {
// 	console.log('Resize event debounced')
// }, 2000));

// Normal behavior of the resize event on the global window object
// window.addEventListener('resize', () => console.log("Window is resized!"))

function throttle (func, limit) {
	let lastFunc;
	let lastRan;
	return function (...args) {
		const context = this
		if (!lastRan) {
			func.apply(context, args)
			lastRan = Date.now()
		} else {
			clearTimeout(lastFunc)
			lastFunc = setTimeout(function() {
				if ((Date.now() - lastRan) >= limit) {
					func.apply(context, args)
					lastRan = Date.now()
				}
			}, limit - (Date.now() - lastRan));
		}
	}
}

// Usage example
window.addEventListener('scroll', throttle(() => {
	console.log("Scroll event throttled!")
}, 1000))

// Bellow is the normal behavior of scroll event 
// window.addEventListener('scroll', () => {
	// console.log("Scroll event throttled!")})