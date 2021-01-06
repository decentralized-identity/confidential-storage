import { getFastify } from '../../server/server';
import { isRecipient, createRecipient, isNewEDV } from '../test-utils';

const { EdvClient, EdvDocument } = require('edv-client');

import mock from '../mock';

let invocationSigner: any;
let keyResolver: any;

export const getMocks = async () => {
  const fastifyServer = await getFastify();
  await fastifyServer.store.resetDatabase();
  await fastifyServer.listen(9876);
  await mock.init();
  invocationSigner = mock.invocationSigner;
  keyResolver = mock.keyResolver;
  return {
    //ours
    fastifyServer,

    //theirs
    invocationSigner,
    keyResolver,
    EdvClient,
    EdvDocument,
    mock,

    //
    isRecipient,
    createRecipient,
    isNewEDV,
  };
};
