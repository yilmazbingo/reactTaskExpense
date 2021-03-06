import moment from "moment";

export default [
  {
    id: "1",
    description: "gum",
    note: "",
    amount: 12,
    createdAt: 0
  },
  {
    id: "2",
    description: "rent",
    note: "",
    amount: 100,
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  },
  {
    id: "3",
    description: "card",
    note: "",
    amount: 1000,
    createdAt: moment(0)
      .add(4, "days")
      .valueOf() //returns timestamp
  }
];
