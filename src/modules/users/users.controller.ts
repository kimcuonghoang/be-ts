import { createError } from "../../common/utils/error";
import handleAsync from "../../common/utils/handleAsync";

export const createUser = handleAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(createError(MESS, 400));
  }
});
