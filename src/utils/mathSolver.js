export const MathSolver = {
  solveLimit: (func, variable, approach, result) => [
    { step: 1, title: "Define the limit", description: `We are evaluating the limit: lim (${variable} → ${approach}) of ${func}.` },
    { step: 2, title: "Direct substitution", description: `We attempt to substitute ${variable} = ${approach} directly into the function.` },
    { step: 3, title: "Analyze the form", description: `We check if it results in an indeterminate form that requires manipulation.` },
    { step: 4, title: "Algebraic manipulation / Rule", description: `We apply algebraic simplifications or rules (like L'Hôpital's) to resolve it.` },
    { step: 5, title: "Simplify the expression", description: `The simplified function becomes continuous at the evaluated point.` },
    { step: 6, title: "Evaluate the new limit", description: `We substitute the value of ${variable} into the final simplified expression.` },
    { step: 7, title: "Conclusion", description: `Therefore, the result of the limit is ${result}.` }
  ],
  solveLinearEq: (equation, variable, result) => [
    { step: 1, title: "Identify the equation", description: `Original equation: ${equation}` },
    { step: 2, title: "Distribute terms", description: `Remove parentheses if any, distributing the factors.` },
    { step: 3, title: "Group like terms", description: `Separate the variable ${variable} from the integer numbers.` },
    { step: 4, title: "Isolate the term", description: `Move the constants to the opposite side of the equals sign.` },
    { step: 5, title: "Divide by the coefficient", description: `Divide both sides by the number accompanying ${variable}.` },
    { step: 6, title: "Simplify", description: `Reduce the fraction or the final obtained value.` },
    { step: 7, title: "Result", description: `Therefore, ${variable} = ${result}.` }
  ]
  // (The other functions follow the same plain text logic)
};
