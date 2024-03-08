import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '01',
    uv: 24,
    pv: 30,
    amt: 30,
  },
  {
    name: '02',
    uv: 21,
    pv:30,
    amt:30
  },
  {
    name: '03',
    uv: 18,
    pv:30,
   amt:30
  },
  {
    name: '04',
    uv: 15,
    pv:30,
    amt:30
  },
  {
    name: '05',
    uv: 12,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '06',
    uv: 9,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '07',
    uv: 6,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '08',
    uv: 3,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '09',
    uv: 0,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '10',
    uv: 24,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '11',
    uv: 21,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '12',
    uv: 18,
    pv:30,
    amt:30
  },
  {
    name: '13',
    uv: 15,
    pv:30,
   amt:30
  },
  {
    name: '14',
    uv: 12,
    pv:30,
    amt:30
  },
  {
    name: '15',
    uv: 9,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '16',
    uv: 6,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '17',
    uv: 3,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '18',
    uv: 0,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '19',
    uv: 21,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '20',
    uv: 9,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '21',
    uv: 0,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '22',
    uv: 24,
    pv:30,
    amt:30
  },
  {
    name: '23',
    uv: 21,
    pv:30,
   amt:30
  },
  {
    name: '24',
    uv: 18,
    pv:30,
    amt:30
  },
  {
    name: '25',
    uv: 15,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '26',
    uv: 12,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '27',
    uv: 9,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '28',
    uv: 6,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '29',
    uv: 3,
    pv:30 ,
    amt: 30,
  },
  {
    name: '30',
    uv: 0,
    pv: 30,
    amt: 30,
  },



];

export default class Demo extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/s/simple-area-chart-4ujxw';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={1000}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}