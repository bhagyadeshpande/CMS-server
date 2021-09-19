import mongoose from 'mongoose';

const contactSchema = mongoose.Schema({  
  contactName : String,  
  contactAddress : String,
  contactPhone : Number,
  contactEmail:String
});

const contact = mongoose.model('contact', contactSchema);

export default contact;