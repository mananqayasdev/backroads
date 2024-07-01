const SocialLink = ({ id, href, icon, LinkClass }) => {
  return (
    <li key={id}>
      <a href={href} target="_blank" rel="noreferrer" className={LinkClass}>
        <i className={icon}></i>
      </a>
    </li>
  );
};
export default SocialLink;
