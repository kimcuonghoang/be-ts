export const createResponse = (
  success: boolean,
  statusCode: number,
  message: string,
  data?: any
) => {
  return {
    success,
    statusCode,
    message,
    data,
  };
};
