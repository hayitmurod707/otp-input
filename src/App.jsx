import { useState } from 'react';
import OtpInput from './OtpInput';
import styled from 'styled-components';
const StyledElement = styled.div`
	align-items: center;
	display: flex;
	justify-content: center;
	min-height: 100vh;
`;
const App = () => {
	const [value, setValue] = useState('');
	const [error, setError] = useState(false);
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
