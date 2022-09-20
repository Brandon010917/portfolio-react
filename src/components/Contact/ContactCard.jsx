const ContactCard = ({ title, src, link, social }) => {
  return (
    <a className="card" href={link} target="_blank" rel="noopener">
      <img src={src} alt={`Logo ${social}`} className="logo" loading="lazy" />
      <p className="social">{title}</p>
    </a>
  );
};

export default ContactCard;
