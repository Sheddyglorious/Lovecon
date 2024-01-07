function calculateLove() {
    let yourName = document.getElementById("yourName").value;
    let partnerName = document.getElementById("partnerName").value;

    if (yourName.trim() === "" || partnerName.trim() === "") {
        alert("Please enter both names.");
        return;
    }

    // Generate a random love score between 1 and 100
    let loveScore = Math.floor(Math.random() * 100) + 1;

    let resultElement = document.getElementById("result");
    resultElement.innerHTML = "<p>Love Compatibility for:</p><h2>" + yourName + " & " + partnerName + "</h2>";
    resultElement.innerHTML += "<p>Your Love Score:</p><h2>" + loveScore + "%</h2>";

    if (loveScore > 70 || loveScore === 70) {
        resultElement.innerHTML += "<p>Congratulations! Perfect Match.</p>";
    } 
    
    if (loveScore > 49 && loveScore < 70) {
        resultElement.innerHTML += "<p>Congratulations! Love is in the air.</p>";
    }
    
    if (loveScore > 39 && loveScore < 50) {
        resultElement.innerHTML += "<p>Wow your love is superb!</p>";
    }
    else if (loveScore < 39 || loveScore === 39){
        resultElement.innerHTML += "<p>Maybe there's room for improvement. Keep the love alive!</p>";
    }
}



//footer
function changeText(element) {
  // Reset all items to symbols
  document.querySelectorAll('.footer-item').forEach(item => {
    item.classList.remove('active');
  });

  // Toggle the clicked item between symbol and text
  element.classList.toggle('active');
}
