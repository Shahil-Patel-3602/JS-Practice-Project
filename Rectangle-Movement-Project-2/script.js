// let divElement = document.querySelector('#rect');

window.addEventListener('mousemove', function(details){

    // console.log(details.clientX);

    var rectangle = this.document.querySelector('#rect');
    // width of the rectangle element

    var directRectWidth = rectangle.clientWidth;
    // clientWidth represents the inner width of an element, which includes the content width and excludes any padding or scrollbar width (if applicable). It's a straightforward way to get the width of an element's content area.
    
    // This line of code uses the getBoundingClientRect() method to obtain an object that contains various properties about the position and dimensions of the rectangle element, including its width. This method is useful when you need more information about the element's position and size relative to the viewport. It includes information like the element's position, width, height, and distances to the viewport's edges.

    var rectWidth = rectangle.getBoundingClientRect().width;

    // MapRange: Input Minimum, Input Maximum, Output Minimum, Output Maximum, Value 
    console.log(this.window.innerWidth)

    let mappedValue = gsap.utils.mapRange(0, window.innerWidth, 100+rectWidth/2, window.innerWidth-100-rectWidth/2, details.clientX)

    gsap.to('#rect', {
        left: mappedValue + 'px',
        ease: Power3
    });
});
