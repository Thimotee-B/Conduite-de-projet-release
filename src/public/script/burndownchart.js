/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = "Nunito", "-apple-system,system-ui,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif"
Chart.defaults.global.defaultFontColor = "#00315F"

let nbSprint = document.getElementById("nbSprint").innerHTML
let coutTotal = document.getElementById("allUsTotalCout").innerHTML

function getLabels(){
    let labels = ["Sprint 0"]
    let str = "Sprint "
    for(let i=0; i<parseInt(nbSprint, 10); i++){
        labels.push(str+(i+1))
    }
    return labels
}

function getData(){
    let data = []
    let total = parseInt(coutTotal,10)
    data.push(total)
    for(let i=0; i<parseInt(nbSprint, 10); i++){
        let usDone = document.getElementById("usDoneCout"+i).innerHTML
        // temporaire
        if(parseInt(usDone) == 0){
            return data
        }
        total -= parseInt(usDone)
        data.push(total)
    }
    return data   
}

function getPerfectData(){
    let data = []
    let total = parseInt(coutTotal,10)
    let i = parseInt(nbSprint,10)
    while(i>0){
        total = coutTotal*i/(parseInt(nbSprint,10))
        data.push(Math.round(total))
        i--
    }
    data.push(0)
    return data   
}


function projection(){
    let data = getData()
    let total = parseInt(coutTotal,10)
    let nbRestant = getPerfectData().length-data.length-1
    let cout = (data[data.length-1])/(nbRestant+1)
    console.log(nbRestant)
    console.log(cout)
    while(nbRestant>0){
        data.push(Math.round(data[data.length-1]-cout))
        nbRestant--
    }
    data.push(0)
    return data   
}

console.log(projection())

// Area Chart Example
let ctx = document.getElementById("myAreaChart")
let myLineChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: getLabels(),
        datasets: [{
            label: "Trajectoire réelle",
            backgroundColor: "rgb(255,255,255,1)",
            borderColor: "rgb(0,49,95,1)",
            pointRadius: 3,
            pointBackgroundColor: "rgb(0,49,95)",
            pointBorderColor: "rrgb(0,49,95)",
            pointHoverRadius: 3,
            pointHoverBackgroundColor: "rgb(0,49,95)",
            pointHoverBorderColor: "rgb(0,49,95)",
            pointHitRadius: 10,
            pointBorderWidth: 2,
            data: getData(),
        },
        {
            label: "Trajectoire idéale",
            backgroundColor: "rgb(255,255,255,1)",
            borderColor: "rgb(231,74,59)",
            pointRadius: 3,
            pointBackgroundColor: "rgb(231,74,59)",
            pointBorderColor: "rrgb(231,74,59)",
            pointHoverRadius: 3,
            pointHoverBackgroundColor: "rgb(231,74,59)",
            pointHoverBorderColor: "rgb(231,74,59)",
            pointHitRadius: 10,
            pointBorderWidth: 2,
            data: getPerfectData(),
        },
        {
            label: "Projection",
            backgroundColor: "rgb(255,255,255,1)",
            borderColor: "rgb(0,49,95,1)",
            pointRadius: 3,
            pointBackgroundColor: "rgb(0,49,95)",
            pointBorderColor: "rrgb(0,49,95)",
            pointHoverRadius: 3,
            pointHoverBackgroundColor: "rgb(0,49,95)",
            pointHoverBorderColor: "rgb(0,49,95)",
            pointHitRadius: 10,
            borderWidth: 1,
            pointBorderWidth: 1,
            borderDash: [5, 5],
            data: projection(),
        }],
    },
    options: {
        maintainAspectRatio: false,
        layout: {
            padding: {
                left: 10,
                right: 25,
                top: 25,
                bottom: 0
            }
        },
        elements: {
            line: {
                tension: 0
            }
        },
        scales: {
            xAxes: [{
                time: {
                    unit: "date"
                },
                gridLines: {
                    display: false,
                    drawBorder: false
                },
            }],
            yAxes: [{
                ticks: {
                    maxTicksLimit: 5,
                    padding: 10,
                },
                gridLines: {
                    color: "rgb(234, 236, 244)",
                    zeroLineColor: "rgb(234, 236, 244)",
                    drawBorder: false,
                    borderDash: [2],
                    zeroLineBorderDash: [2]
                },
                scaleLabel: {
                    display: true,
                    labelString: "Coût US",
                    fontSize: 10 
                }
            }],
        },
        legend: {
            display: true
        },
        tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#00315F",
            titleMarginBottom: 10,
            titleFontColor: "#00315F",
            titleFontSize: 14,
            borderColor: "#00315F",
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            intersect: false,
            mode: "single",
            caretPadding: 10,
            callbacks: {
                label: function(tooltipItem, chart) {
                    let coutRestant = parseInt(tooltipItem.yLabel, 10) || "0"
                    let str = "Coût produit: "+ (coutTotal-coutRestant)+" | Coût restant: "+coutRestant
                    return str
                }
            }
        }
    }
})