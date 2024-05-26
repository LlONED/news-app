import mocks from "./mocks";

export function defaultRequest(uri, options) {
  if (import.meta.env["VITE_MOCK_API_NEWS"] === "true") {
    return new Promise((res) => setTimeout(() => res(mocks[uri]), 1000));
  } else {
    return fetch("https://flems.github.io/test/api" + uri, options).then(
      (data) => {
        return data.json();
      }
    );
  }
}
