import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  moduleId: module.id,
  selector: 'mexs-easter-egg',
  template: `
        <GridLayout>
        <ActionBar class="action-bar">
        <NavigationButton text="Back" (tap)="back()" android.systemIcon="ic_ab_back_material_dark"></NavigationButton>
            <StackLayout orientation="horizontal" ios:horizontalAlignment="center" android:horizontalAlignment="left">
                <Label text="Amor Eterno" class="action-title"></Label>
            </StackLayout>
        </ActionBar>
            <FlexboxLayout class="page-container" flexDirection="column" justifyContent="center">
                <Image src="~/assets/easteregg.png" width="70%" class="img-easter" borderRadius="10"></Image>

                <Label text="Minha inspiração e motivação para sempre...." class="text-center h2 raleway-bold text-white" textWrap="true"></Label>
                
            </FlexboxLayout>
        </GridLayout>
    `,
  styleUrls: ['./easter-egg.component.css']
})
export class EasterEggComponent implements OnInit {
  constructor(private routerExtensions:RouterExtensions) {}

  ngOnInit() {}

  back():void{
      this.routerExtensions.back();
  }
}
