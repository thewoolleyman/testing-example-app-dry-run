import {describe, expect, it, vi, afterEach, beforeEach} from 'vitest'
import createFetchMock from 'vitest-fetch-mock';
import {generateMessageOnServer} from "./api_client";
const fetchMock = createFetchMock(vi);
fetchMock.enableMocks();

describe('generateMessageOnServer', () => {

  beforeEach(() => {
    fetch.resetMocks();
  });

  describe('when the response is successful', async () => {
    it('returns success message', async () => {
      fetch.mockResponseOnce(JSON.stringify({message: `Hello Mock!`}));
      expect(await generateMessageOnServer()).eq('Hello Mock!');
    })
  });

  describe('when the response is a failure', async () => {
    it('returns error message', async () => {
      fetch.mockAbortOnce();
      expect(await generateMessageOnServer()).eq('The operation was aborted. ');
    })
  });
})
