// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


//  owl carousel script
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
});

//    end owl carousel script 



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

/** banner */

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.count-card-count');

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.innerText.replace(/\D/g, '');
            const increment = Math.ceil(target / 200); // Increment speed
            let count = 0;

            const interval = setInterval(() => {
                count += increment;
                if (count > target) {
                    count = target; // Ensure we don't exceed the target
                    clearInterval(interval);
                }
                counter.innerText = `${count}+`;
            }, 5); // Update every 5 milliseconds
        };

        updateCount();
    });
});