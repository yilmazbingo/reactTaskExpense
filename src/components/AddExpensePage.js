// import React from "react";
// import ExpenseForm from "./ExpenseForm";
// import { connect } from "react-redux";
// import { addExpense } from "../actions/expenses";

// export class AddExpensePage extends React.Component {
//   onSubmit = expense => {
//     props.onSubmit(expense);
//     props.history.push("/");
//   };

//   render() {
//     return (
//       <div>
//         <h1>Add Expense</h1>
//         <ExpenseForm
//           onSubmit={expense => {
//             this.props.onSubmit(expense);
//             this.props.history.push("/");
//           }}
//         />
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     onSubmit: expense => dispatch(addExpense(expense))
//   };
// };

// export default connect(
//   undefined,
//   mapDispatchToProps
// )(AddExpensePage);

import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startAddExpense } from "../actions/expenses";

export class AddExpensePage extends React.Component {
  onSubmit = expense => {
    this.props.startAddExpense(expense);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddExpense: expense => dispatch(startAddExpense(expense))
});

export default connect(
  undefined,
  mapDispatchToProps
)(AddExpensePage);