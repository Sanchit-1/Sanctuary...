import axios from "axios";

const BASE_URL = "https://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjM0NmYzM2MzZmQ4N2Q2MTcxNGU5OSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2ODk0NzE5ODUsImV4cCI6MTY4OTczMTE4NX0.2JWjeDtmqGLKFNAdMulRY6A6krwcKerNwk4sUmfR_Oc";
export const publicRequest = axios.create({
  basrURL: BASE_URL,
});
export const userRequest = axios.create({
  basrURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
