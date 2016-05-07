import User from '../models/User.js';
import helper from './helper.js';

export default {
  addUser: (req, res) => {
    const newUser = new User(req.body);

    newUser.save()
      .then((user) => {
        res.status(201).json({ user });
      })
      .error(helper.handleError(res));
  },
};