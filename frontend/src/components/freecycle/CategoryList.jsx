
export default function CategoryList(props) {

  const categoryList = props.categories.map((category) =>
  <option key={category.id} href="#" value={category.name}>{category.name}</option>
  );
  
  return (
      <select name="categories" id="category-select" value={props.categoryName} onChange={event => props.setCategoryName(event.target.value)}>
        {categoryList}
      </select>
  );
}