import { NgModule } from '@angular/core';

import { TransroutePipe } from './routing/transroute.pipe';


@NgModule({
    declarations: [
        TransroutePipe
    ],
    exports: [TransroutePipe]
})
export class PipeModule { }
