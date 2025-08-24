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
        msg: "user registered successfully!",
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

const addFriends = async (req, res) => {
  const userId = req.params.userId;
  const { username, friends } = req.body;
  try {
    const user = await Users.findByIdAndUpdate(userId, {
      username: username,
      friends: friends,
    });
    if (!user) {
      res.status(404).json({ msg: "user not found" });
    }

    res.status(201).json({ msg: "updated your username and friends", data: user });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};


module.exports={signup, addFriends}
