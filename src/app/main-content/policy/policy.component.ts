import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-policy',
  standalone:true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './policy.component.html',
  styleUrl: './policy.component.scss'
})
export class PolicyComponent {
  

    constructor(public dialogRef: MatDialogRef<PolicyComponent>) {}
    ngOnInit() {
    const section = document.querySelector('section');
    if (section) {
      section.scrollTop = 0;
    }}
  
    closeDialog(): void {
      this.dialogRef.close();
    }
  

}
