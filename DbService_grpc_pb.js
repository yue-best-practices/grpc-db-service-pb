// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var DbService_pb = require('./DbService_pb.js');

function serialize_com_yue_dbservice_countRequest(arg) {
  if (!(arg instanceof DbService_pb.countRequest)) {
    throw new Error('Expected argument of type com.yue.dbservice.countRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_yue_dbservice_countRequest(buffer_arg) {
  return DbService_pb.countRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_yue_dbservice_countResponse(arg) {
  if (!(arg instanceof DbService_pb.countResponse)) {
    throw new Error('Expected argument of type com.yue.dbservice.countResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_yue_dbservice_countResponse(buffer_arg) {
  return DbService_pb.countResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_yue_dbservice_delRequest(arg) {
  if (!(arg instanceof DbService_pb.delRequest)) {
    throw new Error('Expected argument of type com.yue.dbservice.delRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_yue_dbservice_delRequest(buffer_arg) {
  return DbService_pb.delRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_yue_dbservice_delResponse(arg) {
  if (!(arg instanceof DbService_pb.delResponse)) {
    throw new Error('Expected argument of type com.yue.dbservice.delResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_yue_dbservice_delResponse(buffer_arg) {
  return DbService_pb.delResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_yue_dbservice_getOneRequest(arg) {
  if (!(arg instanceof DbService_pb.getOneRequest)) {
    throw new Error('Expected argument of type com.yue.dbservice.getOneRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_yue_dbservice_getOneRequest(buffer_arg) {
  return DbService_pb.getOneRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_yue_dbservice_getOneResponse(arg) {
  if (!(arg instanceof DbService_pb.getOneResponse)) {
    throw new Error('Expected argument of type com.yue.dbservice.getOneResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_yue_dbservice_getOneResponse(buffer_arg) {
  return DbService_pb.getOneResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_yue_dbservice_getRequest(arg) {
  if (!(arg instanceof DbService_pb.getRequest)) {
    throw new Error('Expected argument of type com.yue.dbservice.getRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_yue_dbservice_getRequest(buffer_arg) {
  return DbService_pb.getRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_yue_dbservice_getResponse(arg) {
  if (!(arg instanceof DbService_pb.getResponse)) {
    throw new Error('Expected argument of type com.yue.dbservice.getResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_yue_dbservice_getResponse(buffer_arg) {
  return DbService_pb.getResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_yue_dbservice_listRequest(arg) {
  if (!(arg instanceof DbService_pb.listRequest)) {
    throw new Error('Expected argument of type com.yue.dbservice.listRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_yue_dbservice_listRequest(buffer_arg) {
  return DbService_pb.listRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_yue_dbservice_listResponse(arg) {
  if (!(arg instanceof DbService_pb.listResponse)) {
    throw new Error('Expected argument of type com.yue.dbservice.listResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_yue_dbservice_listResponse(buffer_arg) {
  return DbService_pb.listResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_yue_dbservice_multiGetRequest(arg) {
  if (!(arg instanceof DbService_pb.multiGetRequest)) {
    throw new Error('Expected argument of type com.yue.dbservice.multiGetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_yue_dbservice_multiGetRequest(buffer_arg) {
  return DbService_pb.multiGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_yue_dbservice_multiGetResponse(arg) {
  if (!(arg instanceof DbService_pb.multiGetResponse)) {
    throw new Error('Expected argument of type com.yue.dbservice.multiGetResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_yue_dbservice_multiGetResponse(buffer_arg) {
  return DbService_pb.multiGetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_yue_dbservice_saveRequest(arg) {
  if (!(arg instanceof DbService_pb.saveRequest)) {
    throw new Error('Expected argument of type com.yue.dbservice.saveRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_yue_dbservice_saveRequest(buffer_arg) {
  return DbService_pb.saveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_yue_dbservice_saveResponse(arg) {
  if (!(arg instanceof DbService_pb.saveResponse)) {
    throw new Error('Expected argument of type com.yue.dbservice.saveResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_yue_dbservice_saveResponse(buffer_arg) {
  return DbService_pb.saveResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_yue_dbservice_sumRequest(arg) {
  if (!(arg instanceof DbService_pb.sumRequest)) {
    throw new Error('Expected argument of type com.yue.dbservice.sumRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_yue_dbservice_sumRequest(buffer_arg) {
  return DbService_pb.sumRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_yue_dbservice_sumResponse(arg) {
  if (!(arg instanceof DbService_pb.sumResponse)) {
    throw new Error('Expected argument of type com.yue.dbservice.sumResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_yue_dbservice_sumResponse(buffer_arg) {
  return DbService_pb.sumResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_yue_dbservice_toManyRequest(arg) {
  if (!(arg instanceof DbService_pb.toManyRequest)) {
    throw new Error('Expected argument of type com.yue.dbservice.toManyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_yue_dbservice_toManyRequest(buffer_arg) {
  return DbService_pb.toManyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_yue_dbservice_toManyResponse(arg) {
  if (!(arg instanceof DbService_pb.toManyResponse)) {
    throw new Error('Expected argument of type com.yue.dbservice.toManyResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_yue_dbservice_toManyResponse(buffer_arg) {
  return DbService_pb.toManyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_yue_dbservice_toOneRequest(arg) {
  if (!(arg instanceof DbService_pb.toOneRequest)) {
    throw new Error('Expected argument of type com.yue.dbservice.toOneRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_yue_dbservice_toOneRequest(buffer_arg) {
  return DbService_pb.toOneRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_yue_dbservice_toOneResponse(arg) {
  if (!(arg instanceof DbService_pb.toOneResponse)) {
    throw new Error('Expected argument of type com.yue.dbservice.toOneResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_yue_dbservice_toOneResponse(buffer_arg) {
  return DbService_pb.toOneResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_yue_dbservice_updateRequest(arg) {
  if (!(arg instanceof DbService_pb.updateRequest)) {
    throw new Error('Expected argument of type com.yue.dbservice.updateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_yue_dbservice_updateRequest(buffer_arg) {
  return DbService_pb.updateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_yue_dbservice_updateResponse(arg) {
  if (!(arg instanceof DbService_pb.updateResponse)) {
    throw new Error('Expected argument of type com.yue.dbservice.updateResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_yue_dbservice_updateResponse(buffer_arg) {
  return DbService_pb.updateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var DbServiceService = exports.DbServiceService = {
  get: {
    path: '/com.yue.dbservice.DbService/get',
    requestStream: false,
    responseStream: false,
    requestType: DbService_pb.getRequest,
    responseType: DbService_pb.getResponse,
    requestSerialize: serialize_com_yue_dbservice_getRequest,
    requestDeserialize: deserialize_com_yue_dbservice_getRequest,
    responseSerialize: serialize_com_yue_dbservice_getResponse,
    responseDeserialize: deserialize_com_yue_dbservice_getResponse,
  },
  getOne: {
    path: '/com.yue.dbservice.DbService/getOne',
    requestStream: false,
    responseStream: false,
    requestType: DbService_pb.getOneRequest,
    responseType: DbService_pb.getOneResponse,
    requestSerialize: serialize_com_yue_dbservice_getOneRequest,
    requestDeserialize: deserialize_com_yue_dbservice_getOneRequest,
    responseSerialize: serialize_com_yue_dbservice_getOneResponse,
    responseDeserialize: deserialize_com_yue_dbservice_getOneResponse,
  },
  list: {
    path: '/com.yue.dbservice.DbService/list',
    requestStream: false,
    responseStream: false,
    requestType: DbService_pb.listRequest,
    responseType: DbService_pb.listResponse,
    requestSerialize: serialize_com_yue_dbservice_listRequest,
    requestDeserialize: deserialize_com_yue_dbservice_listRequest,
    responseSerialize: serialize_com_yue_dbservice_listResponse,
    responseDeserialize: deserialize_com_yue_dbservice_listResponse,
  },
  save: {
    path: '/com.yue.dbservice.DbService/save',
    requestStream: false,
    responseStream: false,
    requestType: DbService_pb.saveRequest,
    responseType: DbService_pb.saveResponse,
    requestSerialize: serialize_com_yue_dbservice_saveRequest,
    requestDeserialize: deserialize_com_yue_dbservice_saveRequest,
    responseSerialize: serialize_com_yue_dbservice_saveResponse,
    responseDeserialize: deserialize_com_yue_dbservice_saveResponse,
  },
  update: {
    path: '/com.yue.dbservice.DbService/update',
    requestStream: false,
    responseStream: false,
    requestType: DbService_pb.updateRequest,
    responseType: DbService_pb.updateResponse,
    requestSerialize: serialize_com_yue_dbservice_updateRequest,
    requestDeserialize: deserialize_com_yue_dbservice_updateRequest,
    responseSerialize: serialize_com_yue_dbservice_updateResponse,
    responseDeserialize: deserialize_com_yue_dbservice_updateResponse,
  },
  del: {
    path: '/com.yue.dbservice.DbService/del',
    requestStream: false,
    responseStream: false,
    requestType: DbService_pb.delRequest,
    responseType: DbService_pb.delResponse,
    requestSerialize: serialize_com_yue_dbservice_delRequest,
    requestDeserialize: deserialize_com_yue_dbservice_delRequest,
    responseSerialize: serialize_com_yue_dbservice_delResponse,
    responseDeserialize: deserialize_com_yue_dbservice_delResponse,
  },
  multiGet: {
    path: '/com.yue.dbservice.DbService/multiGet',
    requestStream: false,
    responseStream: false,
    requestType: DbService_pb.multiGetRequest,
    responseType: DbService_pb.multiGetResponse,
    requestSerialize: serialize_com_yue_dbservice_multiGetRequest,
    requestDeserialize: deserialize_com_yue_dbservice_multiGetRequest,
    responseSerialize: serialize_com_yue_dbservice_multiGetResponse,
    responseDeserialize: deserialize_com_yue_dbservice_multiGetResponse,
  },
  toOne: {
    path: '/com.yue.dbservice.DbService/toOne',
    requestStream: false,
    responseStream: false,
    requestType: DbService_pb.toOneRequest,
    responseType: DbService_pb.toOneResponse,
    requestSerialize: serialize_com_yue_dbservice_toOneRequest,
    requestDeserialize: deserialize_com_yue_dbservice_toOneRequest,
    responseSerialize: serialize_com_yue_dbservice_toOneResponse,
    responseDeserialize: deserialize_com_yue_dbservice_toOneResponse,
  },
  toMany: {
    path: '/com.yue.dbservice.DbService/toMany',
    requestStream: false,
    responseStream: false,
    requestType: DbService_pb.toManyRequest,
    responseType: DbService_pb.toManyResponse,
    requestSerialize: serialize_com_yue_dbservice_toManyRequest,
    requestDeserialize: deserialize_com_yue_dbservice_toManyRequest,
    responseSerialize: serialize_com_yue_dbservice_toManyResponse,
    responseDeserialize: deserialize_com_yue_dbservice_toManyResponse,
  },
  count: {
    path: '/com.yue.dbservice.DbService/count',
    requestStream: false,
    responseStream: false,
    requestType: DbService_pb.countRequest,
    responseType: DbService_pb.countResponse,
    requestSerialize: serialize_com_yue_dbservice_countRequest,
    requestDeserialize: deserialize_com_yue_dbservice_countRequest,
    responseSerialize: serialize_com_yue_dbservice_countResponse,
    responseDeserialize: deserialize_com_yue_dbservice_countResponse,
  },
  sum: {
    path: '/com.yue.dbservice.DbService/sum',
    requestStream: false,
    responseStream: false,
    requestType: DbService_pb.sumRequest,
    responseType: DbService_pb.sumResponse,
    requestSerialize: serialize_com_yue_dbservice_sumRequest,
    requestDeserialize: deserialize_com_yue_dbservice_sumRequest,
    responseSerialize: serialize_com_yue_dbservice_sumResponse,
    responseDeserialize: deserialize_com_yue_dbservice_sumResponse,
  },
};

exports.DbServiceClient = grpc.makeGenericClientConstructor(DbServiceService);
