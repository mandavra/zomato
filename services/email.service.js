const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "mandavra12@gmail.com",
    pass: "ljld[]sssssseutyqcfwxwus",
  },
});

// sendmail
const send_Mail = async (to, data, subject) => {
  try {
    return transporter.sendMail({
      from: "<mandavra12@gmail.com>",
      to,
      subject ,
      text:`"Dear [User's Name],
      
      Welcome to [Your Jewelry Shop Name]! We're thrilled to have you as a part of our community of jewelry enthusiasts. Your registration marks the beginning of an exciting journey with us, where you'll discover exquisite pieces that reflect your unique style and personality. We're committed to providing you with an exceptional shopping experience, curated collections, and personalized service tailored to your preferences. Thank you for choosing [Your Jewelry Shop Name], and we look forward to helping you find the perfect pieces to adorn your beauty.
      
      Warm regards,
      [Your Name]
      [Your Position/Title]
      [Your Jewelry Shop Name]"`,
    });                       
  } catch (error) {
    return false;
  }
};

module.exports = {
    send_Mail
}




