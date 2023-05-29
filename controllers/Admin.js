import argon from "argon2";
import Admin from "../models/AdminModel.js";

const { argon2id } = argon;

export const getAdmins = async (req, res) => {
  try {
    const response = await Admin.findAll({ attributes: ["uuid", "name"] });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getAdminById = async (req, res) => {
  try {
    const response = await Admin.findOne({
      attributes: ["uuid", "name"],
      where: {
        uuid: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createAdmins = async (req, res) => {
  const { name, password, confPassword } = req.body;
  if (password !== confPassword)
    return res
      .status(400)
      .json({ msg: "Password dan confirm password tidak sama" });
  const hashPassword = await argon.hash(password);
  try {
    await Admin.create({
      name: name,
      password: hashPassword,
    });
    res.status(201).json({ msg: "Admin Created" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const updateAdmins = async (req, res) => {
  const admin = await Admin.findOne({
    where: {
      uuid: req.params.id,
    },
  });
  if (!admin) return res.status(404).json({ msg: "admin tidak ditemukan" });

  const { name, password, confPassword } = req.body;
  let hashPassword;

  if (password === "" || password === null) {
    hashPassword = admin.password;
  } else {
    hashPassword = await argon.hash(password);
  }

  if (password !== confPassword)
    return res
      .status(400)
      .json({ msg: "Password dan confirm password tidak sama" });

  try {
    await Admin.update(
      {
        name: name,
        password: hashPassword,
      },
      {
        where: {
          id: admin.id,
        },
      }
    );
    res.status(200).json({ msg: "Admin Updated" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteAdmins = async (req, res) => {
  const admin = await Admin.findOne({
    where: {
      uuid: req.params.id,
    },
  });
  if (!admin) return res.status(404).json({ msg: "admin tidak ditemukan" });

  try {
    await Admin.destroy({
      where: {
        id: admin.id,
      },
    });
    res.status(200).json({ msg: "Admin Deleted" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
