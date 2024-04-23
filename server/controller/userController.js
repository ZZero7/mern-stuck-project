import User from "../model/userModel.js";

export const create = async (req, res) => {
  try {
    const userData = new User(req.body);

    if (!userData) {
      return res.status(404).json({ msg: "Data not found" });
    }

    const savedData = await userData.save();
    res.status(200).json(savedData); // Corrected variable name
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message }); // Return error message
  }
};
export const getAll = async (req, res) => {
  try {
    const userData = await User.find();
    if (!userData) {
      return res.status(404).json({ msg: "Data not found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getone = async (req, res) => {
  try {
    const id = req.params.id; // Corrected typo: req.params.id
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(404).json({ msg: "User not found" }); // Corrected message
    }
    res.status(200).json(userExist);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);

    if (!userExist) {
      return res.status(404).json({ msg: "User not exit" }); // Corrected message
    }
    await User.findByIdAndDelete(id);
    res.status(200).json({ msg: "user delete" });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);

    if (!userExist) {
      return res.status(401).json({ msg: "User not found" }); // Corrected message
    }
    const updatedData = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedData);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};
