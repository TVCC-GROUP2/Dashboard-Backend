const GetLoginCount = async (req, res) => {
    try {
        return res.status(200).json("Random Response");
    } catch (err) {
      console.error(err);
      return res.status(400).json({
        success: false,
        data: err,
      });
    }
  };


  module.exports = {
    GetLoginCount,
  };