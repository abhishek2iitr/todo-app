import path from "path";
import { fileURLToPath } from "url";

// Resolve __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve everything in /public (we'll move index.html there)
app.use(express.static(path.join(__dirname, "public")));

// Fallback to index.html for root
app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Azure App Service injects PORT; default to 3000 when running locally
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`✅ Server started on http://localhost:${port}`);
});
