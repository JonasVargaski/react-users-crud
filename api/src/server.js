const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const jsonServer = require("json-server");
const jwt = require("jsonwebtoken");

const databaseDir = path.join(__dirname, "db.json");

const server = jsonServer.create();
const router = jsonServer.router(databaseDir);

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(jsonServer.defaults());

const SECRET_KEY = "123456789101112";
const expiresIn = "1d";

function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY, (err, decode) =>
    decode !== undefined ? decode : err
  );
}

function isRegistered({ email }) {
  const database = JSON.parse(fs.readFileSync(databaseDir, "UTF-8"));

  return database.users.some(user => user.email === email);
}

function auth({ email, password }) {
  const database = JSON.parse(fs.readFileSync(databaseDir, "UTF-8"));

  return database.users.some(
    user => user.email === email && user.password === password && user.active
  );
}

server.post("/auth/register", (req, res) => {
  const { name, lastName, email, password, isAdmin, active } = req.body;

  if (isRegistered({ email })) {
    return res
      .status(400)
      .json({ message: "Email já cadastrado na base de dados" });
  }

  const database = JSON.parse(fs.readFileSync(databaseDir, "UTF-8"));
  const lastId = database.users.pop().id || 0;

  const user = {
    id: lastId,
    name,
    lastName,
    email,
    password,
    isAdmin,
    active
  };

  database.users.push(user);

  fs.writeFileSync(databaseDir, JSON.stringify(database), "UTF-8");

  return res.status(200).end();
});

server.post("/auth/login", (req, res) => {
  const { email, password } = req.body;

  if (!auth({ email, password })) {
    res.status(400).json({ message: "Email ou senha inválidos" });
    return;
  }

  const database = JSON.parse(fs.readFileSync(databaseDir, "UTF-8"));
  const user = database.users.find(user => user.email === email);

  if (user) {
    const token = createToken({ id: user.id, email: user.email });
    return res.status(200).send({ user: { ...user, password: null }, token });
  }

  res.status(500).end();
});

server.use(/^(?!\/auth).*$/, (req, res, next) => {
  if (
    req.headers.authorization === undefined ||
    req.headers.authorization.split(" ")[0] !== "Bearer"
  ) {
    return res.status(401).json({ message: "Token em formato inválido" });
  }
  try {
    let verifyTokenResult;
    verifyTokenResult = verifyToken(req.headers.authorization.split(" ")[1]);

    if (verifyTokenResult instanceof Error) {
      return res.status(401).json({ message: "Token não informado" });
    }
    next();
  } catch (err) {
    res.status(401).json({ message: "Token revogado" });
  }
});

server.use(router);

server.listen(process.env.PORT || 3001);
