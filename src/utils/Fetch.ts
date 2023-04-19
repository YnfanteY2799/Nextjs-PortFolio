export type Mode = "POST" | "GET";

export default function Fetch(uri: string, mode: Mode = "GET", body?: any) {
  switch (mode) {
    case "GET":
      return fetch("http://localhost:3000/api/" + uri);
    case "POST":
      return fetch("http://localhost:3000/api/" + uri, { body, method: "POST" });
  }
}
