export const createResponse = (
  statusCode: number,
  message: string,
  data?: any
) => {
  return {
    statusCode,
    message,
    data,
  };
};
