import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactform',
  standalone:true,
  imports: [CommonModule, FooterComponent, FormsModule],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss'
})
export class ContactformComponent {
  isHovered:boolean = false;
  showAnimation: boolean = false;

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
  // if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
  //   this.http.post(this.post.endPoint, this.post.body(this.contactData))
  //     .subscribe({
  //       next: (response) => {

  //         ngForm.resetForm();
  //       },
  //       error: (error) => {
  //         console.error(error);
  //       },
  //       complete: () => console.info('send post complete'),
  //     });
  // } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

  //   ngForm.resetForm();
  // }
}

}

