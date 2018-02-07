import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";
import expenses from "../fixtures/expenses";

test("should render ExpenseSummary correctly", () => {
	const wrapper = shallow(<ExpensesSummary expenses={expenses} />);
	expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseSummary with 1 value", () => {
	const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]} />);
	expect(wrapper).toMatchSnapshot();
});