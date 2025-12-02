// middlewares/validate.js
export const validate = (schema) => {
  return (req, res, next) => {
    const data = {
      body: req.body,
      params: req.params,
      query: req.query,
    };

    const result = schema.safeParse(data);

    if (!result.success) {
      return res.status(400).json({
        status: 400,
        message: "Validation failed",
        errors: result.error.errors,
      });
    }

    req.validated = result.data;
    next();
  };
};
