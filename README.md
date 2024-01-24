# Azure OpenAI SSO Extension for Visual Studio Code

This extension provides a seamless Single Sign-On (SSO) experience for accessing Azure OpenAI services from Visual Studio Code, using the Azure Identity library.

## Features

- **Azure Active Directory Authentication**: Easily authenticate with Azure services using the extension's SSO feature.
- **Token Generation for OpenAI API**: Fetch and inject the OpenAI API key into your workspace for a simplified development experience.

## Requirements

- Visual Studio Code
- An Azure account with an active subscription
- installed "azure-openai-sso" extension

## Extension Activation

The extension is activated the first time you execute the command it provides. Upon activation, it logs a confirmation message indicating that it is now active.

## Commands

- `azure-openai-sso.login`: This command initializes the SSO process to fetch an OpenAI API key and creates a new `.env` file in your workspace with this token.

## Getting Started

1. Install the extension through the Visual Studio Code Marketplace.
2. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS) to open the Command Palette.
3. Type `Azure OpenAI SSO: Login` and press Enter to run the command.
4. Follow the prompted sign-in process to authenticate with Azure.
5. Once authenticated, the OpenAI API key will be retrieved and stored in a `.env` file within your workspace.

## Extension API Usage

Upon activation, the extension uses `DefaultAzureCredential` from `@azure/identity` to perform authentication and retrieve a token scoped appropriately for your needs.

## Development

To develop and test this extension:

1. Clone the repository to your local machine.
2. Run `npm install` to install dependencies.
3. Press `F5` to open a new window with the extension loaded.
4. Run the `azure-openai-sso.login` command from the Command Palette to test the functionality.

## Feedback

If you encounter any issues or have suggestions for improvements, please submit them to the repository's Issues section.

## License

This project is licensed under MIT license

Enjoy using the Azure OpenAI SSO extension for Visual Studio Code!
