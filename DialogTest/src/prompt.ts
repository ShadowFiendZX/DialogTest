import { inject } from 'aurelia';
import { IDialogController } from '@aurelia/dialog';

@inject(IDialogController)
export class Prompt
{
	message : any[];

	constructor(private dialogController : IDialogController)
	{
		this.message = null;

		dialogController.settings.lock = false;
	}
	activate(message) : void
	{
		this.message = message;
	}
}