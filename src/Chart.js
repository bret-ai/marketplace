import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useStateValue } from './StateProvider';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
    marginBottom: 50,
  },
});

const data = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', undefined),
];

export default function Chart() {
  const theme = useTheme();

  const [{ userWallet }, dispatch] = useStateValue();

  const classes = useStyles();  
  return (
    <React.Fragment>
      <Typography margin-bottom="10px" color="textPrimary" className={classes.depositContext}>
        {/* Welcome, {userWallet} */}
        Welcome, 0x1016C9662480336460122638AC261d2329a11F4B
      </Typography>      
      <Title>Market Cap</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Price (𐆗)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
        <div>
        <div class="nomics-ticker-widget" data-name="VeChain Thor" data-base="VET" data-quote="KES"></div><script src="https://widget.nomics.com/embed.js"></script>
        </div>
      </ResponsiveContainer>
    </React.Fragment>
  );
}

