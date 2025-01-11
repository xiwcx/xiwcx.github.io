---
title: Simple Element Queries With React Hooks
slug: simple-element-queries-with-react-hooks
date: 2019-11-04
---

During the interminable wait for [element queries](https://css-tricks.com/lets-not-forget-about-container-queries/) it is difficult to not run ahead and experiment with their immense potential. Though there are a few options for using them in your CSS today, the two primary options ([EQCSS](https://github.com/eqcss/eqcss) and [CSS Element Queries](https://github.com/marcj/css-element-queries)) have differing APIs with no clear winner. I try to avoid committing to fluctuating syntaxes in my projects, as I prefer solutions that are more explicit. I've written a few iterations of custom solutions in a few frameworks, but haven't been very happy with them so far. While working on a side project recently I found that [React Hooks](https://reactjs.org/docs/hooks-intro.html) provide a concise and satisfying solution.

## The Component

I'm going to presume a general familiarity with React Hooks for this article, but if you would like to familiarize yourself with them you would be hard pressed to do better than [Dan Abromov's introduction](https://dev.to/dan_abramov/making-sense-of-react-hooks-2eib). While you could write a custom hook relying on [`ResizeObserver`](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) directly or [`element-resize-detector`](https://www.npmjs.com/package/element-resize-detector) (if you need broader browser support), I'm relying on the [`useMeasure`](https://github.com/streamich/react-use/blob/master/docs/useMeasure.md) hook from `react-use`. If you haven't come across `react-use` it is a collection of battle-tested and crowd-sourced React Hooks that address common use cases.

This example also relies on the [`classnames`](https://github.com/JedWatson/classnames) package. You could absolutely write a version of this that uses CSS-in-JS, but I've got this crazy hangup about legible code, so my example is written with `classnames` and [`Sass`](https://sass-lang.com/).

Here is a contrived example of what a React functional component conditionally styled by width could look like:

```jsx
import classNames from "classnames";
import { useMeasure } from "react-use";

function MyComponent() {
  const [ref, { width }] = useMeasure();
  const containerClasses = classNames({
    container: true,
    "container--md": width >= 800,
  });

  return (
    <div className={containerClasses} ref={ref}>
      {/* All of your cool component stuff */}
    </div>
  );
}
```

## The styles

The accompanying styles can be written like so, working up from small to large. Again, the following code is contrived, but the sky is the limit in terms of potential.

```scss
.container {
  background-color: red;

  &--md {
    background-color: blue;
  }
}
```

I've found that element queries can be very powerful with CSS Grid and `grid-template-areas`, allowing you to drop a component in to any layout and have its contents arranged logically.

```scss
.container {
  &--md {
    display: grid;
    grid-template-areas:
      "A A"
      "B C";
    grid-template-columns: 1fr 1fr;
  }

  &--lg {
    grid-template-areas: "A B C";
    grid-template-columns: 1fr 2fr 1fr;
  }
}
```

## Keeping it DRY

To provide your app with some consistency you could write a utility function like so:

```js
const generateWidthClasses = (containerClassName, width, sizes) =>
  Object.keys(sizes).reduce((sizesObj, size) => {
    sizesObj[`${containerClassName}--${size}`] = width >= sizes[size];

    return sizesObj;
  }, {});
```

You could then use that utility function across many components:

```jsx
const containerSizes = {
  sm: 600,
  md: 800,
  lg: 1000,
};

function MyComponent() {
  const [ref, { width }] = useMeasure();
  const containerClasses = classNames({
    container: true,
    ...generateWidthClasses("container", width, containerSizes),
  });
  // ...
}
```

## All Together Now

If you'd like to explore this idea further, here's a working example:

<iframe
  src="https://codesandbox.io/embed/simple-element-queries-with-react-hooks-l61v6?fontsize=14"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="Simple Element Queries With React Hooks"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
>
  &nbsp;
</iframe>

The web development community has only scratched the surface of element queries' potential, I can only imagine what people will come up with once element queries are easier and more common. If anyone builds on this idea, I'd love to hear from you!
