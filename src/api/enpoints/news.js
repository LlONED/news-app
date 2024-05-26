import { defaultRequest } from "../defaultRequest";

export function requestNews(page = "") {
  return defaultRequest("/news/" + page);
}
