import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactform',
  imports: [FormsModule],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss'
})
export class ContactformComponent {

contactData={
  name: "",
  email:"",
  message: "",
}

onSubmit(){
  console.log();
  
}

}
