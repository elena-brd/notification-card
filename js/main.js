const notificationBtn = document.getElementById('notification-number-btn');
const notificationCards = document.getElementById('notification-cards');
const markAsRead = document.getElementById('btn-mark-as-read');
const notificationCard = document.querySelectorAll('notification-card')


function viewNotifications() {
  if (notificationCards.style.display = 'none') {
    notificationCards.style.display = 'block'
  }
}

notificationBtn.addEventListener('click', viewNotifications);