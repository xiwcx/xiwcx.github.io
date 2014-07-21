---
layout: post
title: "A Punk Handbill for the Twenty-first Century with SVG"
categories: tech
---

Making fliers for my high school punk bands is probably the first step I took on the path to becoming a web developer. Since it was the early two thousands I pieced together a working knowledge of photoshop instead of cutting up my parent's magazines. I really enjoyed being self sufficient so when it came time to make the bands' websites I struggled through figuring that out as well.

It's been a while since I've booked a show, but I couldn't pass up the opportunity when [Dangers](http://wearedangers.com) said they were looking for help with east coast dates. Since it had also been a while since I'd made my own flyer I wanted to try out a technique I'd been contemplating for a while: animated handbills made with [SVG](http://en.wikipedia.org/wiki/Scalable_Vector_Graphics).

<div style="height:0;padding-bottom:130%;position:relative;overflow:hidden">
  <iframe src="http://welchcanavan.com/dngrs-grf/" frameBorder="0" style="position:absolute;height:100%;left:0;top:0;width:100%">
    <img src="http://welchcanavan.com/dngrs-grf/2014-08-09-dngrs-grf.jpg">
  </iframe>
  <a href="http://xiw.cx/dngrs-grf" style="position:absolute;height:45%;left:0;top:0;width:100%">&nbsp;</a>
</div>

You can grab the embed code here:

<textarea style="resize:none" rows="4" onclick="this.focus();this.select()" wrap="off" readonly="readonly"><div style="height:0;padding-bottom:130%;position:relative;overflow:hidden">
  <iframe src="http://welchcanavan.com/dngrs-grf/" frameBorder="0" style="position:absolute;height:100%;left:0;top:0;width:100%">
    <img src="http://welchcanavan.com/dngrs-grf/2014-08-09-dngrs-grf.jpg">
  </iframe>
  <a href="http://xiw.cx/dngrs-grf" style="position:absolute;height:45%;left:0;top:0;width:100%">&nbsp;</a>
</div></textarea>

In sci-fi movies animated advertisements are loud and obnoxious, but I wanted to try a subtler effect for my first attempt at this technique. After mulling the idea over with my lovely fianc&#232;, [Hannah](https://twitter.com/hannahxrene), she helped me figure out a design that would work and generously drew up the antlers since I can't illustrate my way out of a wet paper bag. The layering of the transparent antlers being both &#8220;below&#8221; and &#8220;above&#8221; the color pulsating band names was something that came out of our brainstorming.

It took a good amount of guessing and checking, but thanks to [codepen](http://codepen.io/xiwcx/pen/pEgHD?editors=110) (where you can check out the unminified, unprocessed code) that process was made much quicker.

Sure, the animation could have been done with a GIF, but I think SVG offers some serious advantages:

## Selectable text

While it might have been slightly more performant to convert the text to outlines I decided to go with SVG `<text>` as demonstrated in [Chris Coyier's article](http://css-tricks.com/svg-text-typographic-designs/) on the technique. While it did increase the overall size, I'm not sweating it as the entire thing is &#8776;70K over the wire. The real bonus of doing this is that someone can copy the info right off of the flyer in to their calender or a social platform.

## Responsiveness

I had read about [Media Queries Within SVG](http://timkadlec.com/2013/04/media-queries-within-svg/), but never had a real world need to try them out until now. The handbill's details (location, date...) are larger when the handbill renders smaller so that they'll be legible on small screens and smaller when the handbill renders larger so they have more room to breathe.

```sass
.details {
  transform: matrix(1.3, 0, 0, 1.3, 243, 419);

  @media screen and (min-width: 50em) {
    transform: matrix(1, 0, 0, 1, 253, 459);
  }
}
```

An interesting quirk I found is that SVG won't rerender when the window resizes, you need to do a full refresh to see the result. Hit me up if I'm wrong or you know a way around this.

## Flexibility

I wrote up a little chunk of [Sass](http://sass-lang.com/) to power the animation so that I could quickly change the number of gradient panels and the length of the entire animation.

```sass
$gradient-total: 3;
$gradient-time: 5s;
$gradient-total-time: $gradient-total * $gradient-time;

%gradient {
  animation: opacity $gradient-total-time infinite;
}

@for $i from 1 through $gradient-total {
  $index: $i - 1;

  .gradient--#{$i} {
    @extend %gradient;
    @if $index > 0 {
      animation-delay: $index * $gradient-time;
    }
  };
};
```

## Downsides

There's really not that many places you can share this. I knew Facebook and Twitter wouldn't play nice with something like this, but I was disheartened to find that even Tumblr mangles the iframe embed beyond repair. For now this solution will only work if you run your own blog or have access to the source code for your web page.

At the moment, this is barely more than a proof of concept. I'd love to see what people do with the concept (especially those with actual design and illustration chops). Try out the embed code and let me know if and where it works!
