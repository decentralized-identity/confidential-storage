import { signCapabilityInvocation } from 'http-signature-zcap-invoke'
import { CapabilityInvoker } from '../CapabilityInvoker';
import * as ed25519 from '@transmute/did-key-ed25519';

import base64url from 'base64url';
import * as fixtures from '../__fixtures__';


it('can create signed invocation', async ()=> {
    const key = await ed25519.Ed25519KeyPair.generate({
        seed: base64url.toBuffer(fixtures.client[0].seed),
      });
      const invoker = new CapabilityInvoker(key);

      const url = 'https://example.com/resource/123';
        const method = 'GET';
        // const controller = 'did:example:456';
        const keyId = 'did:example:456#fingerprint';
        // const rootCapability = {
        // '@context': 'https://w3id.org/security/v2',
        // id: url,
        // invocationTarget: url,
        // controller,
        // invoker: null
        // };

    const signed = await signCapabilityInvocation({
        url,
        method,
        headers: {
            keyId,
            date: new Date().toUTCString()
        },
        json: {foo: true},
        invocationSigner: invoker,
        capabilityAction: 'read'
    });
    console.log(signed)
})