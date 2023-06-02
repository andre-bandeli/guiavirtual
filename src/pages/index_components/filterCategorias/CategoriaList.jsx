import './categoriaList.scss'

export default function CategoriaList({ id, title, active, setSelected }) {
    return (
      <li
        className={active ? "categoriaList active" : "categoriaList"}
        onClick={() => setSelected(id)}
      >
        {title}
      </li>
    );
  }