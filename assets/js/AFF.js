function submitFeedback() {
  // Add your logic to handle the feedback submission
  // For simplicity, let's just show a thank-you message
  showThankYouMessage();
}

function showThankYouMessage() {
  document.getElementById('feedback-form').style.display = 'none';
  document.getElementById('thank-you-message').style.display = 'block';
}
