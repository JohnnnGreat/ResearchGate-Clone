import { User } from "../Models/Users.js";
import bcrypt from "bcrypt";
import crypto from "crypto";
import nodemailer from "nodemailer";

export const SignIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) throw new Error("User not found");

    res.status(200).json({ message: "Login succesfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const SignUp = async (req, res) => {
  console.log(req.body);
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user) {
      throw new Error("User Already Exist");
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const userAdded = new User({
      firstName,
      lastName,
      email,
      password: encryptedPassword,
    });

    await userAdded.save();

    return res.status(200).json({ message: "User created succesfully" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const GenerateCode = async (req, res) => {
  console.log(req.body);
  try {
    const { email, id } = req.body;

    const user = await User.findOne({ email });
    if (!user) throw new Error("User not found");
    const value = [];

    for (let i = 1; i <= 6; i++) {
      value.push(GenerateRandomValues());
    }

    const stringRepresentation = value.join(",").replace(/,/g, "");

    const updateUser = await User.findByIdAndUpdate(
      id,
      {
        vCode: stringRepresentation,
      },
      {
        new: true,
      }
    );

    updateUser.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "johnossai20@gmail.com",
        pass: "kblgyogjwalbiwja",
      },
    });

    const mailData = {
      from: `johnossai20@gmail.com`,
      to: "JOHN OSSAI <johnossai20@gmail.com>",
      subject: `Verify Email Address`,
      html: `http://localhost:4400/api/user/verify?code = ${stringRepresentation}`,
    };

    await transporter.sendMail(mailData);

    res.status(200).json({ message: "A link have been sent" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

function GenerateRandomValues() {
  const randomBytes = crypto.randomBytes(1); // Use 1 byte for a number between 0 and 255
  const randomNumber = randomBytes.readUInt8(0);

  const scaledRandomNumber = 1 + (randomNumber % 6);
  return scaledRandomNumber;
}
