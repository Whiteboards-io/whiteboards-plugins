# Whiteboards.io - Sample plugins

This repository contains a demonstration implementation of APIs exposed in `@whiteboards/plugins` package.

## Samples

### Hello world template

A new template is registered. This template comes with custom configuration screen that contains a single button.
Once the button is clicked - board insertion is enabled.

### Jira integration

A template with custom configuration screen. On this screen a user can select Jira site, and specify JQL.
This configuration will be used to generate content of a board: list of issue carsd, and an import zone.
