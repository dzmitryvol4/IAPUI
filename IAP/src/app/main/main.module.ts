import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { MainComponent } from "./main.component";
import { CardModule } from "primeng/card";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { ConfirmationService } from "primeng/api";

@NgModule({
    declarations: [MainComponent],
    exports: [MainComponent],
    providers:[ConfirmationService],
      imports: [
        CardModule,
        BrowserModule,
        RouterModule.forChild([
              {
                  path: '',
                  component: MainComponent,
              },
          ]),
      ],
    schemas: [NO_ERRORS_SCHEMA],
  })
  export class MainModule {}