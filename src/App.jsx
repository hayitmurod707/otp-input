import { useState } from 'react';
import styled from 'styled-components';
import OtpInput from './OtpInput';
const StyledElement = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	min-height: 100vh;
`;
const App = () => {
	const [value, setValue] = useState('');
	return (
		<StyledElement>
			<h1>React otp input</h1>
			<OtpInput onChange={value => setValue(value)} value={value} />
		</StyledElement>
	);
};
export default App;
