---
date: 2019-11-04
title: How to add Bit.ly Links to a Model With Django
description: The why and how of automatic short link creation.
heroAlt: the bitly logo, a plus sign, and the django logo in a row
---

First, I'd like to talk about _why_ I wanted to include Bitly links.

1.  Despite the continued prevalence of social media buttons, there's a decent wealth of data demonstrating [they](https://www.wearetheweather.co.uk/blog/social-buttons-poor-ux) [don't](https://bigmedium.com/ideas/no-mobile-share-buttons.html) [work](https://www.antonsten.com/what-is-cost-of-sharing/).
2.  I have no interest in providing free advertising for large, ethically bankrupt corporations whose [policies I](https://www.nytimes.com/2018/11/12/technology/facebook-data-privacy-users.html) [do not approve of](https://www.theverge.com/interface/2019/5/30/18645004/twitter-white-supremacy-research-nazi-ban-gadde-dorsey).
3.  It's kind of fun! For no charge (aside from the domain) one can get personalized shortened permalinks.

When I made the first version of this website with [Jekyll](https://jekyllrb.com/) there was a simple plugin that caught my eye that made it dead simple to add short URLs from the Bitly API. When I thought I was going to move my website over to [Metalsmith](https://metalsmith.io/) I even wrote an [integration plugin](https://www.npmjs.com/package/metalsmith-bitly) as one didn't exist yet.

Ultimately, I landed on building an API with Django, but the plugins I found didn't accomplish what I was hoping for. [Django-bitly](https://pypi.org/project/django-bitly/) didn't fit my needs as I was only using Django to serve an JSON, not HTML. Most related snippets and examples I found were for outdated versions of the Bitly API, outdated versions of Django, or both.

In order to use the solution I came up with you'll need:

- You [Bitly Token](https://dev.bitly.com/v4/#section/Authentication) and [Bitly Group GUID](https://dev.bitly.com/v4_documentation.html)
- A working understanding of environment variables, [`django-environs`](https://django-environ.readthedocs.io/en/latest/) and [`os.environ`](https://docs.python.org/3.7/library/os.html#os.environ). Please [don't commit sensitive information](https://pomeroy.me/2017/10/stop-committing-credentials-to-github/) to your repo.
- Extra credit: learn about the [benefits of environment variables](https://12factor.net/config) beyond security.

Include something like the following in your relevant model file.

```python
from django.db import models
from dirtyfields import DirtyFieldsMixin
import requests
import os

class Post(DirtyFieldsMixin, models.Model):
    # you don't need to have your slug as your primary_key
    # but you do need a reference to whatever your path is
    # in addition to your root domain
    slug = models.SlugField(primary_key=True)
    shortlink = models.CharField(max_length=20, null=True, blank=True, default='')

    def set_shortlink(self):
        url = "https://api-ssl.bitly.com/v4/shorten"
        headers = {
            "Host": "api-ssl.bitly.com",
            "Accept": "application/json",
            "Authorization": f"Bearer {os.environ.get('BITLY_TOKEN')}"
        }
        payload = {
            "group_guid": os.environ.get('BITLY_GROUP_GUID'),
            "long_url": f"https://welchcanavan.com/{self.slug}"
        }
        # constructing this request took a good amount of guess
        # and check. thanks Postman!
        r = requests.post(url, headers=headers, json=payload)

        if r.status_code is 200:
            self.shortlink = r.json()[u'id']

    def save(self, *args, **kwargs):
        # if the short link doesn't have a value *or* the
        # slug that the short link is based off of has changed
        if not self.shortlink or 'slug' in self.get_dirty_fields():
            self.set_shortlink()

            super().save(*args, **kwargs)

```

This example has been shortened for brevity, the full context can be found at [this site's repository](https://gitlab.com/welchcanavan/www-api/blob/975f91b98bb29e3311048944d7ebccc1b8debd9a/content/models.py#L152).

**Extra credit**: learn about [the benefits of environment variables](https://12factor.net/config) aside from security.
