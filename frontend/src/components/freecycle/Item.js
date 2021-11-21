
export default function Item(props) {

  const { name, description, image_url } = props;

  return (
    <li>
      <img
        className="items__item-image"
        src={image_url}
        alt={name}
      />
      <p>{description}</p>
    </li>
  );
}