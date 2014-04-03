---
layout: post
title:  "Responsive Modular Scale"
categories: tech
---

I was relieved when I first came across [Tim Brown]'s [talk] on typographic modular scale and his [accompanying tool]. It takes the guess work out of deciding upon font sizes and is part of a [larger effort] to bring decades (centuries?) of typographic wisdom to the web.

[Scott Kellum]'s [sass plugin] makes using a modular scale even easier. Combined with [Compass]' [vertical rhythm] you can easily a nice flow to your site's typography.

This is all fantastic and gets you most of the way there, but you'll find that your large fonts

[sassmeister]: http://sassmeister.com/gist/9749589

First you want to set your default modular scale:

```scss
$ms-base   : 16px;
$ms-ratio  : $fourth;
```

Next you can set your default scale variables:

```scss
// Default Variables
$ms-norm     : $ms-base;
$ms-med      : ms(2);
$ms-lrg      : ms(3);
$ms-xlrg     : ms(4);
$ms-xxlrg    : ms(5);
$ms-xxxlrg   : ms(6);
```

```scss
// Small Screen Variables
$ms-smscr-ratio: $minor-third;

$ms-smscr-norm     : $ms-base;
$ms-smscr-med      : ms(2, $ms-base, $ms-smscr-ratio);
$ms-smscr-lrg      : ms(3, $ms-base, $ms-smscr-ratio);
$ms-smscr-xlrg     : ms(4, $ms-base, $ms-smscr-ratio);
$ms-smscr-xxlrg    : ms(5, $ms-base, $ms-smscr-ratio);
$ms-smscr-xxxlrg   : ms(6, $ms-base, $ms-smscr-ratio);
```

[Tim Brown]: http://tbrown.org/
[talk]: http://vimeo.com/17079380
[accompanying tool]: http://modularscale.com/
[larger effort]: http://webtypography.net/
[Scott Kellum]: https://github.com/Team-Sass/modular-scale
[sass plugin]: http://scottkellum.com/
[Compass]: http://compass-style.org/
[vertical rhythm]: http://compass-style.org/reference/compass/typography/vertical_rhythm/
