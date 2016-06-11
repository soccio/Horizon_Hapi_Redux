import Horizon from '@horizon/client';

const hz = Horizon({
  secure: false
});

hz.connect();

export default hz;
