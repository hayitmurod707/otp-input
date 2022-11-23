import { bool, func, number, string } from 'prop-types';
import Input from 'react-otp-input';
import styled from 'styled-components';
const StyledElement = styled.div`
	& .otp-input-container {
		& div {
			margin: 0 7px;
			&:first-child {
				margin: 0 7px 0 0;
			}
			&:last-child {
				margin: 0 0 0 7px;
			}
			& .otp-input {
				border-radius: 8px;
				border: 2px solid #000000;
				font-size: 22px;
				font-weight: 500;
				height: 50px;
				margin: 0;
				padding: 0;
				width: 44px !important;
			}
			& .otp-input-focused {
				border: 2px solid blue;
			}
			& .otp-input-error {
				border: 2px solid red;
			}
			& .otp-input-disabled {
				border: 2px solid #ccc;
			}
		}
	}
`;
const defaultOptions = {
	// containerStyle: style object or className string
	// data-cy: string
	// data-testid: string
	// disabledStyle: style object or className string
	// errorStyle: style object or className string
	// focusStyle: style object or className string
	// hasErrored: boolean default false
	// inputStyle: style object or className string
	// isDisabled: boolean default false
	// isInputNum: boolean default false,
	// isInputSecure: boolean default false
	// numInputs: number default 4 required
	// onChange: function required
	// placeholder: string default ''
	// separator: React node element
	// shouldAutoFocus: boolean default false
	// value: number or string required default ''
	containerStyle: 'otp-input-container',
	disabledStyle: 'otp-input-disabled',
	errorStyle: 'otp-input-error',
	focusStyle: 'otp-input-focused',
	inputStyle: 'otp-input',
};
const OtpInput = props => (
	<StyledElement>
		<Input {...defaultOptions} {...props} />
	</StyledElement>
);
OtpInput.defaultProps = {
	hasErrored: false,
	isDisabled: false,
	isInputNum: true,
	isInputSecure: false,
	numInputs: 5,
	placeholder: '',
	shouldAutoFocus: true,
	value: '',
};
OtpInput.propTypes = {
	hasErrored: bool,
	isDisabled: bool,
	isInputNum: bool,
	isInputSecure: bool,
	numInputs: number,
	onChange: func.isRequired,
	shouldAutoFocus: bool,
	value: string.isRequired,
};
export default OtpInput;
