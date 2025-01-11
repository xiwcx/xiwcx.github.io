---
title: Developing Locally with Typekit, Xip.io, and Browsersync
slug: developing-locally-with-typekit-and-xip
date: 2014-03-23
---

Recently I ran in to an interesting problem. When you initialize a new "kit" on [typekit][] you are prompted to enter a list of domains that your kit will be allowed to function properly on. Typically you would enter the address of your live site (e.g. `'http://example.com'`) as well as an address for local testing (e.g. `'192.168.1.10'` or `'localhost'`). Neither of these options for local development worked for me. Managing a list of <a href="http://en.wikipedia.org/wiki/Local_area_network"><abbr title="Local Area Network">LAN</abbr></a> addresses would be foolish (and probably impossible) on a large team where people are working from different locations. Simply stating `localhost` would prevent fonts from being previewed on other devices with a tool like [BrowserSync][], [Ghostlab][], or [Adobe Edge Inspect][] which all rely on your computer's LAN address.

![Typekit kit creation prompt](https://xiwcx-media.s3.amazonaws.com/media/typekit-create.png)

In my moment of need I turned to twitter and thankfully [Chip Cullen][] answered my call:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">@xiwcx have you checked out <a href="http://t.co/COgpA7CL5V">http://t.co/COgpA7CL5V</a>? Just include *.xip.io in your kit setup.</p>&mdash; Chip Cullen (@chipcullen) <a href="https://twitter.com/chipcullen/status/440623861043052544?ref_src=twsrc%5Etfw">March 3, 2014</a></blockquote>

Some of the developers at [37signals][] developed a custom DNS tool named [xip.io][] to deal with similar problems. You can use xip to "trick" your browser in to thinking an address like `www.10.5.3.15.xip.io` or `10.5.3.15.xip.io` is `10.5.3.15`. All you have to do after this is add `*.xip.io` to your typekit "kit" settings and you're good to go.

![Typekit kit creation prompt](https://xiwcx-media.s3.amazonaws.com/media/typekit-settings.png)

## Bonus

After solving this, I discovered I was running in to another problem: the `.xip.io` suffix was interfering with live reloading in Browsersync (my preferred device syncing tool: fully featured, open source, \*nix agnostic). [Shane Osborne][], the maintainer of Browsersync [responded to my feature request very promptly][gh-issue] and there is now an option to append whatever suffix you like to your IP address. Here is an example of adding the option to your [gruntfile][]:

```js
{
  browserSync: {
    serve: {
      options: {
        hostnameSuffix: ".xip.io";
      }
    }
  }
}
```

[typekit]: http://typekit.com
[browsersync]: http://browsersync.io/
[ghostlab]: http://vanamco.com/ghostlab
[adobe edge inspect]: http://html.adobe.com/edge/inspect
[chip cullen]: http://chipcullen.com
[37signals]: https://37signals.com
[xip.io]: http://xip.io
[shane osborne]: http://shakyshane.com
[gh-issue]: https://github.com/shakyShane/grunt-browser-sync/issues/41#issuecomment-37136050
[gruntfile]: http://gruntjs.com/sample-gruntfile
