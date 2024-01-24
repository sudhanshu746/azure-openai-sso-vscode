import * as vscode from 'vscode';
import { useIdentityPlugin, DefaultAzureCredential } from "@azure/identity";

import { vsCodePlugin } from "@azure/identity-vscode";
useIdentityPlugin(vsCodePlugin);

export async function activate(context: vscode.ExtensionContext) {
	const credential = new DefaultAzureCredential();
	const scope = process.env.AAD_TEST_SCOPE ?? "https://cognitiveservices.azure.com/.default";
	console.log('Congratulations, your extension "azure-openai-sso" is now active!');

	context.subscriptions.push(
		vscode.commands.registerCommand('azure-openai-sso.helloWorld', () => {
			vscode.window.showInformationMessage('Hello World!!');
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('azure-openai-sso.login', async () => {
			const token = `export OPENAI_API_KEY='${(await (credential.getToken(scope))).token}'`;
			const setting: vscode.Uri = vscode.Uri.parse("untitled:" + ".env");
			vscode.workspace.openTextDocument(setting).then((a: vscode.TextDocument) => {
				vscode.window.showTextDocument(a, 1, false).then(e => {
					e.edit(edit => {
						edit.insert(new vscode.Position(0, 0), token);
					});
					vscode.window.showInformationMessage('Azure OpenAI SSO Token initialized successfully!!');
				});
			}, (error: any) => {
				console.error(error);
				debugger;
			});
		})
	);
}

// This method is called when your extension is deactivated
export function deactivate() {}