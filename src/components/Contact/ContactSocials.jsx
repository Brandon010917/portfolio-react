// Data
import contactData from "./contactData";
// Component
import ContactCard from "./ContactCard";

const ContactSocials = () => {
  return (
    <div className="socials">
      {contactData.map((social) => (
        <ContactCard
          key={social.social}
          title={social.title}
          src={social.src}
          link={social.link}
          social={social.social}
        />
      ))}
    </div>
  );
};

export default ContactSocials;
