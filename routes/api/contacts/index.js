const express = require("express");
const router = express.Router();
// const Contacts = require("../../model/contacts");
const validate = require("./validation");
const ContactsController = require("../../../controllers/contactsController");
const guard = require("../../../helpers/guard");

// router.get("/", async (req, res, next) => {
//   try {
//     const contacts = await Contacts.listContacts();
//     return res.json({
//       status: "success",
//       code: 200,
//       data: {
//         contacts,
//       },
//     });
//   } catch (e) {
//     next(e);
//   }
// });

// router.get("/:contactId", async (req, res, next) => {
//   try {
//     const contact = await Contacts.getContactById(req.params.contactId);
//     if (contact) {
//       return res.json({
//         status: "success",
//         code: 200,
//         data: {
//           contact,
//         },
//       });
//     } else {
//       return res.status(404).json({
//         status: "error",
//         code: 404,
//         data: "Not Found",
//       });
//     }
//   } catch (e) {
//     next(e);
//   }
// });

// router.post("/", validate.createContact, async (req, res, next) => {
//   try {
//     const contact = await Contacts.addContact(req.body);
//     return res.status(201).json({
//       status: "success",
//       code: 201,
//       data: {
//         contact,
//       },
//     });
//   } catch (e) {
//     next(e);
//   }
// });

// router.delete("/:contactId", async (req, res, next) => {
//   try {
//     const contact = await Contacts.removeContact(req.params.contactId);
//     if (contact) {
//       return res.json({
//         status: "success",
//         code: 200,
//         data: {
//           contact,
//         },
//       });
//     } else {
//       return res.status(404).json({
//         status: "error",
//         code: 404,
//         data: "Not Found",
//       });
//     }
//   } catch (e) {
//     next(e);
//   }
// });

// router.patch("/:contactId", validate.updateContact, async (req, res, next) => {
//   try {
//     const contact = await Contacts.updateContact(
//       req.params.contactId,
//       req.body
//     );
//     if (contact) {
//       return res.json({
//         status: "success",
//         code: 200,
//         data: {
//           contact,
//         },
//       });
//     } else {
//       return res.status(404).json({
//         status: "error",
//         code: 404,
//         data: "Not Found",
//       });
//     }
//   } catch (e) {
//     next(e);
//   }
// });

router.get("/", guard, ContactsController.getAllContacts);

router.get("/:contactId", guard, ContactsController.getContactById);

router.post(
  "/",
  guard,
  validate.createContact,
  ContactsController.createContact
);

router.delete("/:contactId", guard, ContactsController.deleteContact);

router.patch(
  "/:contactId",
  guard,
  validate.updateContact,
  ContactsController.patchContact
);
module.exports = router;
