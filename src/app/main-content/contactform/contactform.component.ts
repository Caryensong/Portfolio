import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-contactform',
  standalone:true,
  imports: [CommonModule, FooterComponent, FormsModule, TranslatePipe, TranslateDirective],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss'
})
export class ContactformComponent { 
  policyText: SafeHtml = ''; 
  isHovered:boolean = false;
  showAnimation: boolean = false;
  isChecked: boolean = false;

  constructor(private sanitizer: DomSanitizer, private translate: TranslateService) {
    this.updatePolicyText(); // Methode aufrufen, um den Text zu setzen

    // Falls sich die Sprache ändert, wird der Text neu geladen
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

  http = inject(HttpClient)

contactData={
  name:"",
  email:"",
  message:"",
}

nameError: boolean = false;
emailError: boolean = false;
messageError: boolean = false;

checkPlaceholder(field: string): void {
  switch (field) {
      case 'name':
          this.nameError = !this.contactData.name || this.contactData.name.trim() === '';
          break;
      case 'email':
          this.emailError = !this.contactData.email || this.contactData.email.trim() === '';
          break;
      case 'message':
          this.messageError = !this.contactData.message || this.contactData.message.trim() === '';
          break;
  }
}


mailTest = true;

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
        complete: () => console.info('send post complete'),
      });
  } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

    ngForm.resetForm();
    this.isChecked = false;  
  }
}

}

