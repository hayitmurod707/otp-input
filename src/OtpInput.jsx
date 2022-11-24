import { bool, func, number, string } from 'prop-types';
import ReactOtpInput from 'react-otp-input';
import styled from 'styled-components';
const StyledElement = styled.div`
	& .react-otp-input {
		& div {
			margin: 0 8px;
			&:first-child {
				margin: 0 8px 0 0;
			}
			&:last-child {
				margin: 0 0 0 8px;
			}
			& input {
				border-radius: 10px;
				border: 2px solid #000000;
				font-size: 24px;
				font-weight: 500;
				height: 50px;
				margin: 0;
				padding: 0;
				width: 42px !important;
				&:disabled {
					background-color: transparent;
				}
			}
			& input.error {
				border: 2px solid #ff0000;
			}
			& input.focused {
				border: 2px solid #0000ff;
			}
			& input.disabled {
				border: 2px solid #cccccc;
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
	containerStyle: 'react-otp-input',
	disabledStyle: 'disabled',
	errorStyle: 'error',
	focusStyle: 'focused',
	isInputNum: true,
	numInputs: 5,
	shouldAutoFocus: true,
};
const OtpInput = props => (
	<StyledElement>
		<ReactOtpInput {...defaultOptions} {...props} />
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
	numInputs: number.isRequired,
	onChange: func.isRequired,
	placeholder: string,
	shouldAutoFocus: bool,
	value: string.isRequired,
};
export default OtpInput;
