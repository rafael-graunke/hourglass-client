import config from '../config/config';

export function getApiRoute() {
  const host = config.apiHost;
  const port = config.apiPort;
  return `http://${host}:${port}`;
}
