# Belly Button Biodiversity

In this assignment, I build an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/) using HTML, JavaScript, D3 and the Plot.ly libraries.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

GitHub page: https://sesu0722.github.io/sesu0722.github.io-Belly-Button-Biodiversity-dashboard/

## Visaulization

The dashboard includes a interactive dropdown to select id to show it's respective charts and demographic information. 
![dashboard_1](https://github.com/sesu0722/-Belly-Button-Biodiversity-dashboard/blob/main/Images/dashboard_1.png)
![bubblechart](https://github.com/sesu0722/-Belly-Button-Biodiversity-dashboard/blob/main/Images/bubblechart.png)



### Charts and Demographic information box

1. Use the D3 library to read the data file `samples.json`

2. A horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

  * Use `sample_values` as the values for the bar chart.

  * Use `otu_ids` as the labels for the bar chart.

  * Use `otu_labels` as the hovertext for the chart.

  ![barchart](https://github.com/sesu0722/-Belly-Button-Biodiversity-dashboard/blob/main/Images/barchart.png)

3. A bubble chart that displays each sample.

  * Use `otu_ids` for the x values.

  * Use `sample_values` for the y values.

  * Use `sample_values` for the marker size.

  * Use `otu_ids` for the marker colors.

  * Use `otu_labels` for the text values.

![bubblechart](https://github.com/sesu0722/-Belly-Button-Biodiversity-dashboard/blob/main/Images/bubblechart.png)

4. Display the sample metadata, i.e., an individual's demographic information.

5. Display each key-value pair from the metadata JSON object somewhere on the page.

![demoinfobox](https://github.com/sesu0722/-Belly-Button-Biodiversity-dashboard/blob/main/Images/demoinfobox.png)

6. Update all the plots when a new sample is selected.

7.GitHub page: https://sesu0722.github.io/sesu0722.github.io-Belly-Button-Biodiversity-dashboard/

8. A gauge chart shows the weekly washing frequency of the individual

  * Adapt the Gauge Chart from <https://plot.ly/javascript/gauge-charts/> to plot the weekly washing frequency of the individual.

  * Modify the example gauge code to account for values ranging from 0 through 9.

  * Update the chart whenever a new sample is selected.
  
![gaugechart](https://github.com/sesu0722/-Belly-Button-Biodiversity-dashboard/blob/main/Images/gaugechart.png)





## References

Hulcr, J. et al. (2012) _A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable_. Retrieved from: [http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/](http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/)

- - -

© 2022 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
