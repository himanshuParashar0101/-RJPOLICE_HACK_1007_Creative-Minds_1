function submitVote(option) {
    // Add your logic to handle the vote submission
    // For simplicity, let's just show the results
    showResults(option);
  }
  
  function showResults(selectedOption) {
    document.getElementById('options-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
  
    const resultBars = document.getElementById('result-bars');
  
    for (let i = 1; i <= 4; i++) {
      const bar = document.createElement('div');
      bar.className = 'result-bar';
      bar.style.width = i === selectedOption ? '100%' : '0%';
      resultBars.appendChild(bar);
    }
  }
  