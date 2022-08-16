const formidable = require("formidable");

module.exports = function (request) {
  const form = formidable({ multiples: true });
  form.parse(request, async (err, fields, files) => {
    return { ...fields, ...files };
  });
};
// Now, you can use the
//   parseFormData: async (request) => {
//     const form = formidable({ multiples: true });
//     form.parse(request, async (err, fields, files) => {
//       return { ...fields, ...files };
//     });
//   },
// };
