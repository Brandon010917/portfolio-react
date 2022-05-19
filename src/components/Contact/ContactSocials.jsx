// Data
import ContactCard from "./ContactCard";
import contactData from "./contactData";

const ContactSocials = () => {
  return (
    <div className="socials">
      {contactData.map((social) => (
        <ContactCard
          key={social.social}
          title={social.title}
          img={social.img}
          link={social.link}
          social={social.social}
        />
      ))}
    </div>
  );
};

export default ContactSocials;
