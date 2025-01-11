---
title: Announcing Package Lock Inspector
slug: announcing-package-lock-inspector
date: 2019-11-10
hero_cloudinary_id: package-lock_ztgsul
---

I have been having a hard time at work getting to the bottom of a dependency issue. As a result, I have spent far more time than I would like to manually parsing `package-lock.json`. Eventually, I thought "someone has to have made a tool for this" and it turns [someone did](https://compulim.github.io/lock-walker)! [William Wong](https://github.com/compulim)'s [lock-walker](https://github.com/compulim/lock-walker) was very helpful while trying to debug my problem. However, there were some improvements I thought I could make:

1. Ability to navigate using the browser's history
2. Ability to have more than one tab or window open
3. A faster filter

I'm not going to go very deep in to how I wrote the application, as I learned a lot of disparate things on this project, but I do want to touch on some of the tools that helped me solve the problem.

Goals 1 and 2 were easily accomplished using hooks. With [`useHistory`](https://reacttraining.com/react-router/web/api/Hooks/usehistory) and [`uselocation`](https://reacttraining.com/react-router/web/api/Hooks/uselocation) from [React Router](https://reacttraining.com/react-router/web/) I was able to set the URL when searching and get the URL whenever it changed to trigger the filter. With [`useLocalStorage`](https://github.com/streamich/react-use/blob/master/docs/useLocalStorage.md) from [react-use](https://streamich.github.io/react-use) I was able to persist the uploaded packages.

This was my first project using [React Hooks](https://reactjs.org/docs/hooks-intro.html) and they are satisfying to say the least. I got a lot of mileage out of [`useDebounce`](https://github.com/streamich/react-use/blob/master/docs/useDebounce.md) and I also used [`useMeasure`](https://github.com/streamich/react-use/blob/master/docs/useMeasure.md) to power the application's [element queries](https://xiw.cx/2NeNNqY).

The third goal, making the filter faster, was the most challenging part of the project. I had to figure out how to filter the package dependency tree down to matches _and_ their parents, excluding irrelevant children and siblings. Thankfully, I found [Deepdash](https://deepdash.io)—a tree traversal extension for [lodash](https://lodash.com/docs)—which took care of a lot of the heavy lifting. Deepdash's `reduceDeep` with `leavesOnly` set to true allowed me to visit every childless node, trim the path if necessary, and collect it in the final filtered tree. [Ramda](https://ramdajs.com/)'s [`set`](https://ramdajs.com/docs/#set) and [`lensPath`](https://ramdajs.com/docs/#lensPath) came in handy setting new values on the reducer's accumulator in a performant and immutable fashion.

[Package Lock Inspector](https://welchcanavan.gitlab.io/package-lock-inspecto/) is live now and you can also view it's [source](https://gitlab.com/welchcanavan/package-lock-inspector).
