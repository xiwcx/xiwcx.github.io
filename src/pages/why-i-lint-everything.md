---
date: 2019-11-17
title: Why I Lint Everything
description: Code linting has advantages beyond the obvious
heroAlt: a heart shaped wad of lint
---

I lint everything. No, really. If I'm working on a project—personal or professional—that I believe will outlast the day, installing linters is one of the very first steps I take. If you're unfamiliar with [linters](<https://en.wikipedia.org/wiki/Lint_(software)>), they're a tool that help web developers (or any programmers) avoid bugs, errors, and anti-patterns while enforcing consistent style.

Linters have helped me become a better developer and they have helped me stay a better developer. They can help you do the same. Aside from their stated intentions they can also help you learn best practices as well as how to function on a team.

## Linting to challenge yourself

First off, I pick an aggressive linter. If I am writing Javscript I tend towards [Airbnb](https://www.npmjs.com/package/eslint-config-airbnb)'s configuration, if I am writing CSS I use stylelint's [standard](https://github.com/stylelint/stylelint-config-standard) configuration over their [recommended](https://github.com/stylelint/stylelint-config-recommended) configuration. For writing JSX I throw an [a11y accessibility configuration](https://github.com/evcohen/eslint-plugin-jsx-a11y) on top of the heap as well.

Second, I install the linter almost immediately, usually before my first commit. This is typically an infuriating experience. If it is my first time using a language or framework _and_ a new linter I find I can scarcely write a line of code without making the linter angry and provoking lots of glaring red warnings in my text editor. For every linter message I do not understand, I visit the accompanying documentation page and read it top to bottom until I understand. If that fails, I start searching for other people who encountered the same message under similar conditions.

While this makes for a slow start, I am much more productive once I am over the initial learning curve. For example, I do not waste nearly as much time as I used to banging my head against the idiosyncrasies of a new framework's API.

## Linting to become a better collaborator

You will never be on a team that is completely aligned on best practices. Part of being a great team member is setting your ego aside and recognizing that it is much more important to agree on _a_ standard than _your_ standard.

If you are already employed it makes the most sense to grab an off the shelf solution and avoid wasting time [bikeshedding](https://en.wiktionary.org/wiki/bikeshedding). Bespoke linting configurations tend to lead to a hodgepodge of individuals' preferences that cannot be easily unraveled as team members inevitably join and leave.

If you have not had the opportunity to work on a team yet linters are a great way to learn how to compromise ahead of joining a team. I do not always agree with 100% of the configuration in a linter, but reading the documentation helps me to get a sense of how _other_ people think about code, and I am often compelled to change my mind.

## How to get started linting

There are a lot of ways to lint code. The linter can be run during your [CI](https://en.m.wikipedia.org/wiki/Continuous_integration) step using a tool like [Circle](https://circleci.com/), [Jenkins](https://jenkins.io/), or [Gitlab](https://docs.gitlab.com/ee/ci/). The linter can be run via a [Git pre-commit](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) hook (there are integrations for most popular languages like [Node](https://github.com/observing/pre-commit) or [Python](https://pre-commit.com/)). My preferred method is to lint live in my text editor or IDE. An internet search should find a plugin for your preferred text editor and a popular linter (e.g. [ESLint for VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)). Linting in your editor will provide you with real time feedback on your code, and a good code editor will provide you with a link directly to the documentation for that rule. Additionally, there are [lots](https://eslint.org/docs/user-guide/getting-started) [of](https://css-tricks.com/stylelint/) [guides](https://dev.to/jameesy/the-absolute-beginners-guide-to-linting-45a1) to get you started.

![screenshot of linter display in a code editor](https://d28efhqsv6dyl0.cloudfront.net/media/uploads/ad901924db/Screen_Shot_2019-11-17_at_5.36.44_PM.png)

## Conclusion

It's probably clear that this approach will not work for everyone; I’m sure this level of overhead would be too much for many people and get in the way of a creative spark. All the same, I encourage you to give it a shot and see if this process works for you. I’ve gained a lot of knowledge and patience through this practice and I’m certain others could too.
