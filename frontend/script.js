document.addEventListener('DOMContentLoaded', () => {
    const waterButton = document.getElementById('water-flower-btn');
    const lastWateredDisplay = document.getElementById('last-watered-time');
    const notificationArea = document.getElementById('notification-area');

    waterButton.addEventListener('click', () => {
        waterFlower();
    });

    function waterFlower() {
        // Placeholder for AJAX call to backend
        // For now, we'll just simulate the action
        const now = new Date();
        updateLastWateredTime(now);
        showNotification("The flower has been watered!");
    }

    function updateLastWateredTime(time) {
        lastWateredDisplay.textContent = time.toLocaleString();
    }

    function showNotification(message) {
        notificationArea.textContent = message;
        // Optional: Clear the notification after a few seconds
        setTimeout(() => {
            notificationArea.textContent = '';
        }, 5000);
    }
});
