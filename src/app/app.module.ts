import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DirectiveNgifComponent } from './directive-ngif/directive-ngif.component';
import { DirectiveNgswitchComponent } from './directive-ngswitch/directive-ngswitch.component';
import { DirectiveNgforComponent } from './directive-ngfor/directive-ngfor.component';
import { DirectiveNgclassComponent } from './directive-ngclass/directive-ngclass.component';
import { DirectiveNgstyleComponent } from './directive-ngstyle/directive-ngstyle.component';
import { OperatorElvisComponent } from './operator-elvis/operator-elvis.component';
import { DirectiveNgcontentComponent } from './directive-ngcontent/directive-ngcontent.component';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { HighlightDirective } from './shared/highlight.directive';
import { HighlightOnHoverDirective } from './shared/highlight-on-hover.directive';
import { FullHighlightDirective } from './shared/full-highlight.directive';
import { NgElseDirective } from './shared/ng-else.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveNgifComponent,
    DirectiveNgswitchComponent,
    DirectiveNgforComponent,
    DirectiveNgclassComponent,
    DirectiveNgstyleComponent,
    OperatorElvisComponent,
    DirectiveNgcontentComponent,
    CustomDirectivesComponent,
    HighlightDirective,
    HighlightOnHoverDirective,
    FullHighlightDirective,
    NgElseDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
