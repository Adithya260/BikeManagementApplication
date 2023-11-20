import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent {

showModal: boolean = false;

toggleModal() {
  this.showModal = !this.showModal;
}




onFileSelected(event: any) {
  // Handle file selection
  const file = event.target.files[0];

  // You can perform additional actions with the selected file if needed
}




sellFormData = {
  name: '',
  phone: '',
  userEmail: '',
  address: '',
  brand: '',
  model: '',
  photo:''
};

constructor() {}

onSubmit() {
//   const templateParams = {
//     name: this.sellFormData.name,
//     phone: this.sellFormData.phone,
//     userEmail: this.sellFormData.userEmail,
//     address: this.sellFormData.address,
//     brand: this.sellFormData.brand,
//     model: this.sellFormData.model,
//     Photo:this.sellFormData.photo
//   };

//   emailjs.send('service_izck7at', 'template_885886i', templateParams, 'YOUR_USER_ID')
//     .then((response: EmailJSResponseStatus) => {
//       console.log('Email sent successfully:', response);
//       alert('Form submitted successfully!');
//     }, (error) => {
//       console.error('Error sending email:', error);
//       alert('Error submitting form. Please try again later.');
//     });


const emailBody = `
Name: ${this.sellFormData.name}
User Email: ${this.sellFormData.userEmail}
Phone: ${this.sellFormData.phone}
Address: ${this.sellFormData.address}
Brand: ${this.sellFormData.brand}
Model: ${this.sellFormData.model}
Image: ${this.sellFormData.photo}
`;

const subject = 'New Bike Sale Form Submission';

const mailtoLink = `mailto:adithya2607s@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

// Open the user's default email client
window.open(mailtoLink, '_blank');
}
 }


