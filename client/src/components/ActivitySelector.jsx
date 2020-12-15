import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [af, setAf] = React.useState('');

  const handleChange = (event) => {
    setAf(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Activity Factor</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={af}
          onChange={handleChange}
          label="Activity Factor"
        >
          <MenuItem value={10}>Sedentary: little or no exercise</MenuItem>
          <MenuItem value={20}>Light Activity: 1 to 3 hours of exercise or sports per week</MenuItem>
          <MenuItem value={30}>Moderate Activity: 4 to 6 hours of exercise or sports per week</MenuItem>
          <MenuItem value={30}>Very Active: 7 to 9 hours of exercise or sports per week</MenuItem>
          <MenuItem value={30}>Extra Active: 10+ hours of exercise or sports per week</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
