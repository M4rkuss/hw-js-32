let elem = document.getElementById('canvas');
let elemContext = elem.getContext('2d');

let data = ["HTML", "CSS", "JS", "SASS", "GULP"];
let dataColors = ["orange", "blue", "yellow", "pink", "tomato"];

let prevAngle = 0;
for(let i = 0; i < data.length; i++) {
  let angle = prevAngle + 1/(i+1)*Math.PI*2;
  elemContext.fillStyle = dataColors[i];
  elemContext.beginPath();
  elemContext.moveTo(250,250);
  elemContext.arc(250,250, 100, prevAngle, angle, false);
  elemContext.lineTo(250,250);
  elemContext.stroke();
  elemContext.fill();
  prevAngle = angle;
}

let metrics = elemContext.measureText('Some statistic');
elemContext.fillStyle = 'black';
elemContext.font = `italic ${25}px Arial`;
elemContext.fillText('Some statistic', metrics.width, 400);