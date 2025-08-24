const Users =require("../model/UsersDatabase")

const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const user = await Users.findOne({ email });

  try {
    if (user == null) {
      const newuser = new Users({
        username: username,
        email: email,
        password: password,
      });

      await newuser.save();
      return res.status(201).json({
        msg: "usser registered successfully!",
        data: { newuser },
      });

    } else {
      return res
        .status(404)
        .json({ msg: "this email is taken please change it" });
    }
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

module.exports={signup}
