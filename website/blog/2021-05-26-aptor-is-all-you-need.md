---
slug: aptor-is-all-you-need
title: Aptor Is All You Need
author: Amir.H Ebrahimi
author_title: Weblite frontend developer
author_url: https://github.com/amirHossein-Ebrahimi
author_image_url: https://avatars.githubusercontent.com/u/23579958?v=4
tags: [react-aptor, react, api]
---

**Get rid off** all old-style class-based integration for every react-something packages within minutes.

<!--truncate-->

## TLDR

The dominant `react-something` packages are based on old-style class-based integration that includes a third-party and a react wrapper that defines new things for each existing API in that third party. The best available method is to bind a `ref` filling the integration gap through the react ref system.

We propose a new simple package, the `react-aptor`, based solely on integration mechanisms, removing the middle effect of react packages entirely.

## Story

Let’s say there comes a trending video package called `doom.js`, featured just recently on npm. The doom package has been developed in typescript compatible with all frameworks and libraries. Now the community tries to help the author and make integrated packages on their own 🙌️.

Let’s make it simple, doom can only play/pause a video for now. It might not be cool enough to win the "Breakthrough of the year”, but it is definitely one of the best 😄.

Then we are going to make a react package out of it, called `react-doom`. It is going to be something like this:

```jsx
<ReactDoom src={'video-url'} isPlaying={false} ref={playerRef} />
```

Then users can play/pause the video with their UI using `playerRef.current`

Everything is fine, let’s add a new highly voted feature to `doom.js` to change the speed of the video.

<!-- prettier-ignore-start -->
Author starts coding  
Boom 💥  
The author finishes the feature  
It is now running tests  
All test passed 🕺  
Doom.js is going to be published  
OMG it is also compatible  
The new minor version is coming …  
Done 🆗  

So let’s update our `react-doom` package and use the new 2x feature on our videos.  
`Published 25 days ago`, Okay let’s check their issue, it must be under `doing` board  
last interaction for the author is `2 months ago`  
So what, making another **Old guy pc Meme!**

<!-- prettier-ignore-end -->

## Aptor

Why should react wrapper block the development phase of a package?

Connect your doom.js to [react-aptor](https://www.npmjs.com/package/react-aptor) then you have all the functionality.
Use a tiny wrapper around the connected component. Do every of the following you want

- Trigger prop changes using `useEffect`
- Change namings
- Hoist full access reference to raw `doom.js` API using `forwardRef`

Let’s call this new react package `raptor-doom`.
raptor-doom is a simple, tiny piece that helps developers to use it independent of the react package itself.

So in the case of the 2x feature, the only thing which is needed is to update the `doom.js` package and use the rate feature out of the box.

```jsx
<RaptorDoom isPlaying={isPlaying} ref={ref} />
<button onClick={() => {ref.current._doom.setRate(2)}}>
 speed up
</button>
```

The `react-aptor` helps you to make this process as easy as one react hook call.

```jsx title=connector.jsx
const Connector = (props, ref) => {
  const aptorRef = useAptor(ref, {
    // a function which returns a slice of doom.js apis
    getAPI,
    // a function which instantiate doom.js player
    instantiate,
    // anything to be used in both getAPI, instantiate
    params: props,
  })

  // accessing node using returned ref
  return <div ref={aptorRef} />
}
```

:::note Get connected
You can find lots of useful examples and integration in react-aptor [samples section](https://github.com/amirHossein-Ebrahimi/react-aptor/blob/master/doc/samples.md)
:::

Also there is a brand new re-write of react-howler using react-aptor making new tiny (`1.04kB`) package called [raptor-howler](https://www.npmjs.com/package/raptor-howler)

## Conclusion

react-aptor helps you to make functional, small, **Forward Compatible** packages within react.
