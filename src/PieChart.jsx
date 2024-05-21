import React, { useRef } from 'react';
import Chart from 'chart.js/auto';
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Doughnut, getElementAtEvent } from "react-chartjs-2";

const PieChart = ({ data, selectedCountry, setSelectedCountry }) => {
	Chart.register(CategoryScale);
	const chartRef = useRef();

	const [chartData, setChartData] = useState({
		labels: data.map(item => item.label),
		datasets: [{
			data: data.map(item => item.value),
		}]
	});

	const options = {
		animation: false,
		maintainAspectRatio: false,
		aspectRatio: 1,
		plugins: {
			legend: {
			display: false,
			}
		}
	};
	
	const countryConvert = (label) => {
		if (label === 'NEWZEALAND') {return 'NEW ZEALAND';}
		else if (label === 'UNITEDSTATES') {return 'UNITED STATES';}
		else {return label;}
	}
	
	const onClick = (event) => {
		const elements = getElementAtEvent(chartRef.current, event);
		if (!elements.length) return;

		const { index } = elements[0];
		const label = data[index].label;

		if (selectedCountry === label) {
			setSelectedCountry(null);
		} else {
			if (label === 'NEW ZEALAND') {setSelectedCountry('NEWZEALAND');}
			else if (label === 'UNITED STATES') {setSelectedCountry('UNITEDSTATES');}
			else {setSelectedCountry(label);}
		}
	};


  return (
	<div className='doughnut' style={{ width: '400px', height: '400px' }}>
    	<Doughnut data={chartData} options={options} ref={chartRef} onClick={onClick} />
		<p className='country-selection'>{countryConvert(selectedCountry)}</p>
 	</div>
  );
};

export default PieChart;