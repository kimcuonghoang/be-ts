import bcrypt from "bcrypt";

import MESSAGES from "../../common/constants/message.ts";
import { createError } from "../../common/utils/error.ts";
import handleAsync from "../../common/utils/handleAsync.ts";
import User from "./users.model.ts";
import { createResponse } from "./../../common/utils/response";
export const authRegister = handleAsync(async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!email || !password) {
    return next(createError(MESSAGES.USERS.USER_NOT_FOUND, 400));
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    return next(createError(MESSAGES.USERS.USER_ALREADY_EXISTS, 409));
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newData = new User({
    ...req.body,
    password: hashedPassword,
  });
  await newData.save();
  return res.json(
    createResponse(true, 200, MESSAGES.USERS.USER_CREATED, newData)
  );
});
