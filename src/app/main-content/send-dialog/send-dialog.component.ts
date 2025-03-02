import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-send-dialog',
  standalone:true,
   imports: [CommonModule, TranslatePipe],
  templateUrl: './send-dialog.component.html',
  styleUrl: './send-dialog.component.scss'
})
export class SendDialogComponent {
   constructor(public dialogRef: MatDialogRef<SendDialogComponent>) {}
  
    closeDialog(): void {
      this.dialogRef.close();
    }

}
