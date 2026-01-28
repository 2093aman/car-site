import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export async function sendEnquiryEmail(submission: any) {
    const { name, email, phone, vehicle, budget, message } = submission;

    const recipientEmail = "umzeautohaus11@gmail.com";

    const mailOptions = {
        from: `"UMZE Autohaus Website" <${process.env.SMTP_USER}>`,
        to: recipientEmail,
        subject: `New Website Enquiry from ${name}`,
        html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; border: 1px solid #ddd; padding: 20px; border-radius: 10px;">
        <h2 style="color: #25614F; border-bottom: 2px solid #25614F; padding-bottom: 10px;">New Website Enquiry</h2>
        <p>You have received a new enquiry from the website contact forms.</p>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">Name:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
          </tr>
          ${phone ? `
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td>
          </tr>` : ''}
          ${vehicle ? `
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Vehicle:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${vehicle}</td>
          </tr>` : ''}
          ${budget ? `
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Budget:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${budget}</td>
          </tr>` : ''}
        </table>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 5px;">
          <h3 style="margin-top: 0; color: #25614F;">Message:</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
        
        <p style="margin-top: 20px; font-size: 12px; color: #777;">
          This email was automatically generated from the UMZE Autohaus Website. 
          You can also manage this enquiry in the <a href="${process.env.NEXT_PUBLIC_BASE_URL}/admin/forms">Admin Dashboard</a>.
        </p>
      </div>
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Enquiry email sent successfully to', recipientEmail);
        return { success: true };
    } catch (error) {
        console.error('Error sending enquiry email:', error);
        return { success: false, error };
    }
}
