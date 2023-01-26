/* eslint-disable unused-imports/no-unused-vars */

type Props = {
  handleDelete: () => void;
  handleEdit: () => void;
  title: string;
};

const ItemsList: React.FC<Props> = ({ title, handleEdit, handleDelete }) => (
  <li className="border-2 border-[#e300be] text-black my-4 p-3 rounded">
    <div>
      <div className="flex items-center mb-5">
        <h3 className="text-lg ml-5">{title}</h3>
      </div>
    </div>
    <div className="flex justify-start gap-4">
      <button onClick={handleDelete} className="p-2 rounded bg-pink-500 text-base-0">
        delete
      </button>
      <button onClick={handleEdit} className="p-2 rounded bg-pink-500 text-base-0">
        Edit
      </button>
    </div>
  </li>
);

export default ItemsList;
