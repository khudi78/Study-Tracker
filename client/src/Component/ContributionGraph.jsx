import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

const ContributionGraph = ({ data }) => {
  // Function to filter data for a specific month
  const filterDataByMonth = (monthIndex) => {
    return data.filter(item => new Date(item.date).getMonth() === monthIndex);
  };

  // Render CalendarHeatmap for each month
  const renderMonthHeatmaps = () => {
    const monthHeatmaps = [];
    for (let i = 0; i < 12; i++) {
      const monthData = filterDataByMonth(i);
      monthHeatmaps.push(
        <div key={i} className="w-24 md:w-1/8 gap-10" style={{marginRight: '20px'}}> {/* Add margin-right for gap */}
          <h3 className="text-lg font-semibold ">{new Date(2024, i).toLocaleString('default', { month: 'long' })}</h3>
          <div className="">
            <CalendarHeatmap
              startDate={new Date(2024, i, 1)} // Start date for the graph
              endDate={new Date(2024, i + 1, 0)} // End date for the graph
              values={monthData} // Filtered data for the month
              showMonthLabels // Show month labels on the graph
              classForValue={(value) => {
                if (!value) {
                  return 'color-empty';
                }
                return `color-github-${value.count}`;
              }}
              // Set custom style for the heatmap
              style={{ height: 'calc(100% - 10px)' }}
            />
          </div>
        </div>
      );
    }
    return monthHeatmaps;
  };

  return (
    <div className='flex flex-wrap'>
      {renderMonthHeatmaps()}
    </div>
  );
};

export default ContributionGraph;