---
layout: single
title: "Prewired Online"
permalink: /prewired-online/
toc: true
toc_label: "On This Page"
toc_icon: "cog"
---

## Introduction



{% for week in site.data.online.weeks %}
<h2>Date: {{ week.date }}</h2>
<h3>Challenge: {{ week.challenge.title }}</h3>
<img src="{{week.challenge.image | absolute_url}}">
<p>
    {{ week.challenge.description }}
</p>
{% endfor %}

