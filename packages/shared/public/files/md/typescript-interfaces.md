## TypeScript Interfaces

One of TypeScript’s core principles is that type checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural subtyping”. In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.

> Use Interface Props in Functional Components Using TypeScript with React

Writing function or class components in a React/TypeScript app often requires you to define the type of props passed to them. It enforces type checking so that the code adheres to the defined contract. This guide will cover how to strongly type the props in a function component with the TypeScript interface.

```
import React from "react";

interface Budget {
    budgeted: number,
    spent: number,
    category: string,
}

interface BudgetProps {
    budgets: Budget[];
}

export const BudgetOverview: React.FC<BudgetProps> = ({budgets}: BudgetProps) => {
    return <div className="Budget-Overview">
            {budgets.map(item => {
                return <BudgetItem budgeted={item.budgeted}
                                   spent={item.spent}
                                   category={item.category}>
                </BudgetItem>
            })}
    </div>
}
```
