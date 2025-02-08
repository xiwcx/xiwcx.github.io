---
title: The Sheer Joy of Publishing Packages to JSR
date: 2025-02-03
slug: sheer-joy-of-jsr
---

After a decade of loving and fighting Javascript build systems, I've found myself using [Deno](https://deno.com/)—[Ryan Dahl](https://tinyclouds.org/)'s "next-generation Javascript runtime"—more and more when I just want to get after it and write some Typescript. Recently I wrote a utility that was easy to imagine using in multiple projects. I checked [JSR](https://jsr.io/), "the open-source package registry for modern JavaScript and TypeScript" first [introduced](https://deno.com/blog/jsr_open_beta) by the Deno team, and no similar utility existed. I wondered if publishing was as easy as they claimed. Let me tell you, [it was](https://jsr.io/@iwc/random-slug). You can use JSR to publish Typescript to just about any setting with almost no configuration for the maintainer.

## Publishing to NPM

Publishing cross-compatible Javascript to [NPM](https://npmjs.com/) is a headache. As Dr. Axel Rauschmayer recently [documented](https://2ality.com/2025/02/typescript-esm-packages.html), there is a lot to keep in mind as a package maintainer. A package maintainer must understand:

- how to simultaneously support Javascript and Typescript, publishing type declarations alongside your Javascript
- module resolution, publishing exports to support both [CommonJS](https://nodejs.org/api/modules.html) and [ESM Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- as an additional wrinkle, you need awareness of how your package will be distributed via NPM and <abbr title="Content Delivery Network">CDN</abbr>s (e.g. [esm.sh](https://esm.sh/), [unpkg](https://www.unpkg.com/))

JSR handles all of this, by employing Deno's typescript-first and ESM-first approaches for package publishing. Admittedly, it's approach to handling CommonJS is that [it simply doesn't](https://arc.net/l/quote/idopfpfc), if that is a hard requirement for your package then JSR is not the solution for you. It's approach to supporting Javascript and NPM is fantastic. You can write Typescript and JSR will handle the correct compilation for you with JSR's [NPM compatibility layer](https://jsr.io/docs/npm-compatibility). This makes it straightforward to include a JSR package in your Node project or the browser via a tool that will bundle your Javascript for the browser (e.g. [Vite](https://vite.dev/)). JSR is not a CDN and does [not support](https://jsr.io/docs/usage-policy#unacceptable-use) referencing packages from the browser in a production environment. No worries though, JSR is [supported by esm.sh](https://esm.sh/#docs).

## Documentation

Beyond the ease of publishing and consuming JSR packages, the experience is thoughtful all around.

The [JSR Score](https://jsr.io/docs/scoring) encourages you towards best practices, incuding sharing compatibility information. Referencing the [browser](https://caniuse.com/) and [server](https://runtime-compat.unjs.io/) APIs you used should give you a good idea of where your package can be used. For example, since my package only uses the [`Crypto.getRandomValues()`](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues) I can be confident that my package can be used across [Javscript runtimes](https://runtime-compat.unjs.io/#Crypto) and [modern browsers](https://caniuse.com/getrandomvalues).

A delightful surprise I did not anticipate, is that my [JSDoc]([https://jsdoc.app/) comments would be rendered directly on the JSR Registery as [helpful documentation](https://jsr.io/@iwc/random-slug@0.1.2#api). The Javascript community often [invests](https://nextjs.org/docs) in [lovely](https://docs.astro.build/en/getting-started/) [documentation](https://stately.ai/docs), but it can mean having to spend time orienting yourself in order to find simple answers. Other languages (e.g. [Python](https://dateutil.readthedocs.io/en/stable/), [GO](https://pkg.go.dev/github.com/Azure/go-autorest/autorest/date)) often have common documentation tools that increase familiarity across packages, making it quick to find a simple answer about how a particular API is intended to function. JSR provides a turn-key solution making documentation simple and consistent. Mercifully, the JSR team also has a reasonable opinion about [line length](https://webtypography.net/2.1.2).

---

Incredible [tools](https://babeljs.io/) have enabled us to write higher quality Javascript years ahead of certain APIs and standards being widely available. As those starndards have become dependable I'm eager to shed the weight of maintaining configuration for those tools. I'm really excited about a "[buildless](https://jvns.ca/blog/2023/02/16/writing-javascript-without-a-build-system/)" future that maintains the advancements that have been made. I understand it will be a while until codebases can abandon NPM, but I hope that more and more package publishers adopt a JSR-first approach.

[^2]: At present, JSR is not intended as a CDN, there is for using a JSR package directly in the browser in a production context. Researching the APIs leveraged by utility across [runtimes](https://runtime-compat.unjs.io/) and [browsers](https://caniuse.com/), should give you reasonable confidence about where your package can be used. For example, since my package uses the
