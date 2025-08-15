exports.getAddHome = (req, res, next) => {
  res.render("./host/addHome", {
    pageTitle: "Add Home to airbnb",
    currentPage: "add-home",
  });
};
