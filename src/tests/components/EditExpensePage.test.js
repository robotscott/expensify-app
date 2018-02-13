import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";

let startEditExpense, startRemoveExpense, history, wrapper, expense;

beforeEach(() => {
	startEditExpense = jest.fn();
	startRemoveExpense = jest.fn();
	history = { push: jest.fn() };
	wrapper = shallow(
		<EditExpensePage
			expense={expenses[0]}
			history={history}
			startEditExpense={startEditExpense}
			startRemoveExpense={startRemoveExpense}
		/>
	);
	expense = wrapper.instance().props.expense;
});

test("should render EditExpensePage correctly", () => {
	expect(wrapper).toMatchSnapshot();
});

test("should handle startEditExpense", () => {
	const editedExpense = {
		...expense,
		amount: 200
	};
	wrapper.find("ExpenseForm").prop("onSubmit")(editedExpense);
	expect(startEditExpense).toHaveBeenLastCalledWith(expense.id, editedExpense);
	expect(history.push).toHaveBeenLastCalledWith("/");
});

test("should handle startRemoveExpense", () => {
	wrapper.find("button").prop("onClick")();
	expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expense.id });
	expect(history.push).toHaveBeenLastCalledWith("/");
});
