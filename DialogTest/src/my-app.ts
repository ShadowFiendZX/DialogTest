import { autoinject } from 'aurelia-framework';
import { DialogCloseResult, DialogService } from 'aurelia-dialog';
import { Prompt } from './prompt'

@autoinject
export class MyApp
{
	public message = 'Hello World!';
	public inputBox : string;

	constructor(private dialogService : DialogService)
	{
	}

	buttonPress() : void
	{
		this.message = 'Success';

		this.dialogService.open({ 'viewModel' : Prompt, model : 'Please work', lock : false }).whenClosed((response : DialogCloseResult) =>
		{
			console.log(response.wasCancelled);
			console.log(response.output);
		});
	}
}