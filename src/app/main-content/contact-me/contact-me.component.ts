import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  standalone:true,
  imports: [CommonModule, FooterComponent, FormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
contactData={
  name:"",
  email:"",
  message:"",
}

mailTest = true;

post = {
  endPoint: 'https://deineDomain.de/sendMail.php',
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
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => console.info('send post complete'),
      });
  } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

    ngForm.resetForm();
  }
}

}

