import emailjs from "@emailjs/browser";

export interface sendMailProps {
  name: string;
  email: string;
  desc: string;
}

const sendMail = async ({ name, email, desc }: sendMailProps) => {
  const templateParams = {
    from_name: name,
    message: desc,
    email: email,
  };

  let sucess = false;

  try {
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID || "",
      process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID || "",
      templateParams,
      "Nzp7f022sFI9V8nzU"
    );

    sucess = true;
  } catch (error) {
    sucess = false;
  }

  return sucess;
};

export { sendMail };
