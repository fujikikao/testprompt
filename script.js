const today = new Date();
today.setHours(0, 0, 0, 0);

const performanceDate = new Date(2026, 10, 7);
const millisecondsPerDay = 1000 * 60 * 60 * 24;
const daysUntilPerformance = Math.ceil((performanceDate - today) / millisecondsPerDay);
const countdown = document.getElementById('倒數');

if (countdown) {
  if (daysUntilPerformance > 0) {
    countdown.textContent = `距離台北場表演還有 ${daysUntilPerformance} 天`;
  } else if (daysUntilPerformance === 0) {
    countdown.textContent = '今天就是表演日！';
  } else {
    countdown.textContent = '本場表演已結束';
  }
}