document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello World App Initialized');

    // Non-interactive app logic:
    // We could add automatic rotations or data fetching here if needed.
    // For now, it simply ensures the greeting is ready.
    const greeting = document.getElementById('greeting');
    if (greeting) {
        greeting.style.opacity = '1';
    }
});