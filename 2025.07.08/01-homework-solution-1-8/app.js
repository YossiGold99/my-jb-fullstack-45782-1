function showCurrentTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const timeString = hours.toString().padStart(2, '0') + ":" +
                     minutes.toString().padStart(2, '0') + ":" +
                     seconds.toString().padStart(2, '0');

  console.log("השעה הנוכחית היא: " + timeString);
}

// קריאה לפונקציה
showCurrentTime();

