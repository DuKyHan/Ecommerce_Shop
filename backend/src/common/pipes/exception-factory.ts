import { ValidationError } from 'class-validator';

export const PIPE_EXCEPTION_FACTORY = (errors: ValidationError[]) => {
  // Get first error only
  const error = errors[0];
  const invalidProperty = error.property;
  let message = error.constraints
    ? Object.values(error.constraints)[0]
    : undefined;
  if (
    error.contexts &&
    Object.values(error.contexts)[0].generalMessage === true
  ) {
    message = undefined;
  }
  return new Error(
    `Invalid property: ${invalidProperty}, message: ${message}, error: ${JSON.stringify(
      errors,
    )}`,
  );
};
