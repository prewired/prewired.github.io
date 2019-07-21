---
layout: single
title: "Summer Hack 2019 Data"
permalink: /summerhack2019/data/
data_files:
  - Bombus_HSI_0.5_dissolve.shp
  - Hoverfly_HSI_0.5_dissolve.shp
---


## Data Files


{% for file in page.data_files %}
  * [{{ file }}]({{ /summerhack2019/data/ | absolute_url }}{{ file }})
{% endfor %}
