import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ImpressumComponent } from '../impressum/impressum.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PolicyComponent } from '../policy/policy.component';
import { SendDialogComponent } from '../send-dialog/send-dialog.component';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [CommonModule, FooterComponent, FormsModule, TranslatePipe, MatDialogModule],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss'
})
export class ContactformComponent {
  policyText: SafeHtml = '';
  isHovered: boolean = false;
  showAnimation: boolean = false;
  isChecked: boolean = false;

  constructor(private sanitizer: DomSanitizer, private translate: TranslateService, public dialog: MatDialog) {
    this.updatePolicyText();
    this.translate.onLangChange.subscribe(() => {
      this.updatePolicyText();
    });
  }

  updatePolicyText() {
    this.translate.get('contactFrom.policy').subscribe((translatedText: string) => {
      this.policyText = this.sanitizer.bypassSecurityTrustHtml(translatedText);
    });
  }

  showImage() {
    if (!this.showAnimation) {
      this.isHovered = true;
      this.showAnimation = true;

      setTimeout(() => {
        this.isHovered = false;
        this.showAnimation = false;
      }, 4000);
    }
  }

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
  };

  mailTest = false;
  nameError: boolean = false;
  emailError: boolean = false;
  messageError: boolean = false;

  isFormValid(): boolean {
    return (
      (this.contactData.name?.trim() !== '' || this.contactData.name === '') &&
      (this.contactData.email?.trim() !== '' || this.contactData.email === '') &&
      (this.contactData.message?.trim() !== '' || this.contactData.message === '') &&
      this.isChecked
    );
  }

  checkPlaceholder(field: string): void {
    switch (field) {
      case 'name':
        this.nameError = !this.contactData.name || this.contactData.name?.trim() === '';
        break;
      case 'email':
        this.emailError = !this.contactData.email || this.contactData.email?.trim() === '';
        break;
      case 'message':
        this.messageError = !this.contactData.message || this.contactData.message?.trim() === '';
        break;
    }
  }

  post = {
    endPoint: 'https://caryen-song.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
            this.isChecked = false;
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => { console.info('send post complete'), this.sendDialog(); }
        });

    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
      this.isChecked = false;
    }
  }

  openImpressum(): void {
    this.dialog.open(ImpressumComponent, {
      width: '500px',
      panelClass: 'custom-dialog-container'
    });
  }

  openPolicy(): void {
    this.dialog.open(PolicyComponent, {
      width: '500px',
      panelClass: 'custom-dialog-container'
    });
  }

  sendDialog(): void {
    this.dialog.open(SendDialogComponent, {
      width: '500px',
      panelClass: 'custom-dialog-container'
    });
  }
}

