import { autoinject } from 'aurelia-framework';
import { DialogController } from 'aurelia-dialog';

@autoinject
export class Prompt
{

	message : any[];

	constructor(private dialogController : DialogController)
	{
		this.message = null;

		dialogController.settings.lock = false;
		dialogController.settings.centerHorizontalOnly = true;
	}
	activate(message) : void
	{
		this.message = message;
	}
}