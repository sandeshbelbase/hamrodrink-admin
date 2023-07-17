export const baseUrl = (req) => {
  const url = `${req.protocol}://${req.get("host")}`;
  return url;
};
