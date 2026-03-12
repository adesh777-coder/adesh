# adesh

## Connecting Claude to VS Code

This project is configured to use **Claude Opus** as the AI model in VS Code via GitHub Copilot.

### Prerequisites

1. [Visual Studio Code](https://code.visualstudio.com/) installed
2. A [GitHub Copilot](https://github.com/features/copilot) subscription (Individual, Business, or Enterprise)

### Setup Steps

1. **Install the recommended extensions**
   Open this project in VS Code. You will be prompted to install the recommended extensions:
   - [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
   - [GitHub Copilot Chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat)

   Alternatively, press `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS), type **Extensions: Show Recommended Extensions**, and install them.

2. **Sign in to GitHub**
   After installing the extensions, sign in with your GitHub account that has an active Copilot subscription.

3. **Select the Claude model**
   The workspace settings (`.vscode/settings.json`) are pre-configured to use `claude-opus-4` as the language model. To change the model or verify the selection:
   - Open Copilot Chat (`Ctrl+Shift+I` or `Cmd+Shift+I`)
   - Click the model selector at the top of the chat panel
   - Select **Claude Opus** from the available models

4. **Start using Claude in VS Code**
   - **Inline suggestions**: Claude will provide code completions as you type
   - **Chat**: Open Copilot Chat to ask questions, generate code, or get explanations
   - **Agent mode**: Use `@workspace` in chat to ask questions about your codebase

### Configuration

The workspace settings in `.vscode/settings.json` include:

| Setting | Value | Description |
|---------|-------|-------------|
| `github.copilot.chat.languageModel` | `claude-opus-4` | Sets Claude Opus as the default AI model |
| `github.copilot.enable` | `{ "*": true }` | Enables Copilot for all file types |
| `chat.agent.enabled` | `true` | Enables the Copilot agent mode |