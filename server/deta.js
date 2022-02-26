const { Deta } = require("deta"); // import Deta

// Initialize with a Project Key
const deta = Deta("your key");

// This how to connect to or create a database.
const db = deta.Base("test_db");
const drive = deta.Drive("test_drive");

// db.put({ name: "alex", age: 27 });

async function fetch() {
  const { items: myFirstSet } = await db.fetch();
  // const { items: myFirstSet } = await db.fetch({ "age?lt": 30 });
  return myFirstSet;
}

async function get() {
  const item = await db.get("pei7jbxccxw4");
  return item;
}

fetch().then((data) => {
  // json to object use JSON.parse(`json`)
  console.log(`fetch result ${JSON.stringify(data)}`);
});

get().then((data) => {
  console.log(`get result ${JSON.stringify(data)}`);
});

async function insert() {
  const result = await db.insert("hello world!");
  console.log(result);
}

insert().then((data) => {
  console.log(data);
});

drive.put("test2.jpg", {
  //   data: Buffer.from(
  //     "https://pixabay.com/get/g72555f456992a36fc863aed7e793c71690a22b90fd7287a8a2bf8eeebc4251a1487d1f79d8084667782ad12374eb2355_640.jpg"
  //   ),
  path: "https://pixabay.com/get/g72555f456992a36fc863aed7e793c71690a22b90fd7287a8a2bf8eeebc4251a1487d1f79d8084667782ad12374eb2355_640.jpg"
//   path: "public/0jDj9KaSw.jpg"
});
