const Users =require("../model/users.model")

const signup = async (req, res) => {
  const userdata = req.body;
  const email= req.body.email;
  const user = await Users.findOne({ email });

  try {
    if (user == null) {
      const newuser = new Users(userdata);
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

// const signup = async (req, res) => {
//   const newUser = req.body;
//   const email=req.body.email
//   const user = await Users.findOne({email});

//   try {
//     if (user == null) {
//       Users.insertOne(newUser)
//       return res.status(201).json({
//         msg: "user registered successfully!",
//         data: { newuser },
//       });

//     } else {
//       return res
//         .status(404)
//         .json({ msg: "this email is taken please change it" });
//     }
//   } catch (error) {
//     return res.status(500).json(error.message);
//   }
// }

const deleteUser=async (req, res) => {
  try {
    const { userId } = req.params;

    const deletedUser = await Users.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted successfully", user: deletedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error while deleting user" });
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



module.exports={signup, addFriends , deleteUser}
