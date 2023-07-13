import { Aurelia, PLATFORM } from 'aurelia-framework';

export async function configure(au : Aurelia)
{
	au.use
		.standardConfiguration()
		.developmentLogging()
		.plugin(PLATFORM.moduleName('aurelia-dialog'));

	await au.start();
	await au.setRoot(PLATFORM.moduleName('my-app')); // Note the PLATFORM.moduleName
}