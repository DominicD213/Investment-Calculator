import React from 'react';
import { calculateInvestmentResults, formatter} from '../util/investment';

const Results = ({ objectStateValue }) => {
    console.log("objectStateValue in Results component:", objectStateValue);

    const resultsData = calculateInvestmentResults(objectStateValue);
  return (
    <div>
      <table id='result'>
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest Earned</th>
            <th>Total Interest</th>
            <th>Investment Capital</th>
          </tr>
        </thead>
        <tbody>
            {resultsData.map((data) => {
            // Calculate total interest
            const totalInterest = data.valueEndOfYear -data.annualInvestment * data.year;

            return (
            <tr key={data.year}>
                <td>{data.year}</td>
                <td>{formatter.format(data.valueEndOfYear)}</td>
                <td>{formatter.format(data.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(data.valueEndOfYear - totalInterest)}</td>
            </tr>
            );
        })}
</tbody>

      </table>
    </div>
  );
};

export default Results;
