
//<!-- Script to collapse the navbar after a link is clicked -->

    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        });
    });

    // Select the navbar element
    const navbar = document.querySelector('.navbar');

    // Add a scroll event listener to change the navbar background color
    window.addEventListener('scroll', () => {
        // Check if the page has scrolled down
        if (window.scrollY > 0) {
            // Add the 'scrolled' class to change the background color
            navbar.classList.add('scrolled');
        } else {
            // Remove the 'scrolled' class when at the top of the page
            navbar.classList.remove('scrolled');
        }
    });

	window.onload = function() {
		document.querySelector('.loader-container').style.display = 'none';
	};



//<!-- gallery section script -->
 
    // Array of image sets
    const imageSets = [
        [
            
            { src: 'p3.jpg', alt: 'Image 3' },
            { src: 'p4.jpg', alt: 'Image 4' },
            { src: 'p5.jpg', alt: 'Image 5' },
            { src: 'p6.jpg', alt: 'Image 6' },
            { src: 'p19.jpg', alt: 'Image 1' },
            { src: 'p23.jpg', alt: 'Image 2' }

        ],
        [
            { src: 'p7.jpg', alt: 'Image 7' },
            { src: 'p8.jpg', alt: 'Image 8' },
            { src: 'p9.jpg', alt: 'Image 9' },
            { src: 'p10.jpg', alt: 'Image 10' },
            { src: 'p19.jpg', alt: 'Image 11' },
            { src: 'p12.jpg', alt: 'Image 12' }
        ],
     [
           { src: 'p13.jpg', alt: 'Image 13' },
            { src: 'p14.jpg', alt: 'Image 14' },
            { src: 'p15.jpg', alt: 'Image 15' },
            { src: 'p16.jpg', alt: 'Image 16' },
            { src: 'p17.jpg', alt: 'Image 17' },
            { src: 'p18.jpg', alt: 'Image 18' }
        ] 
    ];

    let currentSet = 0; // Index of the current image set

    // Function to load a specific image set
    function loadImageSet(index) {
        const galleryItems = document.querySelectorAll('.gallery-item img');
        const selectedSet = imageSets[index];

        // Update each image in the gallery with the new set
        galleryItems.forEach((img, i) => {
            img.src = selectedSet[i].src;
            img.alt = selectedSet[i].alt;
        });
    }

    // Event listeners for buttons
    document.getElementById('prev-btn').addEventListener('click', () => {
        currentSet = (currentSet - 1 + imageSets.length) % imageSets.length;
        loadImageSet(currentSet);
    });

    document.getElementById('next-btn').addEventListener('click', () => {
        currentSet = (currentSet + 1) % imageSets.length;
        loadImageSet(currentSet);
    });

    // Load the initial set of images
    loadImageSet(currentSet);



