---
layout: single
classes: wide
title: "Prewired Online"
permalink: /prewired-online/
#header:
# image: /assets/images/p5strapline.jpg
toc: false
toc_label: "On This Page"
toc_icon: "cog"
---

<!--![5.js @ Prewired Online](/assets/images/p5strapline.jpg){: .align-center}-->

## Introduction

We set up Prewired Online to explore ways of running Prewired during a period
when it is not possible to hold events in CodeBase. Information on the
sessions that we ran us listed below. However, since attendance levels have
been low, we have decided to suspend the online sessions for the time being.

If you would be interested in getting updates on the possibility of Prewired
Online restarting, please get in touch with us by email at <a href="mailto:hello@prewired.org">hello@prewired.org</a>.

 <!-- We are using the Blackboard Collaborate videoconference platform which enables participants to join the sessions via a web browser (currently, we recommend using Chrome). -->

<!-- Make sure you sign up to <a href="https://eepurl.com/dv2dPb" target="_blank">our mailing list</a> to get registration details for Prewired Online. A link for joining the session will be sent out to all registered participants. -->

<!-- Over the coming weeks, we will focus on creating digital art and games with [p5.js](https://p5js.org). We will run two strands in parallel, one for newcomers to coding and another for more experienced programmers.  -->

<div align="center">
<video width="400" height="400" controls="controls" poster="/assets/images/face-thumbnail.png">
  <source src="/assets/images/make-a-face.mp4" type="video/mp4">
  	 Sorry, your browser doesn't support HTML5 videos.
</video>
</div>


<!-- The current structure of the sessions is roughly the following:
<ul>
	<li>Introduction to the session</li>
	<li>Round-up of news and what we've each been doing recently</li>
	<li>Breakout rooms on using p5.js</li>
	<li>Review of the session and feedback</li>
</ul>


On the rest of this page, we will list topics and resources for the sessions on week-by-week basis. -->

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


