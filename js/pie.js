
$( '.chart--bar' ).highcharts({
  "chart": {
    "type": "bar"
  },
  "credits": {
    "enabled": false
  },
  "title": null,
  "plotOptions": {
    "bar": {
      "pointWidth": 30,
      "color": "#90d6f3",
      "colorByPoint": true,
      "colors": [
        "#90d6f3",
        "#61c5ef",
        "#0fa0dd"
      ]
    },
  },
  "xAxis": {
    "min": 0,
    "title": {
      "text": null
    },
      "labels": {
          "style" : {
              "textTransform": "uppercase",
              "color": "#222"
          }
      },
    "categories": [
      "Photoshop",
      "css3",
      "html5"
    ]
  },
  "yAxis": {
      "title": {
          "text": "Posts by People",

          "margin": 15,
          "style": {
              "fontSize": "10px",
              "fontWeight": "normal",
              "textTransform": "uppercase",
              "color": "white"
          }
      },
      "labels": {
          "style" : {
              "fontSize": "12px",
              "color": "#222"
          }
      }
  },
  "legend": {
    "enabled": false
  },
  "series": [
    {
      "type": "bar",
      "data": [
        2800,
        160000,
        80000
      ]
    }
  ]
});
