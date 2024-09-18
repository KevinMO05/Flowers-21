
const startDate = new Date('2021-05-13T00:00:00'); 
function updateCounter() {
    const today = new Date();

    today.setHours(0, 0, 0, 0);
    const timeDiff = today - startDate; 
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); 
    document.getElementById('counter').textContent = `${daysDiff}`;
}

updateCounter();

setInterval(updateCounter, 1000 * 60 * 60 * 24);
