import { createContext, useReducer } from 'react';

export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE': {
            const total_expenses =
                state.expenses.reduce((total, { cost }) => total + cost, 0) + action.payload.cost;

            if (total_expenses > state.budget) {
                alert("Cannot increase the allocation! Out of funds");
                return state;
            }

            const expenses = state.expenses.map(expense => {
                if (expense.name === action.payload.name) {
                    return {
                        ...expense,
                        cost: expense.cost + action.payload.cost
                    }
                }
                return expense;
            });

            return {
                ...state,
                expenses
            };
        }
        case 'SUBSTRACT_EXPENSE': {
            const expenses = state.expenses.map(expense => {
                if (expense.name === action.payload.name && expense.cost - action.payload.cost >= 0) {
                    return {
                        ...expense,
                        cost: expense.cost - action.payload.cost
                    }
                }
                return expense;
            });


            return {
                ...state,
                expenses
            }
        }
        case 'RED_EXPENSE':
            {
                const expenses = state.expenses.map((expense) => {
                    if (expense.name === action.payload.name && expense.cost - action.payload.cost >= 0) {
                        return {
                            ...expense,
                            cost: expense.cost - action.payload.cost
                        }
                    }
                    return expense
                })

                return {
                    ...state,
                    expenses,
                };
            }
        case 'DELETE_EXPENSE':
            {
                const expenses = state.expenses.map((expense) => {
                    if (expense.name === action.payload) {
                        return {
                            ...expense,
                            cost: 0
                        }
                    }
                    return expense
                })

                return {
                    ...state,
                    expenses
                };
            }
        case 'SET_BUDGET':
            {
                return {
                    ...state,
                    budget: action.payload
                };
            }
        case 'CHG_CURRENCY':
            {
                return {
                    ...state,
                    currency: action.payload
                }
            }
        default:
            return state;
    }
};

const initialState = {
    budget: 2000,
    expenses: [
        { id: "Marketing", name: 'Marketing', cost: 50 },
        { id: "Finance", name: 'Finance', cost: 300 },
        { id: "Sales", name: 'Sales', cost: 70 },
        { id: "Human Resource", name: 'Human Resource', cost: 40 },
        { id: "IT", name: 'IT', cost: 500 },
    ],
    currency: '£'
};

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const totalExpenses = state.expenses.length !== 0
        ? state.expenses.reduce((total, item) => total + item.cost, 0)
        : 0;
    const remaining = state.budget - totalExpenses;

    return (
        <AppContext.Provider
            value={{
                expenses: state.expenses,
                budget: state.budget,
                remaining: remaining,
                currency: state.currency,
                dispatch,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export const AppContext = createContext();