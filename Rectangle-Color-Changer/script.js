// Add the event listener to the document object, so that the callback function is called when the DOM is loaded. It is necessary as the script is placed in the head section of the HTML document.

document.addEventListener("DOMContentLoaded", function (event) {
    const center = document.querySelector("#center");    
    
    center.addEventListener("mousemove", function (cursor) {
        // Location of the rectangle object using DOM
        var rectangleLocation = center.getBoundingClientRect();
        // Get the X coordinate of the cursor
        const cursorX = cursor.clientX;
        const leftMostPoint = rectangleLocation.left;
        const relativePositionX = cursorX - leftMostPoint;
        // console.log(relativePositionX);

        // Now check is we are at left or right from the center
        if(relativePositionX < rectangleLocation.width/2){
            // The more left, more is the intensity of the color red
            // GSAP mapping function
            // gsap.utils.mapRange(inputMininum, inputMaximu, outputMinimum, outputMaximum, inputValue)
            var redIntensity = gsap.utils.mapRange(0, rectangleLocation.width/2, 255, 0, relativePositionX);

            gsap.to(center, {
                backgroundColor: `rgb(${redIntensity}, 0, 0)`,
                // Ease will be used to make the transition smooth, it is a GSAP property. Power4 is the type of ease, which means the transition will be fast at the beginning and slow at the end. 
                ease: Power4
            })
            
        }
        // change the color to white if the cursor is at the center
        else if(relativePositionX == rectangleLocation.width/2){
            // console.log("center");
            gsap.to(center, {
                backgroundColor: 'rgb(255, 255, 255)',
                ease: Power4
            })
        }
        else{
            // The more right, more is the intensity of the color blue
            // console.log("right");
            var blueIntensity = gsap.utils.mapRange(rectangleLocation.width/2, rectangleLocation.width, 0, 255, relativePositionX);

            gsap.to(center, {
                backgroundColor: `rgb(0, 0, ${blueIntensity})`,
                ease: Power4
            })
        }
    });

    center.addEventListener("mouseleave", function (cursor) {
        gsap.to(center, {
            backgroundColor: 'rgb(255, 255, 255)',
            ease: Power4
        })
    });
  });