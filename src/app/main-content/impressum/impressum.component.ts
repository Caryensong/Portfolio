import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-impressum',
  standalone:true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent {
  constructor(public dialogRef: MatDialogRef<ImpressumComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
