import { useState } from 'react';

const Display4 = () => {
	const colors = ['red-color', 'green-color', 'blue-color'];
	const [index, setIndex] = useState(0);
	const [color1, setColor1] = useState('');
	const [color2, setColor2] = useState('');
	const [color3, setColor3] = useState('');

	const handleChangeColor1 = () => {
		if (index > 2) {
			setIndex(0);
			setColor1('');
		} else {
			setIndex(index + 1);
			setColor1(colors[index]);
		}
	};
	const handleChangeColor2 = () => {
		if (index > 2) {
			setIndex(0);
			setColor2('');
		} else {
			setIndex(index + 1);
			setColor2(colors[index]);
		}
	};
	const handleChangeColor3 = () => {
		if (index > 2) {
			setIndex(0);
			setColor3('');
		} else {
			setIndex(index + 1);
			setColor3(colors[index]);
		}
	};
	return (
		<div className='display-container'>
			<header>
				<h3>
					Display 4: Make the box clickable and change colour to red, green,
					blue, and return to no colour
				</h3>
			</header>
			<div className='box-container'>
				<div className={color1 + ' box-4'} onClick={handleChangeColor1}>
					<p>BOX 1</p>
				</div>
				<div className={color2 + ' box-4'} onClick={handleChangeColor2}>
					<p>BOX 2</p>
				</div>
				<div className={color3 + ' box-4'} onClick={handleChangeColor3}>
					<p>BOX 3</p>
				</div>
			</div>
		</div>
	);
};

export default Display4;
