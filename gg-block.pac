function FindProxyForURL(url, host) {
  if (host.indexOf("goguardian") != -1) {
    return "PROXY 123.123.123.123:6969";
  }
  return "DIRECT";
}
