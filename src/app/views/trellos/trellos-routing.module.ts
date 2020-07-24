import { NgModule } from '@angular/core';

import { Routes,RouterModule } from '@angular/router';
import { TrellosComponent } from './trellos.component';

const routes: Routes = [
	{
		path : '',
		component : TrellosComponent,
		data: {
			title: 'Trellos'
		}
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TrellosRoutingModule { }
