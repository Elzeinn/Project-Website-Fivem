document.addEventListener("DOMContentLoaded", function() {
    // Simulate loading delay (optional)
    setTimeout(() => {
        document.body.classList.remove('loading');
        document.body.classList.add('loaded');

        // Counter animation
        const counterElement = document.getElementById('counter');
        const targetNumber = 500;
        const duration = 4000; 
        const frameRate = 1000 / 60; 
        const totalFrames = duration / frameRate;
        const increment = targetNumber / totalFrames;
        let currentNumber = 0;

        const counterAnimation = setInterval(() => {
            currentNumber += increment;
            if (currentNumber >= targetNumber) {
                currentNumber = targetNumber;
                clearInterval(counterAnimation);
            }
            counterElement.textContent = Math.floor(currentNumber);
        }, frameRate);

        // Statistik animations
        setTimeout(() => {
            document.querySelector('.statistik-card').classList.add('visible');
            
            document.querySelectorAll('.jumlah').forEach((element, index) => {
                setTimeout(() => {
                    element.classList.add('visible');
                }, index * 200); 
            });

            document.querySelectorAll('.statistik-text').forEach((element, index) => {
                setTimeout(() => {
                    element.classList.add('visible');
                }, index * 200 + 200); 
            });
        }, 500); 

        // Profile cards animation
        document.querySelectorAll('.profile-card').forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 300); 
        });
    }, 2000); 
});


document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    const navbarLinks = document.querySelector('.navbar-menu ul');

    hamburger.addEventListener('click', function() {
        navbarLinks.classList.toggle('active');
        
        // Animasi Hamburger Menu
        hamburger.classList.toggle('toggle');
    });
});
