import Aurelia from 'aurelia';
import { DialogDefaultConfiguration } from '@aurelia/dialog';
import { MyApp } from './my-app';

Aurelia
	.register(DialogDefaultConfiguration)
	.app(MyApp)
	.start();