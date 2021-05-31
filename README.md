# Whiteboards.io Plugins SDK

[![Build and test status](https://github.com/Whiteboards-io/whiteboards-plugins/workflows/Lint%20and%20test/badge.svg)](https://github.com/Whiteboards-io/whiteboards-plugins/actions?query=workflow%3A%22Build+and+test%22)

This is a SDK that can be used for creating plugins for [Whiteboards.io](https://whiteboards.io) app. You can add new features, automations, and customisations to your Whiteboards.

## Whiteboards.io plugins

### Technical requirements

Plugin is a HTML file with accompanying assets like javascript files, CSS stylesheets, or images. It will be loaded in an iframe on whiteboards.io for users, and organisations, which decide to enable it.
It can communicate with Whiteboards.io through this SDK, which under the hood is using `window.postMessage` mechanism.
Production version of plugins are loaded in a sandboxed iframe, with Content Security Policy configured to block all external network requests.

### Development

Prerequisites:
- Whiteboards.io organisation account: https://app.whiteboards/signup

In order to develop a plugin you need to setup a project with http server.
For example using [Create React App](https://create-react-app.dev/docs/getting-started) and using http://localhost:3000 url in development console at Whiteboards.io

Once you have your development environment set up, and a hello world running, go to https://app.whiteboards/$YOUR_ORGANISATION/developers and follow the instructions.

### Production deployment

You can make your Whiteboards.io plugin available for other users. In order to do that your plugin must be packaged in a ZIP file.

_Details on production deployment coming soon!_

## Usage

Start from installing the library in your plugin project:

```
npm install --save-dev @whiteboards-io/plugins
```

### Example: Custom static template

```typescript
import { registerTemplate } from "@whiteboards-io/plugins";
import helloImage from "./hello-image.png";

registerTemplate({
  id: "hello-world",
  fixed: true,
  title: "Hello World Template",
  description: "This is a hello world template",
  illustration: window.location.origin + helloImage,
  content: {
    cards: {
      _index: {
        "card1": true
      },
      _items: {
        "card1": {
            x: 0,
            y: 0,
            width: 100,
            height: 100,
            text: "Hello world!"
        }
      }
    }
  },
});
```

## More examples

Check out the [samples directory](sample-plugins/README.md)

## Feedback

Reach out with feedback and ideas:

* [Create a new issue](https://github.com/Whiteboards-io/whiteboards-plugins/issues)

