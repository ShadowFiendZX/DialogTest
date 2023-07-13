import { inject } from 'aurelia';
import { IDialogService, DialogCloseResult } from '@aurelia/dialog';
import { Prompt } from './prompt'

@inject(IDialogService)
export class MyApp
{
	public message = 'Hello World!';
	public inputBox : string;

	constructor(private dialogService : IDialogService)
	{
	}

	buttonPress() : void
	{
		this.message = 'Success';

		this.dialogService.open({ component : () => Prompt, model : 'Please work', lock : false }).whenClosed((response : DialogCloseResult) =>
		{
		});
	}
}