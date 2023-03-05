const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const edgesSize = document.getElementById('edgesSize');
const edgesColor = document.getElementById('edgesColor');
const verticesSize = document.getElementById('verticesSize');
const verticesColor = document.getElementById('verticesColor');

const edgesSizeValue = document.getElementById("edgesSizeValue");
const verticesSizeValue = document.getElementById("verticesSizeValue");

edgesSizeValue.innerHTML = edgesSize.value;
verticesSizeValue.innerHTML = verticesSize.value;

context.lineWidth = edgesSize.value;
let verticesSizeCanvas = verticesSize.value;

let edgesColorCanvas = edgesColor.value;
let verticesColorCanvas = verticesColor.value;

edgesSize.addEventListener("input", event => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    const value = event.target.value;
    context.lineWidth = value;
    edgesSizeValue.innerHTML = value;
    render();
});

verticesSize.addEventListener("input", event => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    const value = event.target.value;
    verticesSizeCanvas = value;
    verticesSizeValue.innerHTML = value;
    render();
});

edgesColor.addEventListener("input", event => {
    const value = event.target.value;
    edgesColorCanvas = value;
    render();
});

verticesColor.addEventListener("input", event => {
    const value = event.target.value;
    verticesColorCanvas = value;
    render();
});

function drawLine(startX, startY, finishX, finishY) {
    context.strokeStyle = edgesColorCanvas;
    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(finishX, finishY);
    context.stroke();
    context.closePath();
}

function drawDot(x, y) {
    context.fillStyle = verticesColorCanvas;
    context.beginPath();
    context.arc(x, y, verticesSizeCanvas, 0, 2 * Math.PI, false);
    context.closePath();
    context.fill();
}

function drawBezierCurve(cp0x, cp0y, cp1x, cp1y, cp2x, cp2y) {
    context.beginPath();
    context.strokeStyle = edgesColorCanvas;
    context.lineTo(cp0x, cp0y);
    context.bezierCurveTo(cp0x, cp0y, cp1x, cp1y, cp2x, cp2y);
    context.stroke();
}

function drawArc(x, y, r) {
    context.strokeStyle = edgesColorCanvas;
    context.beginPath();
    context.arc(x, y, r, 0, 2 * Math.PI, false);
    context.stroke();
    context.closePath();
}

function render() {
    drawArc(573, 378, 75);
    drawBezierCurve(288, 593, 505, 610, 500, 400);
    drawLine(168, 175, 82, 430);
    drawLine(82, 430, 288, 593);
    drawLine(288, 593, 396, 175);
    drawLine(168, 175, 396, 175);
    drawLine(502, 404, 396, 175);
    drawLine(288, 593, 502, 404);
    drawDot(168, 175);
    drawDot(82, 430);
    drawDot(288, 593);
    drawDot(396, 175);
    drawDot(502, 404);
}

render();
