# Whiteboards.io - Sample plugins

This repository contains a demonstration implementation of APIs exposed in `@whiteboards/plugins` package.

## Samples

Before running examples, execute this in the project root directory:

```
npm install
npm run build
```

Running examples:

```
npm install
npm run start
open http://localhost:3000
```

Later in the development console at whiteboards.io you can use following URLs to install the development version of a plugin:

- http://localhost:3000/?plugin=hello-world
- http://localhost:3000/?plugin=jira-integration
- http://localhost:3000/?plugin=board-inspect

### Hello world template

A new template is registered. This template comes with custom configuration screen that contains a single button.
Once the button is clicked - board insertion is enabled.

### Jira integration

A template with custom configuration screen. On this screen a user can select Jira site, and specify JQL.
This configuration will be used to generate content of a board: list of issue carsd, and an import zone.

### Board inspect

Board inspect is a tool added to whiteboard, which allows you to show and modify raw properties of the content: lines and cards.

### Random person

Randomly select a person from board participants.

### Whiteboards Notepad

This plugin exists in another repository: https://github.com/gtanczyk/whiteboards-notepad

### Giphy integration

External repository: https://gtanczyk.github.io/giphy-whiteboards/
