import './Dropdown.css';

const Dropdown = ({ name, options }) => {
	return (
		<select className="Dropdown" name={name}>
			{options.map((option) => (
				<option value={option?.value}>{option?.text}</option>
			))}
		</select>
	);
};

export default Dropdown;
