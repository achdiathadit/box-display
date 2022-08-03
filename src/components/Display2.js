const Display2 = () => {
	return (
		<div className='display-container'>
			<header>
				<h3>
					Display 2: Make the width of only box 1 & 2 decrease or increase when
					the width of the display changes
				</h3>
			</header>
			<div className='box-container'>
				<div className='box'>
					<p>BOX 1</p>
				</div>
				<div className='box'>
					<p>BOX 2</p>
				</div>
				<div className='box-2'>
					<p>BOX 3 (FIXED WIDTH)</p>
				</div>
			</div>
		</div>
	);
};

export default Display2;
