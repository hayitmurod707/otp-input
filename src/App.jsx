import { useState } from 'react';
import OtpInput from './OtpInput';
import styled from 'styled-components';
const StyledElement = styled.div`
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const App = () => {
	const [value, setValue] = useState('');
	const [error, setError] = useState(true);
	return (
		<StyledElement>
			<OtpInput
				hasErrored={error}
				numInputs={5}
				value={value}
				onChange={value => {
					setValue(value);
					setError(false);
				}}
			/>
		</StyledElement>
	);
};
export default App;
