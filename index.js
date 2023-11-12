function updateCountdown() {
    const currentTime = new Date();
    const christmas = new Date(currentTime.getFullYear(), 11, 24);
    console.log("🚀 ~ file: index.js:4 ~ updateCountdown ~ christmas:", christmas)
  
    if (currentTime > christmas) {
      christmas.setFullYear(currentTime.getFullYear()+1);
    }
  
    const timeDifference = christmas - currentTime;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
    document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
  
  setInterval(updateCountdown, 1000);

  