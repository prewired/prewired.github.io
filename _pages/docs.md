---
layout: single
title: "Documents"
permalink: "/docs/"
header:
  image: /assets/images/participants-oct-2018.jpg
---
{% include base_path %}


{% assign mydata=site.data.foo %}

<table>
    <thead>
        <th>Name</th>
        <th>Date</th>
        <th>Description</th>
    </thead>
    <tbody>
    	  {% for doc in site.data.docs %}
        <tr>       
            <td><a href="{{ base_path }}/{{ doc.url }}">{{ doc.name}} </a></td>
            <td>{{ doc.date }}</td>
            <td>{{ doc.description }}</td>
        </tr>
    {% endfor %}
    </tbody>
</table>

<!-- [![](/assets/images/report_cover.jpg){: .align-left}]({{ base_path }}/pdfs/prewired-for-web.pdf)
To find out more about how we've developed and what we've been doing, read [our first Prewired report]({{ base_path }}/pdfs/prewired-for-web.pdf).
 -->

