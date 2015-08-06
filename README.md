Blaze In React
==============

**This package depends on the MDG's `react-runtime` package. If you are using another React integration, let me know and I will create a version of the package that depends on that integration instead.**

```jsx
<BlazeInReact template='loginButtons' data={{align: 'right'}} />
```

The code for this package was adapted from [a post on the Meteor Forums][source] by cristo.

This package is is written in TypeScript. If you use TypeScript in your app,
I would recommend grabbing the original TypeScript file and putting it
somewhere in your app where it won't run, and referencing it. (Unfortunately,
I seem to have written this package in a way which is impossible to create
a definition file for.)

[source]: https://forums.meteor.com/t/preview-of-official-react-support/6150/34?u=gaelan