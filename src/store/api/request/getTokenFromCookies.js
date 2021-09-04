export function getTokenFromCookies(cookies) {
  return cookies
    ? cookies.match("(^|;)\\s*" + "XSRF-TOKEN" + "\\s*=\\s*([^;]+)")?.pop()
    : "";
}
