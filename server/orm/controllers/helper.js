export default {
  handleError: (res) => {
    return (error) => {
      console.log(error.message);
      return res.status(500).json({ error: error.message });
    };
  },
};
