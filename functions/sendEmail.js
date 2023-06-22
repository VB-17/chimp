

const { Client } = require("@notionhq/client");
const { NOTION_EMAIL_DB, NOTION_EMAIL_INTEGRATION } = process.env;

const notion = new Client({ auth: NOTION_EMAIL_INTEGRATION });

const addEmailToDB = async ({ email }) => {
  // const allEmails = await notion.databases.query({
  //   database_id: NOTION_EMAIL_DB,
  // });

  const response = await notion.pages.create({
    parent: {
      type: "database_id",
      database_id: NOTION_EMAIL_DB,
    },
    properties: {
      Email: {
        type: "email",
        email,
      },
    },
  });

  return response;
};
exports.handler = async function (event, context) {
  try {
    const response = await notion.databases.query({
      database_id: NOTION_EMAIL_DB,
    });

    const { email } = JSON.parse(event.body);

    const addedEmail = await addEmailToDB({ email });

    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: e.toString(),
    };
  }
};
