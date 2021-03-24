import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('inputs.helloWorld', () => {
		vscode.window.showInputBox({ title: 'rudi'});
	});
	
	context.subscriptions.push(disposable);
	disposable = vscode.commands.registerCommand('inputs.helloWorld2', () => {
		vscode.window.showQuickPick(['foo', 'bar', 'foobar'], { title: 'rudi'});
	});
	context.subscriptions.push(disposable);
}

export function deactivate() {}
