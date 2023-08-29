import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
import { prisma } from "../../../utils/constants";
import bcrypt from "bcrypt";
import * as jose from "jose";
import { setCookie } from "cookies-next";

export default async function SignUpHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { firstName, lastName, email, phone, city, password } = req.body;

    const errors: string[] = [];

    const validationSchema = [
      {
        valid: validator.isLength(firstName, {
          min: 1,
          max: 20,
        }),
        errorMessage: "Invalid fist name",
      },
      {
        valid: validator.isLength(lastName, {
          min: 1,
          max: 40,
        }),
        errorMessage: "Invalid last name",
      },
      {
        valid: validator.isEmail(email),
        errorMessage: "Invalid Email",
      },
      {
        valid: validator.isMobilePhone(phone),
        errorMessage: "Invalid Phone",
      },
      {
        valid: validator.isLength(city, { min: 1 }),
        errorMessage: "Invalid Localization",
      },
      {
        valid: validator.isStrongPassword(password),
        errorMessage: "Please insert a stronger password",
      },
    ];

    validationSchema.forEach((check) => {
      if (!check.valid) {
        errors.push(check.errorMessage);
      }
    });

    if (errors.length) {
      return res.status(400).json({ errorMessage: errors[0] });
    }

    const userEmailValidation = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userEmailValidation) {
      return res
        .status(401)
        .json({ errorMessage: "Email already associate with another account" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        city,
        password: hashedPassword,
      },
    });

    const alg = "HS256";

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    const token = await new jose.SignJWT({ email: user.email })
      .setProtectedHeader({ alg })
      .setExpirationTime("24h")
      .sign(secret);
    setCookie("jwt", token, { req, res, maxAge: 60 * 6 * 24 });

    return res.status(200).json({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      city: city,
    });
  }
  return res.status(404).json("Can`t resolve the request");
}
