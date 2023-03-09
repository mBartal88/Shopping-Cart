import emailjs from '@emailjs/browser';

const sendConfirmationEmail = (order: string) => {    

    const data: Record<string, string> = {
        from_name: 'Sunland Ltd.',
        to_name: 'Miklós Bartal',
        message: order
    };
    
    emailjs
      .send(
        'service_6t0lmcp', // SERVICE_ID
        'template_f7zgvcu', // TEMPLATE_ID
        data,
        'VxErxzMuQq-n0YC8F' // PUBLIC_KEY
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