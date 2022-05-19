const ContactCard = ({ title, img, link, social }) => {
  return (
    <a className="card" href={link} target="_blank" rel="noopener">
      <img src={img} alt={`Logo ${social}`} className="logo" loading="lazy" />
      <p className="social">{title}</p>
    </a>
  );
};

export default ContactCard;
