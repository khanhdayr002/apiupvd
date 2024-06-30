const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const api = require("./routes/api");
const app = express();

app.use(helmet());
app.use(express.json());
app.use(cors());

app.use("/", api);

app.use((error, req, res, next) => {
  res.status(error.status).json({ message: error.message });
});
// const uri = "mongodb+srv://Disryter123:Disryter123@cluster0.dppma.mongodb.net/databot?retryWrites=true&w=majority";

(async () => {
  // await mongoose.connect(uri, {
  //   useUnifiedTopology: true,
  //   useNewUrlParser: true,
  //   useCreateIndex: true,
  // });
  app.listen(process.env.PORT || 80);
const chalk = require('chalkercli');
const rainbow = chalk.rainbow(`
======================================================
╏                                                    ╏
╏                                                    ╏
╏                  Rin Tohsaka                       ╏
╏                                                    ╏
╏                                                    ╏
╏            𝐍𝐀𝐌𝐄 : Trung Hiếu                      ╏
╏            𝐁𝐈𝐑𝐓𝐇𝐃𝐀𝐘: 16/03/2004                   ╏
╏            𝐆𝐈𝐓𝐇𝐔𝐁: HieuSimpRin                     ╏
╏            𝐙𝐀𝐋𝐎 : 0868250736                       ╏
╏            𝐅𝐁 : m.me/100086415765506               ╏
╏                                                    ╏
======================================================

◆━━━━━━━━━━━━◆『 HieuSimpRin 』◆━━━━━━━━━━━━◆`
    );
})();
