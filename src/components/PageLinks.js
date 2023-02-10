import { pageLinks } from "../data";

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {pageLinks.map((link) => (
        <li key={link.id}>
          <a href={link.href} className={itemClass}>
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
};
export default PageLinks;
