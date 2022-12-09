# Partytown Amplitude React 🎉

This repo is a demo of integrating [Amplitude](https://amplitude.com/) within a [React](https://reactjs.org/) app using [web workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) facilitated with [Partytown](https://partytown.builder.io/) 🎉

This allows loading Amplitude in a web worker and removing it from the main JS thread, which in turn allows faster initial page load times. Partytown provides fallbacks for browsers that do not support web workers.

This demo uses [Vite](https://vitejs.dev/) and the [Partytown Vite Plugin](https://partytown.builder.io/copy-library-files#vite) to simplify the file copying, but this setup can be accomplished with any bundler.
