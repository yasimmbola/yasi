// Add smooth scrolling for links (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Optional: Add animation to buttons on load
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.link-button');
    buttons.forEach((button, index) => {
        button.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1}s`;
    });
});

// CSS for the fade-in animation
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);