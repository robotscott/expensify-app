import React from "react";
import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses";
import expenseTotal from "../selectors/expense-total";
import numeral from "numeral";

export const ExpensesSummary = props => {
	const expenseCount = props.expenses.length;
	const expenseWord = expenseCount === 1 ? "expense" : "expenses";
	const total = numeral(expenseTotal(props.expenses) / 100).format("$0,0.00");
	return (
		<div>
			<h1>
				Viewing {expenseCount} {expenseWord} totalling {total}.
			</h1>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		expenses: selectExpenses(state.expenses, state.filters)
	};
};

export default connect(mapStateToProps)(ExpensesSummary);
