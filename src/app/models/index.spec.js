const { HttpStatus, HttpMethods, LogMessageType } = require('./');

describe('models barrel file', () => {
  describe('HttpStatus', () => {
    it('should have the status code as `200`', () => {
      expect(HttpStatus.OK).toEqual(200);
    });

    it('should have the status code as `404`', () => {
      expect(HttpStatus.NOT_FOUND).toEqual(404);
    });

    it('should have the status code as `400`', () => {
      expect(HttpStatus.BAD_REQUEST).toEqual(400);
    });

    it('should have the status code as `503`', () => {
      expect(HttpStatus.BAD_GATEWAY).toEqual(503);
    });
  });

  describe('HttpMethods', () => {
    it('should have the request method as `GET`', () => {
      expect(HttpMethods.GET).toEqual('GET');
    });

    it('should have the request method as `POST`', () => {
      expect(HttpMethods.POST).toEqual('POST');
    });

    it('should have the request method as `PUT`', () => {
      expect(HttpMethods.PUT).toEqual('PUT');
    });

    it('should have the request method as `PATCH`', () => {
      expect(HttpMethods.PATCH).toEqual('PATCH');
    });

    it('should have the request method as `DELETE`', () => {
      expect(HttpMethods.DELETE).toEqual('DELETE');
    });
  });

  describe('LogMessageType', () => {
    it('should have the type `error`', () => {
      expect(LogMessageType.error).toEqual('error');
    });

    it('should have the type `info`', () => {
      expect(LogMessageType.info).toEqual('info');
    });

    it('should have the type `warn`', () => {
      expect(LogMessageType.warn).toEqual('warn');
    });
  });
});
