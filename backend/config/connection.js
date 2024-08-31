const mongoose = require("mongoose")

const uri = process.env.DB_URI

async function main() {
  await mongoose.connect(uri)
}

main()
  .then(() => console.log("DB is connected successfully"))
  .catch((err) => console.log(err))

module.exports = main
