function charts(selectedPatientID) {
    d3.json("samples.json").then((data) => {
      var plottingData = data.samples;
      var item = plottingData.filter(
        sampleitem => sampleitem.id == selectedPatientID
      )[0];
  
      console.log(item);
      var ids = item.otu_ids;
      var labels = item.otu_labels;
      var values = item.sample_values;
  
      // Horizontal Bar Char
      var trace1 = {
        x: values.slice(0, 10).reverse(),
        y: ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
        text: labels.slice(0, 10).reverse(),
        type: "bar",
        orientation: "h",
      };
  
      var data = [trace1];
  
      var layout = {
        title: "Top 10 Cultures Found",
        xaxis: { autorange: true },
        yaxis: { autorange: true },
        margin: { t: 100, l: 100 },
        height: 400,
      };
  
      Plotly.newPlot("bar", data, layout);
  
      // Bubble Chart
      var trace2 = {
        x: ids,
        y: values,
        text: labels,
        mode: "markers",
        marker: {
          color: ids,
          size: values,
          colorscale: "Earth",
        },
      };
  
      var data = [trace2];
  
      var layout = {
        margin: { t: 20 },
        xaxis: { title: "OTU ID" },
        hovermode: "closest",
        width: window.width,
      };
  
      Plotly.newPlot("bubble", data, layout);
    });
  }
  
  // Demographic Info
  function demo(selectedPatientID) {
    d3.json("samples.json").then(data => {
      var MetaData = data.metadata;
      var item = MetaData.filter(
        (sampleitem) => sampleitem.id == selectedPatientID
      )[0];
      var demographicInfoBox = d3.select("#sample-metadata");
      demographicInfoBox.html("");
      Object.entries(item).forEach(([key, value]) => {
        demographicInfoBox.append("h5").text(`${key}: ${value}`);
      });
  
      // Gauge Chart(reference to https://plot.ly/javascript/gauge-charts/ Gauge Chart coding)
      var guageData = [
        {
          domain: { x: [0, 5], y: [0, 1] },
          value: item.wfreq,
          text: item.wfreq,
          type: "indicator",
          mode: "gauge+number",
          
          gauge: {
            axis: { range: [null, 9] },
            steps: [
              { range: [0, 1], color: "rgb(204,255,255)" },
              { range: [1, 2], color: "rgb(153,255,255)" },
              { range: [2, 3], color: "rgb(102,255,255)" },
              { range: [3, 4], color: "rgb(0,204,204)" },
              { range: [4, 5], color: "rgb(0,153,153)" },
              { range: [5, 6], color: "rgb(0,102,102)" },
              { range: [6, 7], color: "rgb(0,76,53)" },
              { range: [7, 8], color: "rgb(0,51,51)" },
              { range: [8, 9], color: "rgb(0,25,51)" },
            ],
          },
        },
      ];
  
      var layout = {
        title: "<b>Belly Button Washing Frequency</b> <br>Scrubs Per Week</br>",
        width: 350,
        height: 350,
        margin: { t: 50, r: 25, l: 25, b: 25 },
        paper_bgcolor: "lavender",
      };
      Plotly.newPlot("gauge", guageData, layout);
    });
  }
  
  
  //  Initializes the page with default plots using first sample
  function init(){
     // Set up the DropDown and append names
    var dropdown=d3.select("#selDataset");
    
    d3.json("samples.json").then(data=>{
        console.log(data.names)
    
        data.names.forEach(name=>{
            dropdown.append(`option`).text(name).property('value', name);
        });
        // Reset demographic info and visuals to first sample when page is refreshed.
        const firstSample = data.names[0];
        charts(firstSample);
        demo(firstSample);

    });
}
// Pull data for new subject into demo and charts.
function optionChanged(newSample) {
    charts(newSample);
    demo(newSample);
  }
init();