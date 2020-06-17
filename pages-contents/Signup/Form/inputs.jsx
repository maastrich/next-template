import React from "react";
// @material-ui/core components
import Button from "@material-ui/core/Button";
import PropTypes from 'prop-types'
import InputWithError from "components/CustomInput/InputWithError";
import inputList from './inputlist'
import { Grid } from "components";

let inputs = inputList;

export default function SignupFormProvider(props) {
	const [match, setMatch] = React.useState(false);
	const [matchs, setMatchs] = React.useState([]);
	const [value, setValue] = React.useState(null);
	const { onChange, onSubmit } = props;

	const handleChange = variable => newValue => {
		props.onChange(variable)(newValue);
		setValue({ ...value, [variable]: newValue })
	}

	const handleMatchs = variable => doesMatch => {
		let saveMatchs = matchs;
		saveMatchs[variable] = doesMatch;
		setMatchs(saveMatchs);
		let allMatch = (matchs.length === 6);
		matchs.forEach((each) => {
			allMatch = allMatch && each
		});
		setMatch(allMatch);
	}

	const onClick = () => {
		onSubmit();
	}

	return (
		<>
			<Grid.Container justify='center' spacing={3}>
				{
					inputs.map((input, key) =>
					<Grid.Item xs={6}>
						<InputWithError
							{...input}
							key={key}
							onChange={handleChange(input.name)}
							match={handleMatchs(key)}
							hasClick={() => { }}
						/>
						</Grid.Item>
					)
				}
			</Grid.Container>
			<Button disabled={!match} color="primary" onClick={onClick}>Sign Up</Button>

		</>)
}

SignupFormProvider.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired
}
