import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RootStoreModule } from '../store/store.module';

@NgModule({
	imports: [CommonModule, HttpClientModule, RootStoreModule],
})
export class CoreModule {
	constructor(@Optional() @SkipSelf() coreModule: CoreModule) {
		if (coreModule) {
			throw new Error('CoreModule loaded twice!');
		}
	}
}
