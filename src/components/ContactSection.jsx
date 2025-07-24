import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook,Send} from "lucide-react";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
const formRef = useRef();
const [isSubmitting , setIsSubmitting] = useState(false)
    const handleSubmit =(e)=> {
        e.preventDefault()

        setTimeout(() => {

        }, 1500)
    }

const SERVICE_ID = "service_y0zfk6l";
const TEMPLATE_ID ="template_zb4bf2n";
const PUBLIC_KEY ="2Fl8UjbdRPaK8b3Qt";

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true)

     emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
         
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      ).finally(()=>{
        setIsSubmitting(false)
      })
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
           Feel me to reach out for any help and jobs .
           I'm always open to discussing new opprtunities 
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
                <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>

                <div className="space-y-6 justify-center">
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                        <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-medium"> Email</h4>
                            <a href="mailto:yanishgurung69@gmail.com" className="text-muted-foreground hover:primary transition-colors"> yanishgurung69@gmail.com </a>
                            
                        </div>
                    </div>
                     <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                        <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-medium"> Phone</h4>
                            <a href="tel:9705919920" className="text-muted-foreground hover:primary transition-colors"> +977 9705919920 </a>
                            
                        </div>
                    </div> 
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                        <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-medium"> Location</h4>
                            <a className="text-muted-foreground hover:primary transition-colors"> Gothatar,KTM , Nepal </a>
                            
                        </div>
                    </div>
                </div>

                <div className="pt-8">
                    <h4 className="font-medium mb-4">  Connect with Me</h4>
                    <div className="flex space-x-4 justify-center">
                        <a href="https://www.linkedin.com/in/yanish-gurung-810726353/" target="_blank">
                          <Linkedin />  
                        </a>
                        <a href="https://www.facebook.com/yanish.roxxlmf/"target="_blank">
                          <Facebook />  
                        </a>
                        
                    </div>
                </div>
            </div>

            <div className="bg-carsd p-8 rounded-lg shadow-xs">
                <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

                <form className="space-y-6" ref={formRef} onSubmit={sendEmail}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2"> Your name</label>
                        <input 
                        type="text" 
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                        placeholder="Yanish Gurung..."
                        />
         
                    </div>
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2"> Your email</label>
                        <input 
                        type="email" 
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                        placeholder="example@gmail.com..."
                        />
         
                    </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2"> Your message</label>
                        <textarea 
                       
                        id="message"
                        name="message"
                        required
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                        placeholder=" Hello , I'd like to talk about ..."
                        />
                    </div>

                    <button disabled={isSubmitting} type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2",)}>
                      {isSubmitting? "Sending...":
                        "Send Message"
                      }
                        <Send size={16} />

                    </button>

                </form>

            </div>
        </div>
      </div>
    </section>
  );
};


