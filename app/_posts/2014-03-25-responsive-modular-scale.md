---
layout: post
title:  "Responsive Modular Scale"
categories: tech
---

Recently I posted [an example of a Responsive Modular Scale on Sassmeister][sassmeister]. I wanted to go in to greater detail of the why and how.

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
