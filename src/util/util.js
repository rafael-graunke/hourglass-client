import config from '../config/config';

export function getApiRoute() {
  const host = config.apiHost;
  const port = config.apiPort;
  const protocol = config.apiProtocol;
  return `${protocol}://${host}:${port}`;
}
