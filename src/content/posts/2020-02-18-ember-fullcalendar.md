---
title: Announcing An Ember Addon for Fullcalendar 4
slug: ember-fullcalendar
date: 2020-02-18
hero_cloudinary_id: fullcalendar-ember_tmo6cg
---

**TL;DR**: _a new [ember-fullcalendar](https://github.com/Mariana-Tek/ember-fullcalendar) addon based on Fullcalendar v4 is released this week. Here is some of my process and decisions._

## Backstory

My day job is working on a large [SaaS](https://en.wikipedia.org/wiki/Software_as_a_service) application at [Mariana Tek](https://marianatek.com/). We help boutique gyms with their business operations, which means our application serves a lot of purposes: point of sale, time clock, class scheduler, and a lot more. Having to write all this functionality from scratch would be difficult if not impossible, so I'm grateful for plugins in general and Ember's painless [addon](https://guides.emberjs.com/release/addons-and-dependencies/) system in particular.

While our application is on an earlier version Ember 3, we're in the process of a long walk to the exciting [Ember Octane](https://blog.emberjs.com/2019/12/20/octane-is-here.html). Part of this process has been gradually updating our addons. Our application, which is over four years old, had accrued some addons that are now abandoned. Most of these were easy to address, with one big exception - [Fullcalendar](https://fullcalendar.io/). Fullcalendar is a fantastic tool that allows the user to provide a fully-featured scheduling calendar (e.g. Google Calendar) with minimal code. The Ember Fullcalendar addon hadn't been updated in over a year and I really didn't want to write a calendar from the ground up. The writing was on the wall; I was going to have to write my first Ember addon.

## Well, not quite...

In actuality, my first inclination was to see if I could chip in with the _current_ Ember Fullcalendar plugin, but I found that Fullcalendar had done a major upgrade moving from [version 3 to version 4](https://fullcalendar.io/docs/upgrading-from-v3); having removed [jQuery](https://jquery.com/) and [Moment](https://momentjs.com/) as dependencies, and updated their API. If I wanted to fully get rid of jQuery as a dependency in our app it seemed I would have start from scratch.

## Inspiration

If I couldn't improve the current addon or use it as a guide for my new addon then what could I look at? For the Ember side of things I went to [Ember Observer](https://emberobserver.com/), a great resource for finding quality addons. I read through some of the popular addons that provide a similar service (bindings to a popular Javascript UI utility). This provided some interesting hints and ideas for structure, but I still needed some ideas for the Fullcalendar side of things. I thought I'd take a peek at the [`fullcalendar-react`](https://github.com/fullcalendar/fullcalendar-react) package and was pleasantly surprised to find that it barely breaks fifty lines of code.

`fullcalendar-react` provided the idea to avoid explicit bindings for each property or attribute and simply batch updates and pass them along to Fullcalendar. `componentDidMount()` becomes `didInsertElement()`, while `componentDidUpdate()` becomes `didUpdateAttrs()`. This makes the addon easier to maintain as I can upgrade its Fullcalendar dependency version with minimal updates to the addon's code. The Ember best practice of [Data Down, Actions Up](https://dockyard.com/blog/2015/10/14/best-practices-data-down-actions-up) aligns well with React's philosophy and if you account for differences in each framework's API many patterns are easily transferable.

## Try it out

The addon can be installed using `ember install @mariana-tek/ember-fullcalendar`. You can find further instruction in the [documentation](https://github.com/Mariana-Tek/ember-fullcalendar#mariana-tekember-fullcalendar).

Please feel free to check out the [source code](https://github.com/Mariana-Tek/ember-fullcalendar/blob/master/addon/components/full-calendar.js) or [report an issue](https://github.com/Mariana-Tek/ember-fullcalendar/issues). Enjoy!

### Acknowledgement

Thanks to my employer for the support in making this! If you think you'd like to work on a kind and supportive team that talks Ember, React, and—above all—Javascript, please [check us out](https://marianatek.com/careers).
