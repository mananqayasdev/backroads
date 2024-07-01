const PageLink = ({ text, href, itemClass }) => {
  return (
    <li>
      <a href={href} className={itemClass}>
        {text}
      </a>
    </li>
  );
};
export default PageLink;
