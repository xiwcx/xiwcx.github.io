---
layout: post
title:  "Responsive Typographic Modular Scale with Sass"
categories: tech
---

I was relieved when I first came across [Tim Brown]'s [talk] on typographic modular scale and his [accompanying tool]. For a non-designer like me, it takes the guess work out of deciding upon font sizes. [Team Sass]'s [sass plugin] makes using a modular scale even easier.

This is all fantastic and gets you most of the way there, but the problem is that most modular scales get big pretty quickly and top level headings are then too large for small screens. You can give headings smaller sizes for smaller screens in an ad-hoc fashion, but that seemed a bit too hacky of a solution for me. I'd been kicking around an idea to have a different scale for small screens that doesn't grow as dramatically and with the help of [Sassmeister] I made a [working example] of this idea. Following is a step by step breakdown of the code from this example.

First you'll need to specify your [default] modular scale settings:

```scss
$ms-base   : 16px;
$ms-ratio  : $fourth;
```

Followed by your default scale variables:

```scss
$ms-norm     : $ms-base;
$ms-med      : ms(2);
$ms-lrg      : ms(3);
$ms-xlrg     : ms(4);
$ms-xxlrg    : ms(5);
$ms-xxxlrg   : ms(6);
```

Typically, it is best to  design things mobile first, but in this instance the small screens are the exception. It really doesn't matter which you consider your "default", and using this idea there can be as many different scales for screen sizes as the design calls for and any scale could be considered the default.

In this example I stuck with the ```ms``` namespace for variables even though these aren't official Modular Scale settings. You'll want to pass the modular scale variable in to another variable so it can be easily changed when you set up the small screen scale:

```scss
$ms-smscr-ratio: $minor-third;

$ms-smscr-norm     : $ms-base;
$ms-smscr-med      : ms(2, $ms-base, $ms-smscr-ratio);
$ms-smscr-lrg      : ms(3, $ms-base, $ms-smscr-ratio);
$ms-smscr-xlrg     : ms(4, $ms-base, $ms-smscr-ratio);
$ms-smscr-xxlrg    : ms(5, $ms-base, $ms-smscr-ratio);
$ms-smscr-xxxlrg   : ms(6, $ms-base, $ms-smscr-ratio);
```
In my sassmeister example I set the font-sizes directly on heading elements, in a real project you mighty want to set up an array of [placeholder selectors] that look something like this:

```scss
%font-size-med {
  font-size: $ms-smscr-med

  @media screen and (min-width: 30em) {
    font-size: $ms-med;
  }
}
```

An example that utilizes [Sass Maps], the [Breakpoint] plugin, and Compass' [vertical rhythm] looks something like:

```scss
$sizes: (
  lrg: (
    $ms-lrg,
    $ms-smscr-lrg
  ),
  med:  (
    $ms-med,
    $ms-smscr-med
  ),
  norm:  (
    $ms-norm,
    $ms-smscr-norm
  )
);

@each $name, $size in $sizes {
  %font-size-#{$name} {
    @include adjust-font-size-to( nth($size, 2) );

    @include breakpoint($bp-sm) {
      @include adjust-font-size-to( nth($size, 1) );
    }
  }
}
```

Declaring the media query in the placeholder selector gets around the [current inability] to extend from within media queries in Sass. This will provide you with placeholder selectors for font size that can be mixed and matched with placeholder selector for font style like so:

```scss
.subhh2 {
  @extend %font-alternate;
  @extend %font-size-xlrg;
}
```

Obviously this doesn't cover all use cases, there are some instances in which you might want a font's size to change at a different rate or screen size than all of the other fonts, but I think this is a good way to quickly set up something very <abbr title="Don't Repeat Yourself">[DRY][]</abbr>, flexible, and easily altered.

[Tim Brown]: http://tbrown.org/
[talk]: http://vimeo.com/17079380
[accompanying tool]: http://modularscale.com/
[working example]: http://sassmeister.com/gist/9749589
[Team Sass]: https://github.com/Team-Sass/
[sass plugin]: http://scottkellum.com/
[Compass]: http://compass-style.org/
[vertical rhythm]: http://compass-style.org/reference/compass/typography/vertical_rhythm/
[Sassmeister]: http://sassmeister.com
[default]: https://github.com/Team-Sass/modular-scale#usage
[Sass Maps]: http://sass-lang.com/documentation/file.SASS_REFERENCE.html#maps
[placeholder selectors]: http://sass-lang.com/documentation/file.SASS_REFERENCE.html#placeholder_selectors_
[current inability]: https://github.com/nex3/sass/issues/1050
[DRY]: http://en.wikipedia.org/wiki/Don't_repeat_yourself
[Breakpoint]: http://breakpoint-sass.com/
