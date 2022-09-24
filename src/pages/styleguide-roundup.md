---
date: 2014-04-20
title: Styleguide Generator Roundup
---

Styleguides for websites are by no means a [new idea], but they are more easily talked about than implemented, which is why people are [still advocating][1] for them.

Thankfully there are many tools—with more arriving all the time—that automatically generate styleguides based directly upon the code you write. Recently I was tasked with creating a living styleguide by my employer and I decided to take a good look at my alternatives before starting. Following is a run down of the strengths and weaknesses of various options. While I wasn't able to investigate [all of them], I think I covered a diverse group.

It became clear in my research that there are two kinds of generators: some are better for designing while others are better for documenting. I've split them in to these two groups.

## Generators for Designing

If you're still trying things out, exploring, or designing in the browser these are the tools for you.

### Pattern Lab

[Pattern Lab] is built by [Dave Olson] and [Brad Frost] based upon Frost's [atomic design] methodology. Atomic Design is a fantastic concept, starting out with that level of organization is big win. Pattern Lab comes out of the box with a pretty complete set of HTML elements to ensure you don't forget anything when creating your base styles. That way when you actually need an HTML5 Range input down the line, you're already covered.

If you don't like the idea of working with PHP there is also a Node version, but it's apparently [behind] in terms of features. Brad Frost has also documented his [typical Gruntfile] for compiling Sass files in conjunction with Pattern lab.

### Style Prototype

[Style Prototype] is built by [Mason Wendell] and [Sam Richard] of [Team Sass] and just might be the Cadillac of styleguide generators. Style Prototype projects are scaffolded with [Yeoman] and include a wide arrary of features including (but not limited to) automatically generated [Style Tiles], [versioning] for style, [deployment] to a preview server, and exportation of your finished product as a [Compass extension].

You will need to be pretty familiar with [Sass] as the .scss files—while intelligently organized—are a little tricky to wrap your head around at first. Style Prototype is probably the most fully featured of the generators, but it is also the most opinionated in terms of workflow and structure.

Apparently [2.0 is on the way], so keep a lookout.

## Generators for Documenting

If you're working with existing designs, sites, or patterns consider one of these:

### Kalei, KSS, and Styledocco

[Kalei], [KSS], and [StyleDocco] are all pretty similar. They parse your preprocessed or plain old stylesheets for formatted documentation blocks and spit out a documentation site with a default style. These are definitely the quickest options for getting you up and running with a styleguide. Check [The Style Guide Guide] for their various technology stack compatibilities.

### Hologram

[Hologram] came on my radar in the last hour of my search thanks to a tweet from [Nicole Sullivan] and ended up winning me over.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">New talk about <a href="https://twitter.com/hashtag/hologram?src=hash&amp;ref_src=twsrc%5Etfw">#hologram</a>, a style guide generator. With link to our live style guide! <a href="https://twitter.com/hashtag/bootstrap3?src=hash&amp;ref_src=twsrc%5Etfw">#bootstrap3</a> <a href="http://t.co/2BoR3LDOt8">http://t.co/2BoR3LDOt8</a> /w Colin O&#39;Byrne</p>&mdash; Nicole Sullivan (@stubbornella) <a href="https://twitter.com/stubbornella/status/439078802019196929?ref_src=twsrc%5Etfw">February 27, 2014</a></blockquote>

Built by the developer team at [Trulia], Hologram is simple, flexible, and customizable. It comes with no boilerplate markup or default style, but it does come with the ability to parse the [widest variety] of file types of any of the generators listed. Hologram works with Markdown, Javascript, and most of the popular CSS Preprocessors. Hologram combs a specified directory for formatted documentation blocks in any compatible file types and allows you to configure your documentation as you see fit using categories and subcategories specified in [YAML][2] (similar to [Jekyll Front-matter]). This means you can document front end patterns that exist outside of your CSS (e.g. Javascript photo gallery or pop-up).

Because of it's simplicity, Hologram is easy to integrate in to your project or workflow. You can see how I've integrated Hologram in to my grunt workflow [on github].

## Conclusion

I ended up using Hologram because of my task at hand (documenting a design that was mostly complete) and my tendency as a developer to want the ability to customize, but all of the options have serious strengths. I suggest you take at least two for a spin before heading too far down one path as you may discover features that are missing or undesirable. Hopefully this comparison helps to point you in the right direction. Good luck!

[new idea]: http://24ways.org/2011/front-end-style-guides/
[1]: http://alistapart.com/article/creating-style-guides
[all of them]: http://vinspee.me/style-guide-guide/
[pattern lab]: http://patternlab.io/
[dave olson]: http://dmolsen.com/
[brad frost]: http://bradfrostweb.com/
[atomic design]: http://bradfrostweb.com/blog/post/atomic-web-design/
[behind]: https://twitter.com/brad_frost/status/457161455599910912
[typical gruntfile]: https://gist.github.com/bradfrost/10906886
[style prototype]: https://github.com/Team-Sass/generator-style-prototype
[mason wendell]: http://thecodingdesigner.com/
[sam richard]: http://snugug.com/
[team sass]: https://github.com/Team-Sass
[yeoman]: http://yeoman.io/
[style tiles]: http://styletil.es/
[versioning]: https://github.com/Team-Sass/generator-style-prototype#changing-version-number
[deployment]: https://github.com/Team-Sass/generator-style-prototype#exporting-final-site
[compass extension]: https://github.com/Team-Sass/generator-style-prototype#creating-a-compass-extension
[sass]: http://sass-lang.com/
[2.0 is on the way]: https://twitter.com/Snugug/status/457266943637348352
[kalei]: http://kaleistyleguide.com/
[kss]: http://warpspire.com/kss/
[styledocco]: http://jacobrask.github.io/styledocco/
[the style guide guide]: http://vinspee.me/style-guide-guide/
[hologram]: http://trulia.github.io/hologram/
[nicole sullivan]: http://www.stubbornella.org/
[trulia]: https://github.com/trulia
[on github]: https://github.com/natgeo/mortar/blob/master/gruntfile.coffee
[widest variety]: https://github.com/trulia/hologram#supported-preprocessorsfile-types
[2]: https://github.com/trulia/hologram#document-yaml-section
[jekyll front-matter]: http://jekyllrb.com/docs/frontmatter/
