---
layout: single
classes: wide
title: "Prewired Online"
permalink: /prewired-online/
toc: true
toc_label: "On This Page"
toc_icon: "cog"
---

## Introduction

We have set up Prewired Online to explore ways of running Prewired during a period when it is not possible to hold events in CodeBase. We are using a videoconference platform which enables participants to join the sessions via a web browser (currently, we recommend using Chrome). The current structure of the sessions is roughly the following:
<ul>
	<li>Introduction to the session</li>
	<li>Round-up of news and what we've each been doing recently</li>
	<li>Discussion of last week's Challenge</li>
	<li>Breakout rooms on specific topics / workshops</li>
	<li>Presentation of Challenge for the coming week</li>
</ul>

We have a brief blogpost about what happened during <a href="{% post_url 2020-04-02-prewired-online-1 %}">the first session of Prewired Online</a>.

On the rest of this page, we will list topics and resources for the sessions on week-by-week basis.

{% for week in site.data.online.weeks %}
<h2 style="padding-left: 1em;background: #263238;color: #eeffff;line-height: 1.8;padding-bottom: .25em;">
Date: {{ week.date }}
</h2>

{% if week.challenge.title %}
<h3>Challenge: {{ week.challenge.title }}</h3>
{% endif %}

{% if week.challenge.image %}
<img src="{{week.challenge.image | absolute_url}}">
{% endif %}
<p>
    {{ week.challenge.description }}

	{% if week.challenge.solution %}
<br/>
	<a href ="{{week.challenge.solution}}">Sample solution (Jupyter Notebook)</a>
</p>
{% endif %}

<h3>Workshop</h3>
<ul>
<li>Topic: {{week.workshops.topic}}</li>
<li>Author: {{week.workshops.author}}</li>
<li>Resources:</li>
<ul>
{% for item in week.workshops.resources %}
<li>{{item.resource}}</li>
{% endfor %}
</ul>
</ul>
{% endfor %}


