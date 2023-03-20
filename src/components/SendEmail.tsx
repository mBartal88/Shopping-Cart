import emailjs from '@emailjs/browser';

const sendConfirmationEmail = (order: string, name: string | undefined) => {    
    
    const data: Record<string, string> = {
        from_name: 'Sunland Ltd.',
        to_name: `${name}`,
        message: order
    };

    console.log(`From: ${data.from_name}`)
    console.log(`To: ${data.to_name}`)
    console.log(`Email message: ${data.message}`)
    
    emailjs
      .send(
        'SERVICE_ID',
        'TEMPLATE_ID',
        data,
        'PUBLIC_KEY'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      
  };

export default sendConfirmationEmail