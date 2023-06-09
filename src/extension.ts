// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "ctxkey-extension" is now active!');

	context.subscriptions.push(
		vscode.commands.registerCommand('ctxkey-extension.helloWorld1', () => {
			// The code you place here will be executed every time your command is executed
			// Display a message box to the user
			vscode.window.showInformationMessage('Hello World from ctxkey-extension!');
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('ctxkey-extension.helloWorld2', () => {
			// The code you place here will be executed every time your command is executed
			// Display a message box to the user
			vscode.window.showInformationMessage('Hello World from ctxkey-extension!');
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('ctxkey-extension.helloWorld3', () => {
			// The code you place here will be executed every time your command is executed
			// Display a message box to the user
			vscode.window.showInformationMessage('Hello World from ctxkey-extension!');
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('ctxkey-extension.helloWorld4', () => {
			// The code you place here will be executed every time your command is executed
			// Display a message box to the user
			vscode.window.showInformationMessage('Hello World from ctxkey-extension!');
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('ctxkey-extension.helloWorld5', () => {
			// The code you place here will be executed every time your command is executed
			// Display a message box to the user
			vscode.window.showInformationMessage('Hello World from ctxkey-extension!');
		})
	);
}

// This method is called when your extension is deactivated
export function deactivate() { }
