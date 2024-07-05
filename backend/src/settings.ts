import dotenv from "dotenv";

dotenv.config();

export const CORS_ALLOWED_ORIGIN = process.env.CORS_ALLOWED_ORIGIN || "";
export const PORT = process.env.PORT || 3031;
